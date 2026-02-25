import type { MenuItem } from './types.ts';

export const legalMenu = [
  { id: '1', label: 'Политика конфиденциальности', to: '/privacy' },
  { id: '2', label: 'Пользовательское соглашение', to: '/terms' },
] as const satisfies MenuItem[];
