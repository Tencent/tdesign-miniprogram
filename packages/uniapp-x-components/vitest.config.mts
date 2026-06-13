import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: [
      'src/**/*.test.ts',
      'src/**/*.spec.ts',
      'cli/**/*.test.ts',
      'tests/**/*.test.ts',
    ],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/**/index.ts'],
      reporter: ['text', 'html'],
    },
  },
});
