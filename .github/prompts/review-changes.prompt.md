---
description: Prepare and coordinate an independent code review by the Reviewer agent for completed Food Delivery changes.
---

# Review Changes

Act as the Orchestrator for the Food Delivery project.

Your task is to coordinate an independent review of completed changes by the existing `reviewer` agent.

Do not perform implementation work or modify files.

## 1. Read project instructions

Read the applicable project instructions:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/agent-protocol.md`
- Relevant requirements from `spec.md`

Identify relevant Skills from `.github/skills/` and read their instructions when needed to understand the affected areas.

Do not load unrelated Skills.

## 2. Identify the changes

Inspect the current Git diff and determine:

- modified files;
- added files;
- deleted files;
- the task associated with the changes;
- relevant surrounding implementation;
- related tests and documentation.

Distinguish changes belonging to the current task from unrelated or pre-existing working-tree changes.

If the task description, approved plan, or previous analysis is available, use it as context, but verify important details against the current implementation.

Do not assume that all current changes belong to one task.

## 3. Verify review readiness

Before delegating, establish whether the implementation is complete.

Check the available materials:

- original task description;
- approved Scope;
- Task Contract;
- Architect plan, if applicable;
- acceptance criteria;
- relevant requirements from `spec.md`;
- completed implementation diff.

Do not invent missing information.

If essential information is unavailable, identify exactly what is missing.

If the implementation is incomplete or the Scope is unclear, do not delegate an unrestricted review. Report the blocker or request clarification.

A separate Architect plan is not mandatory for every task. Follow the approval requirements in `AGENTS.md` and other applicable project instructions.

## 4. Prepare the Reviewer Task Contract

Use the required Task Contract format from `.github/agent-protocol.md`.

The contract must contain all required fields:

1. Task ID
2. Role: `Code Reviewer`
3. Objective
4. Context
5. Relevant requirements
6. Constraints
7. Scope (read-only)
8. Approval status
9. Deliverables
10. Acceptance criteria

Include only information relevant to the review.

Provide the Reviewer with:

- the exact task being reviewed;
- the approved Scope;
- relevant files and requirements;
- the Architect plan, if one exists;
- acceptance criteria;
- relevant implementation and test locations;
- known limitations or pre-existing issues, if confirmed.

Do not pass the entire conversation history unless necessary.

Do not claim that a plan, approval, or Task Contract exists unless it is actually available.

## 5. Delegate the review

Use the existing `reviewer` agent profile.

Before delegation:

- verify that the Reviewer agent is actually available;
- verify that the current environment supports invoking it;
- provide the complete Task Contract;
- ensure the requested review is read-only;
- ensure the Reviewer receives sufficient context to perform an independent assessment.

Do not invent agent names, tools, or invocation mechanisms.

Do not create another reviewer profile or ask the Reviewer to invoke other agents.

If the Reviewer is unavailable, do not claim that delegation occurred.

In that case, report the limitation and perform the review yourself only if the available context and tools allow a meaningful assessment. Clearly distinguish a self-review from an independent delegated review.

## 6. Evaluate the review report

After receiving the Reviewer report:

- verify that the report addresses the assigned Scope;
- check that findings refer to actual files and relevant code;
- distinguish confirmed defects from assumptions and recommendations;
- identify findings outside the approved Scope;
- identify missing or unsupported conclusions;
- check whether limitations and validation results are reported accurately.

Do not silently discard findings.

If a finding requires additional investigation, inspect the relevant code without modifying it.

Do not fix findings or expand the implementation Scope.

If the report is incomplete, request clarification from the Reviewer only if the agent and invocation mechanism are available.

## 7. Final report

Return the result in Russian.

Use this structure:

### Review status

Choose one:

- **Approved** — no actionable findings.
- **Approved with minor findings** — only Low findings.
- **Changes requested** — at least one Medium, High, or Critical finding.
- **Blocked** — review could not be completed.

### Delegation

State:

- whether the Reviewer agent was available;
- whether the review was actually delegated;
- which Task Contract and Scope were provided.

Do not claim delegation if it did not occur.

### Findings

Summarize the Reviewer findings, ordered by severity.

For each finding include:

- severity;
- file and line range;
- problem;
- practical impact;
- recommended direction for correction.

Clearly distinguish confirmed defects from assumptions and recommendations.

### Validation

Report checks actually performed by the Reviewer or Orchestrator.

Do not claim that a command was executed unless its execution is confirmed.

### Limitations and risks

Mention missing information, incomplete checks, pre-existing issues, and other relevant limitations.

### Final assessment

State whether the implementation is ready for acceptance or requires further work.

## 8. Restrictions

- Do not modify files.
- Do not fix findings.
- Do not expand the approved Scope.
- Do not create commits or change Git state.
- Do not install or update dependencies.
- Do not invent requirements or acceptance criteria.
- Do not fabricate Task Contracts, plans, approvals, or review results.
- Do not claim that an agent or tool was invoked unless it actually happened.
- Do not repeat the Reviewer profile instructions unnecessarily.
- Do not replace the Reviewer with a self-review when independent delegation is available.
