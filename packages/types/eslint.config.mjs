// @ts-check
import { nodeConfig } from '../../eslint.config.mjs';

export default [
  ...nodeConfig,
  {
    files: ['src/**/*.ts'],
    rules: {
      // 型定義パッケージでは strict なルールを適用
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      // 型定義パッケージでは console は不要
      'no-console': 'error',
    },
  },
];