---
name: fsd-architecture
description: Analyze or change module ownership, dependency direction, slice boundaries, and public APIs in an FSD-style frontend architecture. Use for architecture decisions and reviews, not routine changes confined to an established module.
---

# FSD-style architecture

Use this skill when a task involves architectural ownership, module placement, imports across boundaries, or structural review. Read [the project architecture reference](references/project-architecture.md) when a decision depends on this repository's actual structure or conventions.

## Work procedure

1. Trace the relevant flow from its entry point through its imports and consumers. Identify the owning layer, slice, segments, and public exports.
2. Separate observed conventions from architectural recommendations. Do not treat every convention from a reference architecture as a requirement for an existing codebase.
3. Assign each responsibility to its narrowest suitable owner. Keep cohesive domain or scenario behavior together without creating abstractions solely to satisfy a template.
4. Check dependency direction, public API use, cycles, duplicated ownership, and accidental coupling at every affected call site.
5. Prefer the smallest structural change that resolves the demonstrated issue. Consider migration impact before changing public contracts or moving widely used modules.
6. For analysis-only tasks, report evidence and bounded recommendations without modifying files. For implementation tasks, validate the resulting dependency boundaries and affected consumers.

## Review signals

Investigate, rather than automatically rewrite, cases such as:

- a lower-level module depending on a composition-level module;
- cross-module imports bypassing a suitable public API;
- circular dependencies or business rules with ambiguous ownership;
- a generic shared module accumulating domain-specific behavior;
- a proposed structure that conflicts with established conventions without a concrete benefit.

When reporting a problem, cite the import or responsibility, explain its consequence, and recommend the smallest appropriate remedy.
