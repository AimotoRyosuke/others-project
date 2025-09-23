// @ts-check
import { nodeConfig } from '../../eslint.config.mjs';

export default [
  ...nodeConfig,
  {
    files: ['src/**/*.ts'],
    rules: {
      // バリデーションパッケージでは型安全性を重視
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      'no-console': 'warn',
    },
  },
];