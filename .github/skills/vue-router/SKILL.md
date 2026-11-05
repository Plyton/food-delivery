---
name: vue-router
description: Add or change Vue Router routes, navigation, route metadata, guards, or route-derived behavior. Use when URL transitions or route state are part of the requirement, not for page UI changes that do not affect routing.
---

# Vue Router

Use this skill when route records, navigation, metadata, or route-driven behavior changes. Read [the project router reference](references/project-router-patterns.md) when the task depends on this repository's route table, layout selection, or metadata conventions.

## Routing workflow

1. Identify the required URL, route name, navigation outcome, and visible result. Trace the route record, page, layout, metadata consumers, and links affected by the change.
2. Preserve established paths, names, history behavior, and lazy-loading boundaries unless the requirement explicitly changes them.
3. Treat params, query values, and optional metadata as external or potentially absent inputs. Validate and narrow them at the consuming boundary.
4. Add guards only for a defined behavior. Specify the allow, redirect, and failure outcomes; do not infer access-control requirements from the existence of routing.
5. Check browser history, direct navigation, route-derived UI, and relevant consumers after a route change.
6. Test the actual navigation and rendered result when tests are needed; avoid assuming a project-specific router test harness without checking its configuration.

For route metadata typing combine this skill with `typescript`; for page ownership and dependency boundaries use `fsd-architecture`.
