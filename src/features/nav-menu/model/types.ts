export interface MenuItem {
  id: string;
  label: string;
  to: string;
  icon?: string;
  submenu?: MenuItem[];
}
