# Implement Task

Implement an approved task in the Food Delivery project.

Your responsibility is implementation only within the explicitly approved scope.

## 1. Read project instructions

Before making changes, inspect the relevant project instructions:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `spec.md`
- `.github/agent-protocol.md`

Read the relevant Skills in `.github/skills/` and their required references.

Do not claim to have read files or Skills unless their contents were actually inspected.

## 2. Verify approval and scope

Before implementation, identify:

- The approved task.
- The approved implementation plan, if available.
- Explicitly approved files and changes.
- Acceptance criteria.
- Constraints and out-of-scope items.

A request to implement a task does not automatically approve architectural or product changes.

If approval is missing for changes that require it under project instructions, stop and request approval.

If the approved scope is unclear, contradictory or incomplete, ask for clarification.

Do not expand the scope independently.

A separate approved implementation plan or Task Contract
is not mandatory for every task.

Follow the approval requirements defined in `AGENTS.md`
and other applicable project instructions.

For small, local changes within confirmed requirements
and existing architecture, implementation may proceed
without a separate planning approval.

Do not introduce additional approval requirements
that are not defined by project instructions.

## 3. Verify the current implementation

Inspect the relevant source files before editing.

Verify that the approved plan still matches the current code.

Check:

- Existing components and their callers.
- Models, stores and composables.
- Public APIs and import paths.
- Related pages, widgets, features and entities.
- Existing tests and test conventions.
- Relevant styles and shared UI components.

Distinguish between files actually read and files only discovered through search.

Do not blindly follow an outdated plan if the implementation has changed.

If the plan requires changes beyond the approved scope, stop and request approval.

## 4. Follow project architecture

Apply the existing project conventions:

- Respect FSD layer boundaries and dependency direction.
- Reuse existing public APIs and established patterns.
- Keep implementation in the narrowest appropriate layer.
- Avoid unnecessary abstractions and duplicate logic.
- Do not introduce reverse dependencies or circular imports.
- Do not bypass public APIs without a justified project-specific reason.

Do not introduce new architectural patterns without approval.

## 5. Implement the approved changes

Implementation rules:

- Modify only files within the approved scope.
- Create new files only when included in the approved plan or explicitly approved.
- Preserve existing behavior outside the task.
- Use Vue 3 Composition API and TypeScript conventions.
- Maintain strict typing; avoid `any` and unjustified type assertions.
- Follow existing SCSS conventions and the `df-` CSS prefix.
- Preserve accessibility and responsive behavior.
- Keep user-facing text in Russian.
- Keep code identifiers and comments in English.

Do not:

- Add unapproved features.
- Refactor unrelated code.
- Change business rules independently.
- Modify dependencies or package configuration without approval.
- Delete or rename existing files without explicit approval.
- Add backend APIs, endpoints or DTOs that are not documented.
- Introduce mock integrations that could be mistaken for real services.

## 6. Update documentation

If the approved task includes changes to product behavior:

- Update `spec.md` according to the approved requirements.
- Keep product requirements separate from technical implementation details.
- Do not document unapproved behavior.

Update technical documentation only when included in the approved scope or necessary to keep it accurate.

## 7. Testing and validation

Inspect the existing test setup before adding or changing tests.

Add tests according to the approved plan and existing project conventions.

Run only safe and relevant validation commands.

Available project commands include:

- `npm run test:unit`
- `npm run type-check`
- `npm run build`

Do not run commands that automatically modify files.

Do not run automatic formatting or lint-fix commands.

Do not claim that a test, build or validation succeeded unless it actually completed successfully.

If validation cannot be performed, explain why.

## 8. Handle unexpected issues

Stop implementation and request approval if you discover:

- Missing or contradictory product requirements.
- A need to change the approved architecture.
- A need to modify files outside the approved scope.
- A need to introduce or update dependencies.
- A breaking change to a public API or module contract.
- A risk to existing business behavior that cannot be resolved within the approved scope.

Do not silently make these decisions.

## 9. Agent delegation

Use other agents only if the required profiles and delegation tools are actually available.

Follow `.github/agent-protocol.md` for every delegated task.

Before delegating implementation, provide a complete Task Contract with:

- Task ID
- Role
- Objective
- Context
- Relevant requirements
- Constraints
- Scope and permissions
- Approval status
- Deliverables
- Acceptance criteria

Do not delegate work outside the approved scope.

Do not ask a Developer to make architectural or product decisions.

Do not claim that delegation occurred unless it actually did.

## 10. Final report

After implementation, provide:

### Status
- completed / partially completed / blocked

### Summary
Describe the implemented changes.

### Files changed
List created, modified and deleted files separately.

### Implementation details
Explain important technical decisions and behavior.

### Validation
List commands actually executed and their results.

### Acceptance criteria
Indicate which criteria were satisfied and which remain incomplete.

### Risks and limitations
Describe unresolved issues, blockers or deviations from the approved plan.

### Next steps
Identify any remaining work, if applicable.

## Restrictions

- Do not exceed the approved scope.
- Do not make unapproved product or architectural decisions.
- Do not modify unrelated files.
- Do not install, update or remove dependencies without approval.
- Do not perform Git commits, pushes or releases without explicit permission.
- Do not claim successful implementation or validation without evidence.

Respond in Russian.

Keep the implementation focused, maintainable and consistent with the existing project.
