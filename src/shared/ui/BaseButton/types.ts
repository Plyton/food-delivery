type Props = {
  disabled: boolean;
  type: 'default' | 'outline' | 'icon' | 'icon-fill' | 'arrow' | 'arrow-right' | 'arrow-left';
};

export type ButtonProps = Partial<Props>;

export type ButtonEmits = {
  click: [evt: Event];
};
