import path from 'path';

import { defineConfig, loadEnv } from 'vite';

import uni from '@dcloudio/vite-plugin-uni';
import { genVersionMpVitePlugin, genVersionWebVitePlugin } from '@plugin-light/vite-plugin-gen-version';
import { BUILD_NAME_MAP } from 't-comm/lib/v-console/config';

const diffPlugins: any[] = [];
if (process.env.UNI_PLATFORM !== 'h5') {
  diffPlugins.push(genVersionMpVitePlugin());
} else {
  diffPlugins.push(
    genVersionWebVitePlugin({
      buildName: BUILD_NAME_MAP.build,
      commitName: BUILD_NAME_MAP.commit,
      delay: 0,
    }),
  );
}

const TDESIGN_UNIAPP_COMPONENTS = path.resolve(__dirname, './src/_tdesign').replace(/\\/g, '/');
const TDESIGN_UNIAPP_CHAT_COMPONENTS = path.resolve(__dirname, './src/_tdesign-chat').replace(/\\/g, '/');

const baseAlias = {
  'tdesign-site': path.resolve(__dirname).replace(/\\/g, '/'),
  packages: path.resolve(__dirname, '../').replace(/\\/g, '/'),
  'tdesign-uniapp': TDESIGN_UNIAPP_COMPONENTS,
  '@tdesign/uniapp': TDESIGN_UNIAPP_COMPONENTS,
  'tdesign-uniapp-chat': TDESIGN_UNIAPP_CHAT_COMPONENTS,
  '@tdesign/uniapp-chat': TDESIGN_UNIAPP_CHAT_COMPONENTS,
};
const ENV_PREFIX = ['VITE_', 'VUE_APP'];
const root: string = process.cwd();

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, root, ENV_PREFIX);
  const vueAppBase = env.VUE_APP_PUBLICPATH;

  const result = defineConfig({
    plugins: [uni(), ...diffPlugins],
    resolve: {
      alias: {
        ...baseAlias,
      },
    },
    base: vueAppBase || '/uniapp/live',
    server: {
      host: '127.0.0.1',
      port: 11111,
      hmr: true,
      watch: {
        usePolling: true,
      },
    },
  });

  return result;
};
