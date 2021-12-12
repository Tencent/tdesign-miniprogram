import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import rollupResolve from '@rollup/plugin-node-resolve';
import createTDesignPlugin from './plugin-tdoc';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/miniprogram/' : './',
  root: path.resolve(__dirname),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '..'),
      '@': path.resolve(__dirname, '../src'),
      '@common': path.resolve(__dirname, '../common'),
      '@components': path.resolve(__dirname, './components'),
      '@docs': path.resolve(__dirname, './docs'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 19000,
    open: '/',
    https: false,
  },
  build: {
    outDir: '../_site',
    rollupOptions: {
      input: {
        site: path.resolve(__dirname, 'index.html'),
      },
      plugins: [
        rollupResolve({
          moduleDirectories: [
            path.resolve(__dirname, 'node_modules')
          ]
        }),
      ],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('td-'),
        },
      },
    }),
    vueJsx(),
    createTDesignPlugin(),
  ],
});
