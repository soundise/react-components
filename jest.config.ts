import type { Config } from 'jest';
import { compilerOptions } from './tsconfig.json';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  modulePaths: [compilerOptions.baseUrl],
  moduleDirectories: ['node_modules', 'src', 'tests'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.stories.tsx',
    '!src/globalStyle/GlobalStyle.tsx',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};

export default config;
