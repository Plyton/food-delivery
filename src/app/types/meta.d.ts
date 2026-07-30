import 'vue-router';
import type { BreadcrumbResolver } from '../../shared/types';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string;
    breadcrumb?: BreadcrumbResolver;
    title?: string;
  }
}
