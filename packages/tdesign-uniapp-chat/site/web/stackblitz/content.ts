import orgPkg from '../../../tdesign/package.json';

export const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script>
      var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') ||
        CSS.supports('top: constant(a)'))
      document.write(
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
        (coverSupport ? ', viewport-fit=cover' : '') + '" />')
    </script>
    <title></title>
    <!--preload-links-->
    <!--app-context-->
  </head>
  <body>
    <div id="app"><!--app-html--></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
`;

export const MAN_JS_CONTENT = `
import 'tdesign-uniapp/common/style/theme/index.css';

import {
  createSSRApp,
} from 'vue';
import App from './App.vue';



export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
`;

export const MANIFEST_JSON_CONTENT = JSON.stringify({
  name: 'TDesign UniApp',
  appid: '',
  description: '',
  versionName: '1.0.0',
  versionCode: '100',
  transformPx: false,
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0,
    },
    modules: {},
    distribute: {
      android: {
        permissions: [
          '<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>',
          '<uses-permission android:name="android.permission.VIBRATE"/>',
          '<uses-permission android:name="android.permission.READ_LOGS"/>',
          '<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>',
          '<uses-feature android:name="android.hardware.camera.autofocus"/>',
          '<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>',
          '<uses-permission android:name="android.permission.CAMERA"/>',
          '<uses-permission android:name="android.permission.GET_ACCOUNTS"/>',
          '<uses-permission android:name="android.permission.READ_PHONE_STATE"/>',
          '<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>',
          '<uses-permission android:name="android.permission.WAKE_LOCK"/>',
          '<uses-permission android:name="android.permission.FLASHLIGHT"/>',
          '<uses-feature android:name="android.hardware.camera"/>',
          '<uses-permission android:name="android.permission.WRITE_SETTINGS"/>',
        ],
      },
      ios: {},
      sdkConfigs: {},
    },
  },
  quickapp: {},
  'mp-weixin': {
    appid: '',
    setting: {
      urlCheck: false,
    },
    usingComponents: true,
  },
  'mp-alipay': {
    usingComponents: true,
  },
  'mp-baidu': {
    usingComponents: true,
  },
  'mp-toutiao': {
    usingComponents: true,
  },
  uniStatistics: {
    enable: false,
  },
  vueVersion: '3',
}, null, 2);

export const PAGES_JSON_CONTENT = JSON.stringify({
  pages: [
    {
      path: 'pages/index/index',
      style: {
        navigationBarTitleText: 'TDesign UniApp',
      },
    },
  ],
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8',
  },
}, null, 2);

export const APP_VUE_CONTENT = `
<script>
export default {
  onLaunch() {
    console.log('App Launch');
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
};
</script>

<style>
/*每个页面公共css */
</style>
`;


export const STACKBLITZ_RZ = `
  {
    "installDependencies": false,
    "startCommand": "pnpm install && pnpm run dev:h5"
  }
`;

export const VITE_CONFIG_CONTENT = `
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [
    uni(),
  ],
});
`;

export const PACKAGE_JSON_CONTENT = JSON.stringify(
  {
    name: 'tdesign-uniapp-demo',
    author: 'novlan1',
    version: orgPkg.version,
    scripts: {
      'dev:custom': 'uni -p',
      'dev:h5': 'uni',
      'dev:h5:ssr': 'uni --ssr',
      'dev:mp-alipay': 'uni -p mp-alipay',
      'dev:mp-baidu': 'uni -p mp-baidu',
      'dev:mp-jd': 'uni -p mp-jd',
      'dev:mp-kuaishou': 'uni -p mp-kuaishou',
      'dev:mp-lark': 'uni -p mp-lark',
      'dev:mp-qq': 'uni -p mp-qq',
      'dev:mp-toutiao': 'uni -p mp-toutiao',
      'dev:mp-harmony': 'uni -p mp-harmony',
      'dev:mp-weixin': 'uni -p mp-weixin',
      'dev:mp-xhs': 'uni -p mp-xhs',
      'dev:quickapp-webview': 'uni -p quickapp-webview',
      'dev:quickapp-webview-huawei': 'uni -p quickapp-webview-huawei',
      'dev:quickapp-webview-union': 'uni -p quickapp-webview-union',
      'build:custom': 'uni build -p',
      'build:h5': 'uni build',
      'build:h5:ssr': 'uni build --ssr',
      'build:mp-alipay': 'uni build -p mp-alipay',
      'build:mp-baidu': 'uni build -p mp-baidu',
      'build:mp-jd': 'uni build -p mp-jd',
      'build:mp-kuaishou': 'uni build -p mp-kuaishou',
      'build:mp-lark': 'uni build -p mp-lark',
      'build:mp-qq': 'uni build -p mp-qq',
      'build:mp-toutiao': 'uni build -p mp-toutiao',
      'build:mp-harmony': 'uni build -p mp-harmony',
      'build:mp-weixin': 'uni build -p mp-weixin',
      'build:mp-xhs': 'uni build -p mp-xhs',
      'build:quickapp-webview': 'uni build -p quickapp-webview',
      'build:quickapp-webview-huawei': 'uni build -p quickapp-webview-huawei',
      'build:quickapp-webview-union': 'uni build -p quickapp-webview-union',
    },
    dependencies: {
      '@dcloudio/uni-app': '3.0.0-4070620250821001',
      '@dcloudio/uni-app-harmony': '3.0.0-4070620250821001',
      '@dcloudio/uni-app-plus': '3.0.0-4070620250821001',
      '@dcloudio/uni-components': '3.0.0-4070620250821001',
      '@dcloudio/uni-h5': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-alipay': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-baidu': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-harmony': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-jd': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-kuaishou': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-lark': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-qq': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-toutiao': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-weixin': '3.0.0-4070620250821001',
      '@dcloudio/uni-mp-xhs': '3.0.0-4070620250821001',
      '@dcloudio/uni-quickapp-webview': '3.0.0-4070620250821001',
      'tdesign-uniapp': orgPkg.version,
      vue: '^3.4.21',
      'vue-router': '4.5.1',
    },
    devDependencies: {
      '@dcloudio/types': '^3.4.8',
      '@dcloudio/uni-automator': '3.0.0-4070620250821001',
      '@dcloudio/uni-cli-shared': '3.0.0-4070620250821001',
      '@dcloudio/uni-stacktracey': '3.0.0-4070620250821001',
      '@dcloudio/vite-plugin-uni': '3.0.0-4070620250821001',
      '@vue/runtime-core': '^3.4.21',
      vite: '5.2.8',
    },
  },
  null,
  2,
);
