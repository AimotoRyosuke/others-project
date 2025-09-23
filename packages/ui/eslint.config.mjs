// @ts-check
import { reactConfig } from '../../eslint.config.mjs';

export default [
  ...reactConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      // UI コンポーネント固有のルール
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];