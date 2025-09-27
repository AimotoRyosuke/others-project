// @ts-check
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * 共通のESLint設定（ESLint v9 flat config）
 * 各アプリケーションでこの設定を拡張して使用
 */

// 基本的な無視パターン
const commonIgnores = [
  'node_modules/',
  'dist/',
  'build/',

  '.expo/',
  'coverage/',
  '.turbo/',
  '*.config.js',
  '*.config.mjs',
  '*.config.ts',

  '*.tsbuildinfo',
  // ビルド成果物のJavaScriptファイルを除外
  '**/dist/**/*.js',
  '**/build/**/*.js',

  '**/.expo/**/*.js',
  '**/coverage/**/*.js',
  // d.tsファイルも除外（TypeScript定義ファイル）
  '**/*.d.ts',
];

// 基本的なTypeScriptルール
const commonTypeScriptRules = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_' },
  ],
  'prefer-const': 'error',
  'no-var': 'error',
  'no-console': ['warn', { allow: ['warn', 'error'] }],
};

// Node.js環境用の設定
export const nodeConfig = [
  js.configs.recommended,
  {
    files: ['**/*.ts'], // TypeScriptファイルのみ
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      ...commonTypeScriptRules,
      'prettier/prettier': 'error',
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
          message: 'JavaScript files are not allowed. Please use TypeScript (.ts) instead.',
        },
      ],
    },
  },
  {
    ignores: commonIgnores,
  },
];

// React環境用の設定
export const reactConfig = [
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
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      prettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...commonTypeScriptRules,
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
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
    ignores: commonIgnores,
  },
];

// デフォルト設定（一般的なTypeScript用）
export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'], // TypeScriptファイルのみ
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      ...commonTypeScriptRules,
      'prettier/prettier': 'error',
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
          message: 'JavaScript files are not allowed. Please use TypeScript (.ts) instead.',
        },
      ],
    },
  },
  {
    ignores: commonIgnores,
  },
];