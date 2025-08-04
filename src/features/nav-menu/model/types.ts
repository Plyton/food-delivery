export interface MenuItem {
  id: string;
  label: string;
  to: string;
  icon?: string; // если нужна иконка
  submenu?: MenuItem[]; // если есть вложенность
}
