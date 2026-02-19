export interface JwtHeader {
  alg: string;
  typ: string;
  [key: string]: unknown;
}

export interface JwtPayload {
  sub?: string;
  name?: string;
  iat?: number;
  exp?: number;
  [key: string]: unknown;
}
