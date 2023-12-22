/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import path from 'path';
import simulate from 'miniprogram-simulate';

const mapper = [
  'action',
  'base',
  'color',
  'count',
  'custom',
  'custom-prefix',
  'show-text',
  'size',
  'special',
  'un-filled',
];

describe('Rate', () => {
  mapper.forEach((demoName) => {
    it(`Rate ${demoName} demo works fine`, () => {
      const id = load(path.resolve(__dirname, `../../rate/_example/${demoName}/index`), demoName);
      const container = simulate.render(id);
      container.attach(document.createElement('parent-wrapper'));
      expect(container.toJSON()).toMatchSnapshot();
    });
  });
});
