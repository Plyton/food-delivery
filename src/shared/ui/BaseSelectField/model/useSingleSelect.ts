import { computed, type ComputedRef, ref, type Ref, watch } from 'vue';
import type { FieldProps } from '../../../types/Field';
import type { Option } from '../../../types/Option';
import type { SelectFieldProps } from '../types';

interface SingleSelectState {
  inputValue: Ref<string>;
  localValue: Ref<string>;
  remotelyOptions: Ref<Option[]>;
  localOptions: ComputedRef<Option[]>;
  syncLocalFromModel: () => void;
  setReturnValue: (option: Option) => Option | string | number;
  checkSelect: (option: Option) => boolean;
  clearValue: () => void;
}

export function useSingleSelect(
  props: FieldProps & SelectFieldProps,
  modelValue: Ref<Option | string | number | undefined>,
): SingleSelectState {
  const inputValue = ref('');
  const localValue = ref('');
  const remotelyOptions = ref<Option[]>([]);

  watch(
    modelValue,
    () => {
      if (!modelValue.value) return;

      if (typeof modelValue.value === 'object') {
        localValue.value = modelValue.value[props.optionName!].toString();
        return;
      }

      const option = props.options.find((o) => o[props.optionId!] === modelValue.value);

      if (option) {
        localValue.value = option[props.optionName!].toString();
      }
    },
    { immediate: true },
  );

  const localOptions = computed<Option[]>(() => {
    return !props.remotely
      ? props.options.filter((option: Option) => {
          const optionName: keyof Option = option[props.optionName!];
          return optionName?.toString().toLowerCase().indexOf(inputValue.value.toLowerCase()) >= 0;
        })
      : remotelyOptions.value;
  });

  function syncLocalFromModel() {
    if (!modelValue.value || props.disabled) {
      localValue.value = '';
      inputValue.value = '';
      return;
    }

    let option: Option | undefined;

    if (typeof modelValue.value === 'object') {
      option = modelValue.value;
    } else {
      option = props.options.find((o) => o[props.optionId!] === modelValue.value);
    }

    localValue.value = option ? option[props.optionName!].toString() : '';
    inputValue.value = '';
  }

  function checkSelect(option: Option): boolean {
    if (!modelValue.value || typeof modelValue.value !== 'object') return false;
    return modelValue.value[props.optionId!] === option[props.optionId!];
  }

  function clearValue(): void {
    inputValue.value = '';
    localValue.value = '';
    modelValue.value = undefined;
  }

  function setReturnValue(option: Option): Option | string | number {
    if (props.returnValue === props.optionId) {
      return option[props.optionId!];
    }

    if (props.returnValue === props.optionName) {
      return option[props.optionName!];
    }

    return option;
  }

  return {
    inputValue,
    localValue,
    remotelyOptions,
    localOptions,
    syncLocalFromModel,
    checkSelect,
    clearValue,
    setReturnValue,
  };
}
