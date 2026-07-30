import type { RouteLocationNormalizedLoaded } from 'vue-router';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export type BreadcrumbResolver =
  | string
  | BreadcrumbItem[]
  | ((route: RouteLocationNormalizedLoaded) => BreadcrumbValue | Promise<BreadcrumbValue>);

export type BreadcrumbValue = string | BreadcrumbItem[];
