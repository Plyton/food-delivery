/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_ENV__: import('./env.types').EnvVariables;
