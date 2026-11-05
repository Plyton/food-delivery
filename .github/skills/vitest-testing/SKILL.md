---
name: vitest-testing
description: Design, add, or maintain Vitest tests for UI components, composables, and stateful modules. Use when test behavior or test maintenance is part of the task, not for unrelated production changes.
---

# Vitest testing

Use this skill when adding or changing tests. Read [the project test setup reference](references/project-test-setup.md) when selecting test locations, relying on local configuration, or interpreting which conventions are actually established.

## Test workflow

1. Turn the requirement into observable outcomes and identify the narrowest unit that can verify them.
2. Prefer public behavior over implementation details: rendered output, user interactions, emitted events, state transitions, and returned values.
3. Isolate each test from shared state and external boundaries. Mock only dependencies that are real and necessary for the behavior under test.
4. Await asynchronous interactions and framework updates before asserting their results.
5. Cover relevant boundary cases and regressions without encoding behavior that the product contract does not establish.
6. Keep setup proportional to the test. Avoid abstraction or fixtures that obscure the behavior being verified.

## Vue and stateful tests

- Mount a component when rendering, slots, or child behavior is part of the contract; use a shallower mount when child internals are irrelevant.
- Exercise composables through their returned behavior and provide only the router, store, or other context they actually require.
- Give each store test an isolated Pinia instance and assert the store's public state, getters, and actions.
- Treat DOM-level tests as evidence for observable behavior, not as replacements for manual checks that require a browser or assistive technology.

When a change spans framework behavior or accessibility requirements, use the corresponding specialist skill alongside this one.
