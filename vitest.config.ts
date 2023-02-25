import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    watch: false,
    include: ['src/**/*.test.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    setupFiles: 'tests/setup.ts',
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.d.{ts,tsx}',
        'src/**/index.ts',
        'src/**/*.stories.tsx',
        'src/theme/theme.ts',
        'src/globalStyle/GlobalStyle.tsx',
      ],
      all: true,
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
    deps: {
      external: ['**/node_modules/**', '**/dist/**', '**/storybook-static/**'],
    },
  },
});
