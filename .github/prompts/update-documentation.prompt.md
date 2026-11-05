---
description: Update Food Delivery project documentation based on confirmed implementation changes and requirements.
---

# Update Documentation

Act as the Orchestrator for the Food Delivery project.

Your task is to coordinate documentation updates based on completed and confirmed changes.

Keep documentation accurate, concise, and consistent with the actual implementation.

## 1. Read project instructions

Read the applicable project instructions:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/agent-protocol.md`
- `spec.md`

Identify and read relevant Skills from `.github/skills/` when needed.

Do not load unrelated Skills.

## 2. Identify documentation scope

Inspect the current Git diff and determine:

- which implementation changes have been completed;
- which documentation files may need updates;
- which requirements or technical conventions are affected;
- whether the changes are approved and within the agreed Scope.

Distinguish current task changes from unrelated or pre-existing modifications.

Use the task description, approved plan, Task Contract, and implementation report when available.

Verify important claims against the current code.

Do not assume that every code change requires documentation updates.

## 3. Determine which documentation needs updating

Consider the responsibility of each document:

- `spec.md` — confirmed product behavior, user-facing functionality, and business requirements.
- `AGENTS.md` — project workflow, collaboration rules, and development constraints.
- `.github/copilot-instructions.md` — general technical conventions and persistent instructions for Copilot.
- `.github/agent-protocol.md` — agent collaboration, Task Contracts, delegation, and reporting.
- `.github/skills/` — specialized technical knowledge and project-specific implementation patterns.
- `.github/prompts/` — reusable task workflows for Copilot.

Update only documents whose responsibilities are directly affected.

Do not copy the same information into multiple documents without a clear reason.

Do not turn implementation details into product requirements.

## 4. Verify documentation content

Before proposing or making changes:

- compare existing documentation with the actual implementation;
- identify outdated, missing, duplicated, or contradictory information;
- distinguish confirmed facts from assumptions;
- check references to file paths, commands, dependencies, and versions;
- preserve existing document structure and conventions.

Never invent:

- product behavior;
- business rules;
- API contracts;
- backend workflows;
- validation requirements;
- authentication or payment behavior;
- technical dependencies or tools.

If information is missing or contradictory, report it and request clarification when necessary.

## 5. Prepare documentation changes

For every proposed change, explain:

- target file;
- reason for updating it;
- information to add, modify, or remove;
- source of confirmation;
- potential impact on other project documents.

Keep changes focused.

Avoid unrelated rewriting, duplication, and unnecessary restructuring.

If documentation changes introduce or modify product behavior, verify that the behavior has been explicitly approved.

Do not update `spec.md` with unapproved assumptions.

## 6. Approval and implementation

Follow the approval requirements in `AGENTS.md` and other applicable project instructions.

A separate planning approval is not mandatory for every small documentation correction.

For straightforward updates that accurately document already approved and implemented behavior, proceed when project instructions permit.

For changes that introduce new requirements, alter architectural decisions, modify public contracts, or expand the approved Scope:

- stop;
- explain the proposed changes;
- request approval before editing.

Do not modify implementation code as part of a documentation task unless explicitly included in the approved Scope.

## 7. Documentation quality

Ensure that updated documentation:

- is written in clear and consistent English, unless the target document uses another established language;
- uses correct project terminology;
- references actual files and directories;
- avoids obsolete instructions;
- does not contradict existing project rules;
- is concise and easy to maintain;
- distinguishes current implementation from recommendations or future possibilities.

Update links and cross-references when necessary.

Do not create additional documentation files unless they are justified by the task and approved Scope.

## 8. Validation

After documentation changes:

- inspect the final diff;
- verify Markdown structure and formatting;
- verify referenced file paths;
- check for contradictions with related documents;
- confirm that no unrelated files were modified.

Do not run commands that automatically rewrite files or perform mass formatting.

Run application tests or builds only if the documentation change affects executable configuration or code, which should normally be outside this Prompt's scope.

Report only checks actually performed.

## 9. Delegation

If documentation review or implementation is delegated:

- verify that the required agent and invocation mechanism are actually available;
- follow `.github/agent-protocol.md`;
- provide a complete Task Contract;
- assign only one clearly defined responsibility per agent;
- do not assume that agents inherit conversation context.

Use Reviewer only for independent read-only review after documentation changes are complete.

Do not invent agent profiles or tools.

If delegation is unavailable, continue independently and state the limitation when relevant.

## 10. Final report

Return the result in Russian using this structure:

### Status

Choose one:

- **Completed** — documentation updated and validated.
- **No changes required** — existing documentation is accurate.
- **Approval required** — proposed changes require approval.
- **Blocked** — essential information is missing or contradictory.

### Summary

Explain what was updated and why.

### Files changed

List documentation files actually modified.

### Changes

Summarize the important updates.

### Validation

List checks actually performed and their results.

### Risks and limitations

Mention unresolved questions, missing information, and remaining inconsistencies.

## 11. Restrictions

- Do not invent requirements or implementation details.
- Do not update unrelated documents.
- Do not duplicate information unnecessarily.
- Do not modify source code unless explicitly approved.
- Do not change dependencies or configuration.
- Do not delete documentation without approval.
- Do not overwrite unrelated user changes.
- Do not claim validation that was not performed.
- Do not claim delegation unless an agent was actually invoked.
