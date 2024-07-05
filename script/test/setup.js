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

const systemInfo = {
  SDKVersion: '2.19.1',
  batteryLevel: 100,
  benchmarkLevel: 1,
  brand: 'devtools',
  fontSizeSetting: 16,
  language: 'zh_CN',
  model: 'iPhone 7 Plus',
  pixelRatio: 3,
  platform: 'devtools',
  screenHeight: 736,
  screenWidth: 414,
  statusBarHeight: 20,
  system: 'iOS 10.0.1',
  version: '6.6.3',
  windowHeight: 672,
  windowWidth: 414,
};

global.wx = {
  ...similateApi,
  getSystemInfoSync: mockSync(systemInfo),
  getSystemInfo: mockAsyncAndPromise('getSystemInfo', systemInfo),
};
global.VIRTUAL_HOST = canUseVirtualHost();
