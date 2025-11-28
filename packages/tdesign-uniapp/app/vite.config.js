// vite.config.js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path'; // 用于解析路径

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      'tdesign-uniapp': path.resolve(__dirname, './uni_modules/tdesign-uniapp/components'),
      'tdesign-uniapp-raw': path.resolve(__dirname, './tdesign-uniapp-raw'),
    },
  },
});
