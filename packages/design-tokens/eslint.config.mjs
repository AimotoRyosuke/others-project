// @ts-check
import { nodeConfig } from '../../eslint.config.mjs';

export default [
  ...nodeConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      // デザイントークン固有のルール
      '@typescript-eslint/no-explicit-any': 'warn',
      // オブジェクトの定数定義で使用するため許可
      'prefer-const': 'off',
    },
  },
];