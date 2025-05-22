export interface Option {
  [key: string]: string | number;
}

interface Props {
  options: Option[];
  optionId: string | number;
  optionName: string;
  multiple: boolean;
}

export type SelectFieldProps = Partial<Props>;
