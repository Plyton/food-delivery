---
name: scss-styling
description: Write or review Sass/SCSS for component styles, responsive layouts, selectors, or shared visual tokens. Use when a change affects visual presentation, not for behavior-only work without style impact.
---

# Sass and SCSS

Use this skill when styling or responsive behavior changes. Read [the project SCSS reference](references/project-scss-conventions.md) when a task depends on existing tokens, mixins, global styles, or component patterns.

## Styling workflow

1. Locate the component styles, shared tokens or mixins, and similar implementations. Determine whether the rule is local or genuinely shared.
2. Reuse an existing variable or mixin only after checking its definition and intended use. Create a shared primitive only when the design has a real reuse need.
3. Keep selectors as specific as necessary. Avoid unnecessary nesting, broad global rules, `!important`, and specificity escalation before checking the cascade.
4. For responsive work, inspect actual breakpoints and container constraints rather than assuming a complete responsive system exists.
5. Check interactions with focus, contrast, motion, and state presentation when styling changes affect those behaviors; use `frontend-accessibility` when needed.
6. Review the rendered result at the affected viewport sizes when possible and inspect shared-style consumers before changing global rules.
