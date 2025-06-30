import { type Ref, ref, type UnwrapRef } from 'vue';

export function useForm<T>(fields: T): {
  fields: Ref<UnwrapRef<T>>,
  isLoading: Ref<boolean>,
  submit: Function,
} {
  const formFields = ref<T>(fields);

  const isLoading = ref<boolean>(false);

  function submit(submitter: (formData: T) => Promise<any>) {
    isLoading.value = true;

    submitter(formFields.value as T).finally(() => {
      isLoading.value = false;
    });
  }

  return {
    fields: formFields,
    isLoading,
    submit,
  };
}
