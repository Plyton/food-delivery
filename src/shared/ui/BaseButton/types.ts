type Props = {
  disabled: boolean;
  type: 'default' | 'outline' | 'icon' | 'icon-fill';
};

export type ButtonProps = Partial<Props>;

export type ButtonEmits = {
  click: [evt: Event];
};
