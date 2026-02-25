import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import eslint from 'vite-plugin-eslint2';
import vueDevTools from 'vite-plugin-vue-devtools';
import { AppMode, type EnvVariables } from './src/app/types/env.types';

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    define: {
      __APP_ENV__: JSON.stringify({
        VITE_APP_HOST: env.VITE_APP_HOST,
      } satisfies EnvVariables),
    },

    base: mode === AppMode.DEV ? '/' : '/food-delivery/',

    plugins: [
      vue(),
      vueDevTools(),
      eslint({
        emitWarning: false,
        emitError: true,
      }),
    ],
    server: {
      host: env.VITE_APP_HOST || 'localhost',
      port: 3000,
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
