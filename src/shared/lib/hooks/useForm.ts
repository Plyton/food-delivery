import { type Ref, reactive, ref } from 'vue';

interface FormReturnI<T> {
  fields: T;
  isLoading: Ref<boolean>;
  submit: (submitter: (formData: T) => Promise<unknown>) => Promise<unknown>;
}

export function useForm<T extends Record<string, unknown>>(fields: T): FormReturnI<T> {
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
