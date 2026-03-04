import 'vue-router';
import { BreadcrumbResolver } from '../../shared/types';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string;
    breadcrumb?: BreadcrumbResolver;
    title?: string;
  }
}
