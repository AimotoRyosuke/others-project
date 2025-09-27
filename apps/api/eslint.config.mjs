// @ts-check
import { nodeConfig } from '../../eslint.config.mjs';

// NestJS固有の設定を追加
export default [
  ...nodeConfig,
  {
    files: ['**/*.ts'],
    rules: {
      // NestJS/デコレータ関連のルール
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      // デバッグ時は console.log を許可
      'no-console': 'off',
      // NestJSでのコンストラクタパラメータープロパティを考慮
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts', '**/setupTests.ts'],
    languageOptions: {
      globals: {
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      // テストファイルでは any の使用を許可
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];