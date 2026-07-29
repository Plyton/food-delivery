// for array.filter(isDefined)
export const isDefined = <T>(value: T | null | undefined): value is T => value != null;
