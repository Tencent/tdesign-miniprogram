import * as path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import changelog2Json from './web/plugins/changelog-to-json';
import tdocPlugin from './web/plugins/plugin-tdoc';

const resolvePath = (r) => path.resolve(__dirname, r);

const publicPathMap = {
  preview: '/',
  production: 'https://static.tdesign.tencent.com/uniapp/',
};

const isCustomElement = (tag) => tag.startsWith('td-');

// Rollup 4+ 的 tree-shaking 策略调整, 这里是为了让样式在站点构建正常
const disableTreeShakingPlugin = (paths) => ({
  name: 'disable-treeshake',
  transform(code, id) {
    for (const path of paths) {
      if (id.includes(path)) {
        return { code, map: null, moduleSideEffects: 'no-treeshake' };
      }
    }
  },
});

const root: string = process.cwd();
const ENV_PREFIX = ['VITE_', 'VUE_APP'];

export default ({ mode }) => {
  const env = loadEnv(mode, root, ENV_PREFIX);
  const vueAppBase = env.VUE_APP_PUBLICPATH;
  const experimentalConfig = vueAppBase
    ? {
        experimental: {
          renderBuiltUrl(
            filename: string,
            {
              hostId,
              hostType,
              type,
            }: {
              hostId: string;
              hostType: string;
              type: string;
            },
          ) {
            console.log('[experimental] ', hostType, hostId, type, filename);

            // 确保基础路径以 / 结尾
            const basePath = vueAppBase.endsWith('/') ? vueAppBase : `${vueAppBase}/`;
            return `${basePath}${filename}`;
          },
        },
      }
    : {};

  const result = defineConfig({
    base: publicPathMap[mode],
    ...experimentalConfig,
    root: '.',
    resolve: {
      alias: {
        '@': resolvePath('../../uniapp-components'),
        '@docs': resolvePath('./docs'),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 19002,
      open: '/',
      https: false as any,
      proxy: {
        '/uniapp/live': {
          target: 'http://127.0.0.1:11111',
          changeOrigin: true,
        },
      },
    },
    build: {
      outDir: './dist',
      rollupOptions: {
        input: {
          sites: 'index.html',
        },
      },
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement,
          },
        },
      }),
      vueJsx({
        isCustomElement,
      }),
      tdocPlugin(mode),
      changelog2Json(),
      disableTreeShakingPlugin(['style/', 'toast/']),
    ],
  });

  return result;
};
