import baseConfig from '@others/config/eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.test.*', '**/__tests__/**/*'],
    languageOptions: {
      globals: {
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
  },
];