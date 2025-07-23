export function groupArrayBy<T extends Record<string, unknown>, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> {
  if (!Array.isArray(array) || array.length === 0) {
    return {};
  }

  return array.reduce((acc, item) => {
    const groupKey = String(item[key]);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}
