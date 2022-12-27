import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jsdom',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.{ts,tsx}',
    '!src/**/index.ts',
    '!src/main.tsx',
    '!src/components/globalStyle/GlobalStyle.tsx',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};

export default config;
