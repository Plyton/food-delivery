import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage/index.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/pages/Test/TestPage.vue'),
    meta: { layout: 'main', breadcrumb: 'Тест' },
  },
  {
    path: '/hot/hot-dishes',
    name: 'HotDishes',
    component: () => import('@/pages/HotDishesPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Горячие блюда', title: 'Горячие блюда' },
  },
  {
    path: '/hot/meat',
    name: 'Meat',
    component: () => import('@/pages/MeatPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Мясо', title: 'Мясо' },
  },
  {
    path: '/cold/salads',
    name: 'Salads',
    component: () => import('@/pages/SaladsPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Салаты', title: 'Салаты' },
  },
  {
    path: '/cold/snacks',
    name: 'Snacks',
    component: () => import('@/pages/SnacksPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Закуски', title: 'Закуски' },
  },
  {
    path: '/bakery',
    name: 'Bakery',
    component: () => import('@/pages/BakeryPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Свежая выпечка', title: 'Свежая выпечка' },
  },
  {
    path: '/desserts',
    name: 'Desserts',
    component: () => import('@/pages/DessertsPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Десерты', title: 'Десерты' },
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: () => import('@/pages/DrinksPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Напитки', title: 'Напитки' },
  },
  {
    path: '/discounts',
    name: 'Stock',
    component: () => import('@/pages/StockPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Акции', title: 'Акции' },
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('@/pages/FeedbackPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Обратная связь', title: 'Обратная связь' },
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('@/pages/DeliveryPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Доставка', title: 'Доставка' },
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('@/pages/PaymentPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Оплата', title: 'Оплата' },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/pages/ContactsPage/index.vue'),
    meta: { layout: 'main', breadcrumb: 'Контакты', title: 'Контакты' },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/pages/PrivacyPage/index.vue'),
    meta: {
      layout: 'main',
      breadcrumb: 'Политика конфиденциальности',
      title: 'Политика конфиденциальности',
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/pages/TermsPage/index.vue'),
    meta: {
      layout: 'main',
      breadcrumb: 'Пользовательское соглашение',
      title: 'Пользовательское соглашение',
    },
  },
];
