import type { RouteLocationNormalizedLoaded } from 'vue-router';

export type BreadcrumbResolver =
  | string
  | ((route: RouteLocationNormalizedLoaded) => string | Promise<string>);
