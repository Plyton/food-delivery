type valueOf<T> = T[keyof T];
export type AppMode = valueOf<typeof AppMode>;

export const AppMode = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
  STAGING: 'staging',
} as const;

export interface EnvVariables {
  VITE_APP_HOST: string;
}
