import typescriptConfig from '../../eslint.config.mjs';

export default [
  ...typescriptConfig,
  {
    files: ['src/**/*.ts'],
    rules: {
      // utils特有のルールがあればここに追加
    },
  },
];