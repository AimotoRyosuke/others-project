// @ts-check
import { reactConfig } from '../../eslint.config.mjs';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...reactConfig,
  ...compat.extends('next/core-web-vitals'),
  {
    files: ['**/*.{ts,tsx}'], // TypeScriptファイルのみ
    rules: {
      // Next.js向けルール
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
