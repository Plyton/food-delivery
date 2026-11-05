---
name: frontend-accessibility
description: Evaluate or change web UI semantics, names, keyboard operation, focus, forms, contrast, motion, or assistive-technology output. Use when an interface change can affect how users perceive or operate it.
---

# Frontend accessibility

Use this skill when UI behavior, semantics, or visual presentation can affect access for users with disabilities. Read [the project accessibility reference](references/project-accessibility-patterns.md) when changing shared controls or when repository-specific markup and known gaps matter.

## Evaluation workflow

1. Identify the control's purpose, users, input modalities, current DOM semantics, and observable behavior—not only its appearance.
2. Prefer native elements that provide the required role and behavior. Add ARIA only when native semantics are insufficient, and ensure the announced state matches actual behavior.
3. Verify that every control has an accessible name, a logical keyboard operation, and an appropriate visible focus indicator.
4. For forms, inspect label association, instructions, required state, and error/status relationships. Do not invent validation or submission rules.
5. For custom menus, selects, and dialogs, define keyboard operation, focus entry and return, dismissal behavior, and state announcements before adding roles or ARIA attributes.
6. Check contrast and non-color state cues against the actual background. Respect reduced-motion preferences when adding or changing animation.
7. Test observable semantics and interactions automatically where appropriate, then perform manual keyboard and visual checks when the behavior requires a real browser.

Combine with `vue3-composition-api` for interaction and lifecycle work, `scss-styling` for visual changes, and `vitest-testing` for automated behavior checks.
