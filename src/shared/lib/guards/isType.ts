type TypeMap = {
  string: string;
  number: number;
  boolean: boolean;
  bigint: bigint;
  symbol: symbol;
  undefined: undefined;
};

export const isType = <K extends keyof TypeMap>(value: unknown, type: K): value is TypeMap[K] => {
  return typeof value === type;
};
