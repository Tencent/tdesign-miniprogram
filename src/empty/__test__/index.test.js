import simulate from 'miniprogram-simulate';
import path from 'path';

describe('empty', () => {
  const empty = load(path.resolve(__dirname, `../empty`));

  jest.resetModules();
  const image = load(path.resolve(__dirname, `../../image/image`), 't-image');

  describe('props', () => {
    it(`:image`, () => {
      const id = simulate.load({
        template: `<t-empty class="base" image="{{image}}" description="{{description}}" />`,
        data: {
          description: '描述文字',
          image: 'https://tdesign.gtimg.com/miniprogram/empty__demo-image.png',
        },
        methods: {},
        usingComponents: {
          't-empty': empty,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $thumb = comp.querySelector('.base >>> .t-empty__thumb');

      const imageId = simulate.load({
        template: `<t-image id="t-image" src="{{image}}" mode="aspectFit"></t-image>`,
        data: {
          image: 'https://tdesign.gtimg.com/miniprogram/empty__demo-image.png',
        },
        usingComponents: {
          't-image': image,
        },
      });
      const imageComp = simulate.render(imageId).querySelector('#t-image');
      expect($thumb.dom.innerHTML).toContain(imageComp.dom.innerHTML);
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
