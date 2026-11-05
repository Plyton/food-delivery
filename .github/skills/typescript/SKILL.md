---
name: typescript
description: Design or review TypeScript types and API contracts, including type inference, narrowing, generics, and runtime boundaries. Use when correctness depends on the shape or relationships of values, not for behavior-only changes.
---

# TypeScript contracts

Use this skill when a task changes or evaluates type relationships, public contracts, inference, or the boundary between typed code and runtime data. Read [the project TypeScript reference](references/project-typescript-patterns.md) when local types, configuration, or examples affect the decision.

## Type-design workflow

1. Identify the source of each value and the contract consumers need. Separate compile-time guarantees from conditions that must be checked at runtime.
2. Prefer the narrowest useful representation: literal unions for closed alternatives, discriminated unions when variants have different data, and optional or nullable fields only when absence is part of the contract.
3. Let TypeScript infer straightforward local values. Add explicit annotations at public boundaries or where they make a non-obvious relationship clearer.
4. Use a generic when it preserves a meaningful relationship between input and output types; otherwise prefer a direct type.
5. For untrusted or externally supplied values, validate and narrow before use. A type assertion changes the compiler's view; it does not validate runtime data.
6. Review call sites after changing a public type. Avoid widening a contract or exporting implementation details unless consumers require it.

## Common pitfalls

- Do not use assertions to conceal a mismatch that should be resolved in the type or implementation.
- Do not duplicate a domain type or introduce utility-type layers when an existing contract already expresses the needed shape.
- Do not mistake a type-only constraint for input validation or a guarantee about data received at runtime.

For framework-specific contracts, combine this skill with the relevant Vue, Pinia, or Vue Router guidance.
