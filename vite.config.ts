import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import vueDevTools from 'vite-plugin-vue-devtools';
import { AppMode, type EnvVariables } from './src/app/types/env.types';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv ): UserConfig => {
  // Загружаем переменные из .env
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      // Переменные можно пробросить сюда, если нужно использовать их в коде
      __APP_ENV__: JSON.stringify(env.VITE_APP_HOST) as unknown as EnvVariables,
    },
    // остальные настройки vite
    base: mode === AppMode.DEV ? '' : 'food-delivery',
    plugins: [
      vue(),
      vueDevTools(),
      eslint({
        emitWarning: false,
        emitError: false,
      }),
    ],
    server: {
      host: env.VITE_APP_HOST,
      port: 3000,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  };
});
