---
name: vue3-composition-api
description: Implement or review Vue 3 Composition API components and composables, including props, reactivity, and lifecycle-bound effects. Use for Vue behavior, not store architecture by itself or test-only work.
---

# Vue 3 Composition API

Use this skill when component or composable behavior, reactive state, or lifecycle effects are part of the task. Read [the project Vue reference](references/project-vue-patterns.md) when local examples or observed conventions are needed.

## Design and implementation

- Choose `ref` for replaceable values and `reactive` for cohesive object-shaped state where that makes updates clearer. Use `computed` for pure derived values.
- Prefer `watch` when the dependency and side effect are explicit. Use `watchEffect` when automatic dependency collection makes the effect clearer, not as a substitute for a derivable computed value.
- Keep state at the narrowest owner that needs it. Put reusable non-UI behavior in a composable when it has a clear responsibility or more than one meaningful consumer.
- Define component inputs and outputs from the actual contract. Keep prop defaults, emitted events, and slots consistent with how the component is used.
- Use lifecycle hooks only for work that requires a lifecycle boundary, such as DOM access. Clean up manually created effects, listeners, and subscriptions when their lifetime is not automatically bound to the component.
- Treat template refs and DOM-dependent work as nullable until the relevant lifecycle point.

## Reactivity pitfalls

- Destructuring a property from a reactive object disconnects the local binding from the property's reactive source. Keep access through the object or use the appropriate ref conversion helper.
- Vue 3.5's compiler-reactive destructuring applies to `defineProps` in `<script setup>`; it does not make arbitrary object or store destructuring reactive.
- Avoid watchers for values that can be expressed as `computed`, and avoid deep watching when a narrower source expresses the required change.

Review the observable component behavior and effect lifetime after implementation; use the relevant store, routing, styling, accessibility, or testing skill when those concerns are part of the change.
