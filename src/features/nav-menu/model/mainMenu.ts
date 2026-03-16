import type { MenuItem } from './types';

export const mainMenu = [
  { id: '1', label: 'Акции 🔥', to: '/discounts' },
  {
    id: '2',
    label: 'Горячее',
    to: '/hot',
    submenu: [
      { id: '2.1', label: 'Горячие блюда', to: '/hot/hot-dishes' },
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
] as const satisfies MenuItem[];
