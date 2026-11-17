import path from 'path';
import simulate from 'miniprogram-simulate';

describe('navbar cold-start style (issue #4732)', () => {
  const navbar = load(path.resolve(__dirname, `../navbar`), 't-navbar');

  beforeEach(() => {
    // 模拟真机胶囊信息
    global.wx = global.wx || {};
    global.wx.getMenuButtonBoundingClientRect = () => ({
      top: 48,
      left: 278,
      right: 365,
      width: 87,
      height: 32,
      bottom: 80,
    });
    global.wx.onMenuButtonBoundingClientRectWeightChange = () => {};
    global.wx.offMenuButtonBoundingClientRectWeightChange = () => {};
  });

  it(':cold-start 应在首次渲染周期内写入胶囊对齐样式变量', async () => {
    const id = simulate.load({
      template: `<t-navbar title="cold" />`,
      usingComponents: {
        't-navbar': navbar,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    await simulate.sleep(10);

    const nav = comp.querySelector('.t-navbar') || comp.querySelector('t-navbar');
    const json = JSON.stringify(comp.toJSON());
    // 冷启动首屏：padding-top（状态栏高度）与导航栏高度变量必须已写入
    expect(json).toContain('--td-navbar-padding-top');
    expect(json).toContain('--td-navbar-height');
  });
});