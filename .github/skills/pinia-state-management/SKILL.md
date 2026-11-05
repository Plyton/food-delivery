---
name: pinia-state-management
description: Design, change, or consume Pinia stores when state is shared across application features or a store contract changes. Use for store state, getters, actions, and reactive extraction, not component-local UI state.
---

# Pinia state management

Use this skill when shared state or a Pinia store contract is part of the task. Read [the cart store reference](references/cart-store-pattern.md) when repository-specific store structure, domain behavior, or local testing context matters. For module placement and cross-slice imports, use `fsd-architecture`.

## Store design

- Keep state, derived values, and operations that own that state together. Use a store only when state has a shared owner; transient presentation state usually belongs in a component or focused composable.
- In a setup store, returned refs become state, computed values become getters, and functions become actions. Return every state property Pinia needs to expose and manage; hidden state can break integrations such as devtools, plugins, and SSR.
- Derive values from canonical state rather than maintaining separately synchronized copies.
- Keep actions focused on meaningful state transitions. Preserve domain input types and handle missing or invalid entities according to the established contract.
- Consider the store's creation context. When a store may be used outside an active application context, pass the appropriate Pinia instance explicitly.

## Consuming stores reactively

- Read properties through the store object when that suits the component.
- Use Pinia's `storeToRefs` when extracting state or getters so they remain reactive.
- Actions can be destructured directly from a store; Pinia binds them to the store.
- Avoid extracting primitive store properties into ordinary local bindings when subsequent updates must remain observable.

For component reactivity details use `vue3-composition-api`; for test structure and project test configuration use `vitest-testing`.
