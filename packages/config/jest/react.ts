import type { Config } from 'jest';
import baseConfig from './base';

const config: Config = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom!,
    '!src/**/*.stories.*',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default config;
