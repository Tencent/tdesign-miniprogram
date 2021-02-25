import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import TDesignDocPlugin from './common/vite-plugin-tdesign-doc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/miniprogram/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    TDesignDocPlugin(),
  ],
});
