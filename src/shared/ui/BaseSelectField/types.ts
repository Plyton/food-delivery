import type { Option } from '../../types/Option.ts';

interface Props {
  options: Option[];
  optionId?: string | number;
  optionName?: string;
  multiple?: boolean;
  remotely?: boolean,
  searchFn?: (value: string) => Promise<Option[]>;
}

export type SelectFieldProps = Props;
