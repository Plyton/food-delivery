import {jwt} from '@/shared/lib';
import type { JwtHeader, JwtPayload } from '@/shared/lib/jwt/types.ts';

export function parseJwt(token: string): { header: JwtHeader; payload: JwtPayload } | null {
  try {
    const parts = token.split('.');

    if (parts.length !== 3) {
      console.error('Token structure is invalid');
    }

    const header = JSON.parse(jwt.base64UrlDecode(parts[0]));
    const payload = JSON.parse(jwt.base64UrlDecode(parts[1]));

    return { header, payload };
  } catch (error) {
    console.error(error);
    return null;
  }
}
