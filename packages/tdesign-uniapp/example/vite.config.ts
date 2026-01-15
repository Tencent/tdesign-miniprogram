import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { genVersionMpVitePlugin } from '@plugin-light/vite-plugin-gen-version';

const diffPlugins: any[] = [];
if (process.env.UNI_PLATFORM !== 'h5') {
  diffPlugins.push(genVersionMpVitePlugin());
}

// import AutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { TDesignResolver } from 'tdesign-uniapp-auto-import-resolver';

const baseAlias = {
  'tdesign-site': path.resolve(__dirname).replace(/\\/g, '/'),
  packages: path.resolve(__dirname, '../').replace(/\\/g, '/'),
  'tdesign-uniapp': path.resolve(__dirname, './src/_tdesign').replace(/\\/g, '/'),
  'tdesign-uniapp-chat': path.resolve(__dirname, './src/_tdesign').replace(/\\/g, '/'),
};
const ENV_PREFIX = ['VITE_', 'VUE_APP'];
const root: string = process.cwd();

export default ({ mode }) => {
  const env = loadEnv(mode, root, ENV_PREFIX);
  const vueAppBase = env.VUE_APP_PUBLICPATH;

  const result = defineConfig({
    plugins: [
      uni(),
      diffPlugins,

      // auto-import 有兼容性问题，可尝试打开，并去掉 pages.json 中的 easycom 配置
      // AutoImport({
      //   resolvers: [TDesignResolver({
      //     library: 'uniapp',
      //   })],
      // }),
      // Components({
      //   resolvers: [TDesignResolver({
      //     library: 'uniapp',
      //   })],
      // }),
    ],
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
