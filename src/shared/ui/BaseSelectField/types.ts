import type { Option } from '../../types/Option';

interface Props {
  options: Option[];
  optionId?: string | number;
  optionName?: string;
  multiple?: boolean;
  remotely?: boolean;
  returnValue?: string;
  searchFn?: (value: string) => Promise<Option[]>;
}

export type SelectFieldProps = Props;
