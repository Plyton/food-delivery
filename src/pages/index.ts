import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage/index.vue'),
    meta: { layout: 'main' }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/pages/Test/TestPage.vue'),
    meta: { layout: 'main' }
  },
];
