export function getFileBase64StringBy(base64string: string, type: string): string {
  return `data:${type};base64,${base64string}`;
}

export function extractBase64FromDataUrl(dataUrl: string): string {
  const parts = dataUrl.split(',');
  if (parts.length !== 2 || !parts[0].includes('base64')) {
    throw new Error('Invalid Base64 Data URL');
  }
  return parts[1];
}
