# Analyze Task

Analyze the requested task in the context of the Food Delivery project.

Your responsibility is analysis only. Do not implement changes.

## 1. Read project instructions

Before analyzing the task, inspect the relevant project instructions:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `spec.md`
- `.github/agent-protocol.md`

If any file does not exist or cannot be read, report this explicitly.

Do not assume that you have read a document unless you have actually inspected it.

## 2. Understand the task

Identify:

- The user's actual goal.
- Expected result.
- Affected application areas and functionality.
- Applicable product requirements.
- Constraints and dependencies.

Separate information into:

- Confirmed facts.
- Assumptions.
- Unknowns.

Do not invent missing requirements or business rules.

## 3. Inspect the existing implementation

Explore relevant source files before making recommendations.

Inspect where appropriate:

- Existing components and their callers.
- Related entities, features, widgets and pages.
- Models, stores and composables.
- Public APIs and import paths.
- Existing tests and test conventions.
- Relevant styles and shared UI components.

Prefer reusing existing project patterns over introducing new abstractions.

Do not assume that functionality exists just because it is common in other applications.

### File inspection evidence

Distinguish between:

- **Read:** files whose contents were actually inspected.
- **Found:** files discovered through search or directory listing but not read.
- **Unavailable:** files that could not be accessed.

Do not describe a file as inspected if only its path or name was found.

## 4. Select relevant Skills

Inspect the available Skills in `.github/skills/`.

Identify which Skills are relevant to the task.

Read the `SKILL.md` files of the selected Skills and any required references.

If a relevant Skill cannot be accessed, report this limitation.

Do not claim that a Skill was applied unless its instructions were actually read.

## 5. Evaluate architectural and product impact

Determine whether the task affects:

- Product requirements in `spec.md`.
- Application architecture or FSD boundaries.
- Public APIs or module contracts.
- State management.
- Routing.
- Accessibility.
- Performance.
- Testing strategy.
- Dependencies or project configuration.

Identify potential regressions, risks and integration concerns.

### Specification impact

If the task introduces or changes product behavior:

- Identify the relevant requirements in `spec.md`.
- Explain which requirements are missing, incomplete or need modification.
- Describe the proposed specification changes separately from implementation changes.
- Do not modify `spec.md` during analysis.
- Do not invent product rules to fill gaps.

If no specification changes appear necessary, explain why.

## 6. Determine approval requirements

Classify the task:

- **No additional approval required** — a small implementation within confirmed requirements and existing architecture.
- **Approval required** — changes to business logic, architecture, dependencies, public contracts or project configuration.
- **Clarification required** — essential requirements are missing or contradictory.

Do not start implementation.

If approval or clarification is required, explain what decision is needed and why.

## 7. Consider agent delegation

Check whether the required agent profiles and delegation tools are actually available.

Possible roles:

- Architect — architectural analysis and planning.
- Developer — implementation.
- Tester — validation.
- Code Reviewer — independent read-only review.

Do not invent available agents or tools.

If delegation is unavailable, continue analysis independently and report this limitation.

Do not delegate implementation or testing tasks during this analysis stage.

## 8. Output format

Provide the result using the following structure:

### Task understanding
- Goal
- Expected result
- Affected areas

### Project context
- Relevant requirements
- Existing implementation

### Files inspected
- Read
- Found but not read
- Unavailable

### Skills
- Skills selected
- References inspected
- Unavailable materials

### Findings
- Confirmed facts
- Assumptions
- Unknowns

### Impact and risks
- Architectural impact
- Product impact
- Potential regressions
- Dependencies

### Specification impact
- Requirements to add or modify
- Reason
- No changes needed, if applicable

### Approval
- Status: not required / required / clarification required
- Reason
- Decisions needed

### Recommended next step
Describe the most appropriate next action.

## Restrictions

- Do not modify source files or project configuration.
- Do not create, delete or rename files.
- Do not install or update dependencies.
- Do not execute commands that modify project files.
- Do not run automatic formatting or lint-fix commands.
- Do not implement the requested functionality.
- Do not make unapproved architectural or product decisions.
- Do not claim that tests, builds or reviews were performed unless they actually were.

Respond in Russian.

Keep the analysis concise, specific and grounded in the actual project.
