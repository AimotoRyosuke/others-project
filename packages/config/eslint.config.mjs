import typescriptConfig from '../../eslint.config.mjs';

export default [
  ...typescriptConfig,
  {
    files: ['**/*.json'],
    rules: {
      // JSON ファイル用のルール
    },
  },
];