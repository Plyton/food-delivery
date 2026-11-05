---
name: frontend-performance
description: Investigate or improve measurable frontend loading, rendering, memory, or bundle-size behavior. Use for performance concerns or explicit performance reviews, not speculative micro-optimization without a symptom or evidence.
---

# Frontend performance

Use this skill when a user-visible performance concern is reported or a performance review is requested. Read [the project performance reference](references/project-performance-patterns.md) before changing local loading, caching, image, or build behavior.

## Evidence-first workflow

1. Define the symptom and a measurable outcome, such as route load time, image priority, long tasks, memory retention, or output bundle size.
2. Reproduce and profile before changing code. Identify whether the bottleneck is loading, scripting, rendering, layout, image transfer, or memory.
3. Trace the affected route, components, reactive dependencies, data size, assets, and effect lifetimes. Inspect existing caching and lazy-loading behavior.
4. Form a hypothesis and make the smallest change tied to evidence. Avoid speculative memoization, redundant abstractions, or new infrastructure.
5. Compare the same measurement before and after under documented conditions. Check that behavior and accessibility remain intact.
6. Report the measurement, environment, and limitations; do not claim improvement based on code shape alone.

For Vue-specific reactive effects use `vue3-composition-api`; for route loading use `vue-router`; for behavior regression tests use `vitest-testing`.
