$ErrorActionPreference = 'Stop'

$maxInputBytes = 262144
$readTimeoutMilliseconds = 1500
$diagnosticPath = Join-Path $env:LOCALAPPDATA 'CopilotHookDiagnostics\food-delivery-guard.jsonl'

function Get-ValueType {
  param([AllowNull()][object]$Value)

  if ($null -eq $Value) {
    return 'null'
  }

  if ($Value -is [string]) {
    return 'string'
  }

  if ($Value -is [bool]) {
    return 'boolean'
  }

  if ($Value -is [System.Collections.IDictionary]) {
    return 'object'
  }

  if ($Value -is [System.Collections.IEnumerable]) {
    return 'array'
  }

  if ($Value -is [ValueType]) {
    return 'number'
  }

  return 'object'
}

function Get-JsonShape {
  param(
    [AllowNull()][object]$Value,
    [int]$Depth = 0
  )

  $valueType = Get-ValueType -Value $Value
  if ($Depth -ge 6) {
    return @{ type = $valueType; truncated = $true }
  }

  if ($null -eq $Value) {
    return @{ type = 'null' }
  }

  if ($Value -is [string]) {
    return @{ type = 'string'; length = $Value.Length }
  }

  if ($Value -is [bool] -or $Value -is [ValueType]) {
    return @{ type = $valueType }
  }

  if ($Value -is [System.Collections.IDictionary]) {
    $properties = [ordered]@{}
    foreach ($key in $Value.Keys) {
      $name = [string]$key
      if ($name -match '(?i)(secret|token|password|passwd|credential|authorization|cookie|private.?key|api.?key|access.?key)') {
        $properties['[REDACTED_FIELD]'] = @{ type = 'redacted' }
      } else {
        $properties[$name] = Get-JsonShape -Value $Value[$key] -Depth ($Depth + 1)
      }
    }

    return @{ type = 'object'; properties = $properties }
  }

  if ($Value -is [System.Collections.IEnumerable]) {
    $items = @($Value)
    $sample = @()
    foreach ($item in ($items | Select-Object -First 5)) {
      $sample += ,(Get-JsonShape -Value $item -Depth ($Depth + 1))
    }

    return @{ type = 'array'; count = $items.Count; sample = $sample }
  }

  $objectProperties = [ordered]@{}
  foreach ($property in $Value.PSObject.Properties) {
    if ($property.MemberType -notin @('NoteProperty', 'Property', 'AliasProperty', 'ScriptProperty')) {
      continue
    }

    $name = [string]$property.Name
    if ($name -match '(?i)(secret|token|password|passwd|credential|authorization|cookie|private.?key|api.?key|access.?key)') {
      $objectProperties['[REDACTED_FIELD]'] = @{ type = 'redacted' }
    } else {
      $objectProperties[$name] = Get-JsonShape -Value $property.Value -Depth ($Depth + 1)
    }
  }

  return @{ type = 'object'; properties = $objectProperties }
}

function Find-ToolNameCandidates {
  param(
    [AllowNull()][object]$Value,
    [string]$ParentName = '',
    [int]$Depth = 0
  )

  if ($null -eq $Value -or $Depth -ge 6) {
    return
  }

  if ($Value -is [System.Collections.IDictionary]) {
    foreach ($key in $Value.Keys) {
      $name = [string]$key
      $child = $Value[$key]
      $isToolName = $name -match '(?i)^tool[_-]?name$' -or
        ($ParentName -match '(?i)^tool$' -and $name -match '(?i)^name$')

      if ($isToolName -and $child -is [string] -and $child -match '^[A-Za-z0-9_.:-]{1,128}$') {
        $child
      }

      Find-ToolNameCandidates -Value $child -ParentName $name -Depth ($Depth + 1)
    }

    return
  }

  if ($Value -is [System.Collections.IEnumerable] -and $Value -isnot [string]) {
    foreach ($item in ($Value | Select-Object -First 20)) {
      Find-ToolNameCandidates -Value $item -ParentName $ParentName -Depth ($Depth + 1)
    }

    return
  }

  foreach ($property in $Value.PSObject.Properties) {
    if ($property.MemberType -notin @('NoteProperty', 'Property', 'AliasProperty', 'ScriptProperty')) {
      continue
    }

    $name = [string]$property.Name
    if ($name -match '(?i)(secret|token|password|passwd|credential|authorization|cookie|private.?key|api.?key|access.?key)') {
      continue
    }

    $child = $property.Value
    $isToolName = $name -match '(?i)^tool[_-]?name$' -or
      ($ParentName -match '(?i)^tool$' -and $name -match '(?i)^name$')

    if ($isToolName -and $child -is [string] -and $child -match '^[A-Za-z0-9_.:-]{1,128}$') {
      $child
    }

    Find-ToolNameCandidates -Value $child -ParentName $name -Depth ($Depth + 1)
  }
}

try {
  $stdinRedirected = [Console]::IsInputRedirected
  $stdinStatus = if ($stdinRedirected) { 'redirected-not-read' } else { 'not-redirected' }
  $stdinLength = $null
  $stdinShape = $null
  $toolNameCandidates = @()

  if ($stdinRedirected) {
    $inputStream = [Console]::OpenStandardInput()
    $memoryStream = [System.IO.MemoryStream]::new()
    $buffer = New-Object byte[] 4096
    $stdinStatus = 'read-timeout'

    while ($memoryStream.Length -le $maxInputBytes) {
      $readTask = $inputStream.ReadAsync($buffer, 0, $buffer.Length)
      if (-not $readTask.Wait($readTimeoutMilliseconds)) {
        break
      }

      $bytesRead = $readTask.Result
      if ($bytesRead -eq 0) {
        $stdinStatus = 'eof'
        break
      }

      $memoryStream.Write($buffer, 0, $bytesRead)
      if ($memoryStream.Length -gt $maxInputBytes) {
        $stdinStatus = 'input-too-large'
        break
      }
    }

    $stdinLength = $memoryStream.Length
    if ($stdinStatus -eq 'eof' -and $stdinLength -gt 0) {
      $inputText = [System.Text.Encoding]::UTF8.GetString($memoryStream.ToArray()).TrimStart([char]0xFEFF)
      try {
        $payload = ConvertFrom-Json -InputObject $inputText -ErrorAction Stop
        $stdinStatus = 'json-parsed'
        $stdinShape = Get-JsonShape -Value $payload
        $toolNameCandidates = @(
          Find-ToolNameCandidates -Value $payload |
            Select-Object -Unique
        )
      } catch {
        $stdinStatus = 'redirected-non-json'
      }
    }

    $memoryStream.Dispose()
    $inputStream.Dispose()
  }

  $hookEnvironmentNames = @(
    Get-ChildItem Env: |
      Where-Object { $_.Name -match '(?i)(COPILOT|HOOK|AGENT|TOOL)' } |
      ForEach-Object Name |
      Sort-Object
  )

  $record = [ordered]@{
    invokedAt = [DateTimeOffset]::Now.ToString('o')
    hookInvoked = $true
    stdinRedirected = $stdinRedirected
    stdinStatus = $stdinStatus
    stdinByteCount = $stdinLength
    stdinStructure = $stdinShape
    toolNameCandidates = $toolNameCandidates
    scriptArgumentCount = @($args).Count
    processArgumentCount = [Environment]::GetCommandLineArgs().Length
    relevantEnvironmentVariableNames = $hookEnvironmentNames
  }

  $jsonLine = ConvertTo-Json -InputObject $record -Compress -Depth 10
  $diagnosticDirectory = Split-Path -Parent $diagnosticPath
  [System.IO.Directory]::CreateDirectory($diagnosticDirectory) | Out-Null
  $encoding = New-Object System.Text.UTF8Encoding($false)
  $writer = New-Object System.IO.StreamWriter($diagnosticPath, $true, $encoding)
  try {
    $writer.WriteLine($jsonLine)
  } finally {
    $writer.Dispose()
  }
} catch {
  [Console]::Error.WriteLine('Hook diagnostic could not record this invocation.')
}
