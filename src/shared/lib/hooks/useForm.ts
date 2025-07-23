import { type Ref, reactive, ref } from 'vue';

export function useForm<T extends Record<string, unknown>>(fields: T): {
  fields: T,
  isLoading: Ref<boolean>,
  submit: (submitter: (formData: T) => Promise<unknown>) => Promise<unknown>,
} {
  const formFields = reactive(fields) as T;

  const isLoading = ref<boolean>(false);

  async function submit(submitter: (formData: T) => Promise<unknown>): Promise<unknown> {
    isLoading.value = true;

    try {
      return await submitter(formFields);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    fields: formFields,
    isLoading,
    submit,
  };
}
