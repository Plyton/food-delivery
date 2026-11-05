# Plan Task

Prepare an implementation plan for the requested Food Delivery project task.

Your responsibility is planning only. Do not implement changes.

## 1. Read project instructions

Inspect the relevant project instructions:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `spec.md`
- `.github/agent-protocol.md`

Follow the applicable project Skills.

Do not assume that instructions or files have been read unless they were actually inspected.

## 2. Analyze the task context

Use the available task description and previous analysis, if provided.

Verify important findings against the current project implementation.

Identify:

- Confirmed requirements.
- Expected behavior.
- Affected modules and files.
- Existing implementation patterns.
- Assumptions and unresolved questions.
- Constraints and dependencies.

Do not blindly trust previous analysis if the source files or requirements contradict it.

## 3. Define the implementation scope

Specify:

- What needs to change.
- Which existing files are likely to be modified.
- Which new files may be required.
- Which files must remain unchanged.
- What is explicitly outside the scope.

Prefer the smallest solution that satisfies the confirmed requirements.

Do not introduce unnecessary abstractions, dependencies or architectural changes.

## 4. Design the implementation

Describe the proposed solution.

Consider:

- FSD layer and slice ownership.
- Dependency direction and public APIs.
- Existing Vue Composition API patterns.
- TypeScript types and contracts.
- Pinia usage, if justified.
- Routing implications, if applicable.
- SCSS conventions and responsive behavior.
- Accessibility.
- Performance.
- Compatibility with existing functionality.

Explain important architectural decisions and their justification.

Do not treat recommendations as existing project requirements.

## 5. Define specification changes

If the task introduces or modifies product behavior:

- Identify the necessary changes to `spec.md`.
- Describe the requirements that need to be added or updated.
- Separate product requirements from technical implementation details.

Do not modify the specification during planning.

If no specification changes are necessary, explain why.

## 6. Define testing and validation

Prepare a validation strategy based on the actual project setup.

Consider:

- Unit tests.
- Component tests.
- Existing regression scenarios.
- Type checking.
- Production build.
- Accessibility checks where relevant.

Do not assume tests already exist.

Do not recommend commands that automatically modify files.

For every proposed test, describe the expected behavior.

## 7. Determine approval status

Classify the plan:

- **Ready for approval** — requirements and implementation scope are sufficiently clear.
- **Clarification required** — essential product or technical decisions are unresolved.
- **Blocked** — implementation cannot be planned reliably because of missing information or constraints.

Explicitly identify decisions requiring user approval.

Do not interpret a request to prepare a plan as permission to implement it.

## 8. Prepare agent tasks

If agent delegation is actually available and useful, identify possible tasks for:

- Architect.
- Developer.
- Tester.
- Code Reviewer.

For every proposed delegated task, follow `.github/agent-protocol.md`.

A delegated implementation task must have a complete Task Contract and approved scope.

Do not invent agent capabilities or claim that delegation occurred when it did not.

If delegation is unavailable or unnecessary, state that explicitly.

## 9. Output format

### Task summary
- Goal
- Expected result

### Requirements
- Confirmed requirements
- Assumptions
- Unresolved questions

### Implementation scope
- Files to modify
- Files to create
- Files that must remain unchanged
- Out-of-scope items

### Implementation plan
Provide ordered implementation steps.

For each step specify:
- Action
- Relevant files
- Expected result

### Architectural decisions
- Proposed structure
- Dependencies and public APIs
- Justification

### Specification changes
- Required updates to `spec.md`
- Or reason why no changes are necessary

### Testing and validation
- Test scenarios
- Validation commands
- Expected results

### Risks
- Potential regressions
- Technical limitations
- Mitigation measures

### Agent delegation
- Proposed roles and responsibilities
- Task Contract requirements
- Or reason why delegation is unnecessary

### Approval
- Status: ready for approval / clarification required / blocked
- Decisions requiring approval
- Exact scope proposed for approval

### Next step
Describe what should happen after the plan is approved.

## Restrictions

- Do not modify source files.
- Do not modify `spec.md` or other documentation.
- Do not create, delete or rename files.
- Do not install or update dependencies.
- Do not implement the requested functionality.
- Do not execute commands that modify project files.
- Do not make unapproved architectural or product decisions.
- Do not claim that tests or validation were performed unless they actually were.

Respond in Russian.

Keep the plan specific, actionable and limited to the requested task.
