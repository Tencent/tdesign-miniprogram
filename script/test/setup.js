import Path from 'path';
import simulate from 'miniprogram-simulate';
import similateApi from 'miniprogram-simulate/src/api';
import { mockSync, mockAsyncAndPromise } from 'miniprogram-simulate/src/api/utils';
import { canUseVirtualHost } from '../../src/common/version';

global.getApp = () => null;
global.Page = (options) => Component(options);
global.load = (path, demoName) => {
  return simulate.load(path, demoName, {
    less: true,
    rootPath: Path.resolve(__dirname, '../../src'),
    compilerOptions: {
      maxBuffer: 1024 * 1024 * 2,
    },
  });
};

// 测试环境配置：iPhone 6/7/8 机型
const systemInfo = {
  SDKVersion: '2.19.1',
  batteryLevel: 100,
  benchmarkLevel: 1,
  brand: 'devtools',
  fontSizeSetting: 16,
  language: 'zh_CN',
  model: 'iPhone 6/7/8',
  pixelRatio: 2,
  platform: 'devtools',
  screenHeight: 667,
  screenTop: 0,
  screenWidth: 375,
  statusBarHeight: 20,
  system: 'iOS 10.0.1',
  theme: 'light',
  version: '8.0.5',
  windowHeight: 667,
  windowWidth: 375,
};

const menuButtonBoundingClientRect = {
  bottom: 56,
  height: 32,
  left: 281,
  right: 368,
  top: 24,
  width: 87,
};

global.wx = {
  ...similateApi,
  getSystemInfo: mockAsyncAndPromise('getSystemInfo', systemInfo),
  getSystemInfoSync: mockSync(systemInfo),
  getMenuButtonBoundingClientRect: mockSync(menuButtonBoundingClientRect),
};
global.VIRTUAL_HOST = canUseVirtualHost();
