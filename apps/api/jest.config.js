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
    '!**/main.ts',
    '!**/*.module.ts',
    '!**/generated/**',
    '!**/generated/prisma/**',
    '!**/dto/**',
    '!**/entities/**',
    '!**/graphql/entities.ts',
    '!**/graphql/inputs.ts',
    '!**/coverage-detailed/**',
    '!**/setupTests.ts',
    '!**/app.controller.ts',
    '!**/config/**',
    '!**/app.module.ts',
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
      branches: 50,
      functions: 50,
      lines: 80,
      statements: 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  displayName: '@others/api',
  coverageReporters: ['text', 'lcov', 'html', 'json-summary'],
  coverageProvider: 'v8',
};
