export interface ChipProps {
  text: string | number;
  value: string | number;
  closable?: boolean;
  isActive?: boolean;
  disabled?: boolean;
}

export type ChipEmits = {
  'update:close': [value: string | number];
};
