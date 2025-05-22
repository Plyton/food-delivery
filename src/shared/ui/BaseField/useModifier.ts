export type Modifiers = 'capitalize' | 'uppercase';
export type FieldModifiers = Record<Modifiers, true | undefined>;

export const useModifier = (value: string, modelModifiers: FieldModifiers): string => {
  if (modelModifiers.uppercase) {
    return value.toUpperCase();
  }
  if (modelModifiers.capitalize) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return value;
};
