// if (hasKey(data, "id")) {
//   console.log(data.id);
// }
export const hasKey = <K extends string>(obj: unknown, key: K): obj is Record<K, unknown> => {
  return typeof obj === 'object' && obj !== null && key in obj;
};
