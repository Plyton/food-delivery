import type { Option } from '../../../types/Option.ts';
import type { Ref, ComputedRef } from 'vue';

export interface SingleSelectState {
  inputValue: Ref<string>;
  localValue: Ref<string>;
  remotelyOptions: Ref<Option[]>;
  localOptions: ComputedRef<Option[]>;
  syncLocalFromModel: () => void;
  checkSelect: (option: Option) => boolean;
  clearValue: () => void;
}

export interface MultipleSelectI {
  checkMultipleSelect: (option: Option) => boolean;
  handleUpdateClose: (id: string | number) => void;
  handleMultipleSelect: (option: Option) => void;
}

export interface DropdownSelectI {
  isOpen: Ref<boolean>;
  open: () => void;
  toggle: () => void;
}
