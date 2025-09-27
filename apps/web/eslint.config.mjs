// @ts-check
import { reactConfig } from '../../eslint.config.mjs';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  ...reactConfig,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React Hooks ルール
      ...reactHooks.configs.recommended.rules,
      // React Refresh ルール
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Vite + React 向けルール
      'react/jsx-key': 'error',
      'react/jsx-no-target-blank': 'error',
      'react/no-unescaped-entities': 'error',
      // React 17+ では React の import は不要
      'react/react-in-jsx-scope': 'off',
      // TypeScriptを使用するのでPropTypesは不要
      'react/prop-types': 'off',
      // no-undefルールを無効化（TypeScriptが型チェックを行うため）
      'no-undef': 'off',
      // コンソール使用を警告
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
