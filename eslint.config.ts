import pluginVitest from '@vitest/eslint-plugin';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import { globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import pluginOxlint from 'eslint-plugin-oxlint';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,

  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    plugins: {
      import: importPlugin
    },
    rules: {
      'eslint no-restricted-imports': 0,
      semi: [2, 'always'],
      'no-trailing-spaces': 2,
      'eol-last': ["error", "always"],
      'no-multiple-empty-lines':  ["error", { "max": 1, "maxEOF": 0 }],
      'vue/max-len': ['error', {
        code: 120,
        template: 120,
      }],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",    // встроенные модули Node.js (fs, path и т.д.)
            "external",   // внешние зависимости из node_modules
            "internal",   // внутренние алиасы
            "index",      // checkObject.ts/tsx файлы
            "object",     // импорты через объект (редко)
            "type"        // типы (если используете TypeScript)
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "type",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ]
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
        }
      }
    }
  },

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  ...pluginOxlint.configs['flat/recommended'],
);
