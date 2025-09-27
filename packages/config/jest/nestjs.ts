import type { Config } from 'jest';
import baseConfig from './base';

const config: Config = {
  ...baseConfig,
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: [
    '**/__tests__/**/*.(ts)',
    '**/*.(test|spec).(ts)',
    '**/*.e2e-spec.(ts)',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/index.ts',
    '!src/main.ts',
    '!src/**/*.module.ts',
  ],
};

export default config;
