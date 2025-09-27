/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.(spec|test)\\.ts$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/generated/',
    '/generated/prisma/',
    '/coverage-detailed/',
  ],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
        },
      },
    ],
  },
  collectCoverageFrom: [
    '**/*.(t|j)s',
    '!**/*.d.ts',
    '!**/index.ts',
    '!**/main.ts', // アプリケーションエントリーポイントのため除外
    '!**/*.module.ts', // NestJSモジュール設定ファイルのため除外
    '!**/generated/**', // 自動生成ファイルのため除外
    '!**/generated/prisma/**', // Prisma自動生成ファイルのため除外
    '!**/dto/**', // データ転送オブジェクト（型定義のみ）のため除外
    '!**/entities/**', // GraphQLエンティティ（型定義のみ）のため除外
    '!**/graphql/entities.ts', // GraphQL型定義ファイルのため除外
    '!**/graphql/inputs.ts', // GraphQL入力型定義ファイルのため除外
    '!**/coverage-detailed/**', // カバレッジレポート生成ファイルのため除外
    '!**/setupTests.ts', // テスト設定ファイルのため除外
    '!**/app.controller.ts', // シンプルなヘルスチェックAPIのため除外
    '!**/config/**', // 設定ファイル（GraphQL設定等）のため除外
    '!**/app.module.ts', // アプリケーションモジュール設定のため除外
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/generated/',
    '/generated/prisma/',
    '/coverage-detailed/',
  ],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 60, // 現在60.95%なので実現可能な値に設定
      functions: 55, // GraphQLデコレータの影響を考慮して現実的な値
      lines: 84, // 現在84.65%なので達成可能な値
      statements: 84, // 現在84.65%なので達成可能な値
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  displayName: '@others/api',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  // V8 coverage providerを使用してより正確なカバレッジを取得
  coverageProvider: 'v8',
};
