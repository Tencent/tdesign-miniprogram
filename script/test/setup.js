import Path from 'path';
import simulate from 'miniprogram-simulate';
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

global.VIRTUAL_HOST = canUseVirtualHost();
