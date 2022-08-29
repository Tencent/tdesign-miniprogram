import simulate from 'miniprogram-simulate';
import path from 'path';

describe('empty', () => {
  const empty = simulate.load(path.resolve(__dirname, `../empty`), {
    less: true,
  });

  describe('props', () => {
    it(`:image`, () => {
      const id = simulate.load({
        template: `<t-empty class="base" image="{{image}}" description="{{description}}" />`,
        data: {
          description: '描述文字',
          image: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/empty__demo-image.png',
        },
        methods: {},
        usingComponents: {
          't-empty': empty,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const image = comp.querySelector('.base >>> .t-class-image');
      expect(image).not.toBeUndefined();
    });

    it(`:action`, async () => {
      const goEmptyPage = jest.fn();
      const id = simulate.load({
        template: `<t-empty class="base">
        <view slot="action" class="slotAction" bind:tap="goEmptyPage">空页面</view>
      </t-empty>`,
        methods: {
          goEmptyPage,
        },
        usingComponents: {
          't-empty': empty,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const slotAction = comp.querySelector('.base >>> .slotAction');
      expect(slotAction).not.toBeUndefined();

      slotAction.dispatchEvent('tap');
      await simulate.sleep(5);
      expect(goEmptyPage).toHaveBeenCalledTimes(1);
    });
  });
});
