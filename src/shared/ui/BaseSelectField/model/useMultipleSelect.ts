import { type ComponentPublicInstance, nextTick, type Ref } from 'vue';
import type { MultipleSelectI } from './types.ts';
import type { Option } from '../../../types/Option.ts';
import type { FieldProps } from '@/shared/types/Field.ts';
import type { SelectFieldProps } from '@/shared/ui/BaseSelectField/types.ts';
import BaseSelectFieldMultiple from '../BaseSelectFieldMultiple.vue';

export function useMultipleSelect(
  props: Pick<FieldProps, 'disabled'> & Pick<Required<SelectFieldProps>, 'optionId' | 'optionName'>,
  emit: (event: string, ...args: unknown[]) => void,
  selectRef: Ref<ComponentPublicInstance | null>,
  modelMultiple: Ref<Option[]>
): MultipleSelectI {
  function checkMultipleSelect(option: Option): boolean {
    if (!modelMultiple.value.length) return false;
    return modelMultiple.value.some((val: Option) => val[props.optionId] === option[props.optionId]);
  }

  function handleUpdateClose(id: string | number): void {
    if (props.disabled) return;
    const ind = modelMultiple.value.findIndex((option) => option[props.optionId] === id);
    modelMultiple.value.splice(ind, 1);
  }

   function handleMultipleSelect(option: Option): void {
    const findOption = modelMultiple.value.find(
      (val) => val[props.optionId] === option[props.optionId],
    );
    if (!findOption) {
      modelMultiple.value.push(option);
    } else {
      modelMultiple.value.splice(modelMultiple.value.indexOf(findOption), 1);
    }

    void nextTick(() => {
      const selectContainerEl = selectRef.value as ComponentPublicInstance<typeof BaseSelectFieldMultiple>;
      selectContainerEl.selectMultipleWrapperRef.scrollTo({ top: 0, behavior: 'smooth' });
    });

    emit(
      'select',
      modelMultiple.value.map((val) => val[props.optionId]),
    );
  }

  return {
    checkMultipleSelect,
    handleUpdateClose,
    handleMultipleSelect,
  };
}
