export interface Option {
  [key: string]: string | number;
}

interface Props {
  options: Option[];
  optionId: string | number;
  optionName: string;
  multiple: boolean;
  remotely: boolean,
  searchFn: (value: string) => Promise<Option[]>;
}

export type SelectFieldProps = Partial<Props>;
