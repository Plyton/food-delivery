import { fileURLToPath, URL } from 'node:url';
import { mergeConfig, defineConfig as defineVitestConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

const baseViteConfig = viteConfig({ mode: 'test', command: 'serve' });

export default mergeConfig(
  baseViteConfig,
  defineVitestConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    }
  })
);
