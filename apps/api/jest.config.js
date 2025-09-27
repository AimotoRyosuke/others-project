/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  globals: {
    'ts-jest': {
      tsconfig: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    },
  },
  rootDir: 'src',
  testRegex: '.*\\.(spec|test)\\.ts$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/generated/',
    '/generated/prisma/',
  ],
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
    '!**/main.ts',
    '!**/*.module.ts',
    '!**/generated/**',
    '!**/generated/prisma/**',
    '!**/dto/**',
    '!**/entities/**',
    '!**/graphql/entities.ts',
    '!**/graphql/inputs.ts',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/generated/',
    '/generated/prisma/',
  ],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 50, // V8 coverage providerに合わせて実用的な値に調整
      functions: 70, // デコレータの影響を考慮して調整
      lines: 85,
      statements: 85,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  displayName: '@others/api',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  // V8 coverage providerを使用してより正確なカバレッジを取得
  coverageProvider: 'v8',
};
