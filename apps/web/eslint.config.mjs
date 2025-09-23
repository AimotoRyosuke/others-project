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
      // コンソール使用を警告
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
