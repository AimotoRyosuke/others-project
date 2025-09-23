// @ts-check
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

// React Native/Expo固有の設定
export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'], // TypeScriptファイルのみ
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        project: './tsconfig.json',
      },
      globals: {
        // React Native用のグローバル変数
        __DEV__: 'readonly',
        FormData: 'readonly',
        fetch: 'readonly',
        navigator: 'readonly',
        XMLHttpRequest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // TypeScript関連
      '@typescript-eslint/no-unused-vars': [
        'error',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        },
      ],
      
      // モバイル開発では console.log は一般的
      'no-console': 'off',
      
      // React Native では any の使用が必要な場合がある
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // JavaScript ファイルの使用を明示的に禁止
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Program',
          message: 'JavaScript files are not allowed. Please use TypeScript (.ts/.tsx) instead.',
        },
      ],
    },
  },
  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'], // テストファイルもTypeScriptのみ
    rules: {
      // テストファイルでは制限を緩める
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: [
      'node_modules/',
      '.expo/',
      'web-build/',
      'dist/',
      '*.config.{js,mjs,ts}',
    ],
  },
];