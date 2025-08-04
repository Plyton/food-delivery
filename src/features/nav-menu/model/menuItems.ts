import type { MenuItem } from '@/features/nav-menu/model/types.ts';

export const menuItems: MenuItem[] = [
  { id: '1', label: 'Акции 🔥', to: '/discounts' },
  {
    id: '2',
    label: 'Горячее',
    to: '/hot',
    submenu: [
      { id: '2.1', label: 'Супы', to: '/hot/soups' },
      { id: '2.2', label: 'Мясо', to: '/hot/meat' },
    ],
  },
  {
    id: '3',
    label: 'Холодное',
    to: '/cold',
    submenu: [
      { id: '3.1', label: 'Салаты', to: '/cold/salads' },
      { id: '3.2', label: 'Закуски', to: '/cold/snacks' },
    ],
  },
  { id: '4', label: 'Свежая выпечка', to: '/bakery' },
  { id: '5', label: 'Десерты', to: '/desserts' },
  { id: '6', label: 'Напитки', to: '/drinks' },
];
