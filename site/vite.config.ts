import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import createTDesignPlugin from './plugin-tdoc';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/miniprogram/' : './',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..'),
      '@': path.resolve(__dirname, '../src'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 19000,
    open: '/',
    https: false,
  },
  build: {
    rollupOptions: {
      external: [
        /.*\.md$/,
      ],
      input: {
        site: './index.html',
      },
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('td-')
        }
      }
    }),
    vueJsx(),
    createTDesignPlugin(),
  ],
});
