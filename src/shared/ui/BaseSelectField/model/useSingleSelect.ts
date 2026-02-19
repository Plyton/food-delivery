import { computed, ref, type Ref, watch } from 'vue';
import type { FieldProps } from '../../../types/Field.ts';
import type { Option } from '../../../types/Option.ts';
import type { SelectFieldProps } from '../types.ts';
import type { SingleSelectState } from './types.ts';

export function useSingleSelect(
  props: FieldProps & SelectFieldProps,
  modelValue: Ref<Option | undefined>,
): SingleSelectState {
  const inputValue = ref('');
  const localValue = ref('');
  const remotelyOptions = ref<Option[]>([]);

  watch(
    modelValue,
    () => {
      if (modelValue.value && typeof modelValue.value === 'object') {
        localValue.value = modelValue.value[props.optionName!].toString();
      }
    },
    { immediate: true, once: true },
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
    localValue.value =
      typeof modelValue.value === 'object' && !props.disabled
        ? modelValue.value[props.optionName!].toString()
        : '';
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

  return {
    inputValue,
    localValue,
    remotelyOptions,
    localOptions,
    syncLocalFromModel,
    checkSelect,
    clearValue,
  };
}
