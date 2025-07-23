export function checkObject(value: unknown): value is object {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && !(value instanceof Date);
}
