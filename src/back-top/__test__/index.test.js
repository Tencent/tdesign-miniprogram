import simulate from 'miniprogram-simulate';
import path from 'path';

describe('back-top', () => {
  // 加载 back-top 组件
  const backtop = load(path.resolve(__dirname, `../back-top`));

  it(`back-top: base`, async () => {
    const onToTop = jest.fn();
    const id = simulate.load({
      template: `<t-back-top class="base" theme="{{backTopTheme}}" text="{{backTopText}}" bind:to-top="onToTop"></t-back-top>`,
      data: {
        backTopTheme: 'round',
        backTopText: '顶部',
      },
      methods: {
        onToTop,
      },
      usingComponents: {
        't-back-top': backtop,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $backTop = comp.querySelector('.base >>> .t-back-top'); // 获取back-top 节点
    // 模拟触发事件;
    $backTop.dispatchEvent('tap');
    await simulate.sleep(10);
    expect(onToTop).toHaveBeenCalledTimes(1);
  });
});
