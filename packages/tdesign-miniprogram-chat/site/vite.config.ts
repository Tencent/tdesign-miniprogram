import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

import rollupResolve from '@rollup/plugin-node-resolve';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import changelog2Json from './plugins/changelog-to-json';
import createTDesignPlugin from './plugins/plugin-tdoc';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicPathMap: Record<string, string> = {
  preview: '/',
  intranet: '/miniprogram-chat/',
  production: 'https://static.tdesign.tencent.com/miniprogram-chat/',
};

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  return defineConfig({
    base: publicPathMap[mode],
    root: path.resolve(__dirname),
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, '../../pro-components'),
        '@common': path.resolve(__dirname, '../../common'),
        '@components': path.resolve(__dirname, '../../components'),
        '@docs': path.resolve(__dirname, './docs'),
        '@pages': path.resolve(__dirname, './pages'),
        '@tdesign-miniprogram-chat': path.resolve(__dirname, '../../tdesign-miniprogram-chat'),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 19001,
      open: '/',
      https: false,
    },
    build: {
      rollupOptions: {
        input: {
          site: path.resolve(__dirname, 'index.html'),
        },
        plugins: [
          rollupResolve({
            moduleDirectories: [path.resolve(__dirname, 'node_modules')],
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
      changelog2Json(),
    ],
  });
};
