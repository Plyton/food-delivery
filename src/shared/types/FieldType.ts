interface Props {
  placeholder: string;
  required: boolean;
  label: string;
  type: string;
  disabled: boolean;
  readonly: boolean;
  errorMessage: string;
}

export type FieldProps = Partial<Props>;

export type FieldEmits = {
  input: [value: string];
  change: [value: string];
  'update:modelValue': [value: string];
  focus: [evt: Event];
  blur: [evt: Event];
  clear: [value: string];
};
