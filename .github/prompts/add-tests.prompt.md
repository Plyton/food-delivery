# Add Tests

Create or improve tests for the Food Delivery project.

Your responsibility is test implementation and validation within the approved scope.

## 1. Read project instructions

Inspect the relevant project instructions:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `spec.md`
- `.github/agent-protocol.md`

Read relevant Skills in `.github/skills/` and their required references.

For testing tasks, prioritize:

- `vitest-testing`
- `vue3-composition-api`
- `typescript`
- `pinia-state-management`, when store behavior is involved
- `fsd-architecture`, when test placement or module boundaries are involved

Do not claim to have read files or Skills unless their contents were actually inspected.

## 2. Understand the testing task

Identify:

- Functionality that needs testing.
- Expected behavior.
- Relevant product requirements.
- Existing implementation.
- Existing tests and test conventions.
- Required test coverage.
- Constraints and out-of-scope items.

Use `spec.md` and confirmed implementation behavior as the basis for expected results.

Do not invent business rules or expected behavior.

If requirements are ambiguous, ask for clarification before writing tests that would establish new behavior.

## 3. Inspect the test infrastructure

Inspect the actual project testing setup:

- `package.json`
- Vitest configuration.
- TypeScript configuration relevant to tests.
- Existing test utilities and setup files.
- Existing test files.
- Vue Test Utils usage and project conventions.

Do not assume that a test library, helper or plugin is installed.

Reuse existing utilities and conventions.

Do not introduce additional testing dependencies without approval.

## 4. Determine test scope

Identify the appropriate test level:

- Unit tests for isolated functions, composables and models.
- Component tests for rendering, user interaction and component behavior.
- Store tests for state transitions and business logic.
- Integration tests only when justified by the existing infrastructure and task.

Prefer focused tests that verify observable behavior.

Avoid testing implementation details that do not represent a meaningful contract.

## 5. Design test scenarios

For each relevant behavior, identify:

- Initial state.
- Input or user action.
- Expected result.
- Important edge cases.
- Regression scenarios.

Consider:

- Normal behavior.
- Boundary conditions.
- Empty states.
- Invalid inputs, only where validation rules are confirmed.
- Error states, only where error handling exists or is specified.
- Interactions with related functionality.

Do not create tests for hypothetical backend behavior or integrations that do not exist.

## 6. Implement tests

Follow existing project conventions.

Rules:

- Use TypeScript with precise types.
- Use Vitest and Vue Test Utils as configured in the project.
- Keep tests isolated and deterministic.
- Avoid dependence on execution order.
- Avoid unnecessary mocking.
- Mock external dependencies only when appropriate.
- Clean up state and mocks where necessary.
- Do not modify production behavior merely to make tests pass.
- Do not weaken assertions to hide implementation defects.
- Do not change unrelated tests.

Place tests according to existing project conventions.

If no convention exists, recommend an appropriate location before introducing a new project-wide testing pattern.

## 7. Validate tests

Run only safe and relevant commands.

The project's available commands include:

- `npm run test:unit`
- `npm run type-check`
- `npm run build`

Use the appropriate command for the task.

Do not run automatic formatting or lint-fix commands.

For failures:

- Distinguish test failures from environment or infrastructure failures.
- Identify whether a failure indicates a production defect, an incorrect test or an existing issue.
- Do not silently modify unrelated code to resolve failures.

Never claim that tests passed unless they actually completed successfully.

## 8. Handle unexpected issues

Stop and request clarification or approval if:

- Expected behavior is not defined.
- Tests would introduce new product requirements.
- Testing requires changes outside the approved scope.
- Additional dependencies are needed.
- Test infrastructure requires architectural or configuration changes.
- Production code must be modified beyond the approved scope.

Do not independently expand the task.

## 9. Agent delegation

Use other agents only if the required profiles and delegation tools are actually available.

Follow `.github/agent-protocol.md` for every delegated task.

A Tester agent may inspect the implementation and report validation findings.

A Developer agent may implement tests only when the task contract explicitly permits file modifications.

A Code Reviewer may independently review completed test changes.

Do not invent agent capabilities or claim that delegation occurred when it did not.

## 10. Final report

Provide:

### Status
- completed / partially completed / blocked

### Test scope
Describe the functionality and behaviors covered.

### Files changed
List created and modified test files separately.

### Test scenarios
List important scenarios and expected behavior.

### Validation
List commands actually executed and their results.

### Coverage limitations
Identify untested behavior and explain why it was not covered.

### Findings
Report discovered production defects, test infrastructure problems or ambiguous requirements.

### Next steps
Describe remaining work, if applicable.

## Restrictions

- Do not invent product requirements.
- Do not modify production code unless explicitly included in the approved scope.
- Do not change test infrastructure or dependencies without approval.
- Do not delete or rewrite unrelated tests.
- Do not run commands that automatically modify project files.
- Do not claim successful validation without evidence.

Respond in Russian.

Keep tests focused, deterministic and consistent with the existing project.
