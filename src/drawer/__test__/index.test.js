import simulate from 'miniprogram-simulate';
import path from 'path';

describe('drawer', () => {
  const drawer = simulate.load(path.resolve(__dirname, `../drawer`), {
    less: true,
  });

  describe('props', () => {
    it(`: visible`, () => {
      const id = simulate.load({
        template: `<t-drawer
          class="base"
          visible="{{visible}}"
        ></t-drawer>`,
        data: {
          visible: false,
        },
        methods: {},
        usingComponents: {
          't-drawer': drawer,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      // visible = false, t-popup不存在
      const popup = comp.querySelector('.base >>> .t-popup');
      expect(popup).toBeUndefined();
    });

    it(`: placement`, () => {
      const id = simulate.load({
        template: `<t-drawer
          class="base"
          visible="{{visible}}"
          placement="{{placement}}"
        ></t-drawer>`,
        data: {
          visible: true,
          placement: 'left',
        },
        methods: {},
        usingComponents: {
          't-drawer': drawer,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const popup = comp.querySelector('.base >>> .t-popup');
      expect(popup.dom.getAttribute('class').includes('t-popup--left')).toBeTruthy();
    });

    it(`: z-index`, () => {
      const id = simulate.load({
        template: `<t-drawer
          class="base"
          visible="{{visible}}"
          zIndex="{{zIndex}}"
        ></t-drawer>`,
        data: {
          visible: true,
          zIndex: 99,
        },
        methods: {},
        usingComponents: {
          't-drawer': drawer,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const popup = comp.querySelector('.base >>> .t-popup__content');
      expect(popup.dom.getAttribute('style').includes('z-index:99')).toBeTruthy();
    });
  });

  describe('event', () => {
    it(`: mutiple`, async () => {
      const overlayClick = jest.fn();
      const itemClick = jest.fn();
      const id = simulate.load({
        template: `<t-drawer
          class="base"
          visible="{{visible}}"
          showOverlay="{{showOverlay}}"
          items="{{sidebar}}"
          bind:overlay-click="overlayClick"
          bind:item-click="itemClick"
        ></t-drawer>`,
        data: {
          visible: false,
          sidebar: [
            {
              title: '菜单一',
            },
            {
              title: '菜单二',
            },
            {
              title: '菜单三',
            },
            {
              title: '菜单四',
            },
            {
              title: '菜单五',
            },
            {
              title: '菜单六',
            },
            {
              title: '菜单七',
            },
            {
              title: '菜单八',
            },
          ],
        },
        methods: {
          overlayClick,
          itemClick,
        },
        usingComponents: {
          't-drawer': drawer,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // showOverlay为false， overlayClick 事件不执行
      await simulate.sleep(10);
      comp.setData({
        visible: true,
        showOverlay: false,
      });
      const popup = comp.querySelector('.base >>> .t-popup');
      popup.dispatchEvent('visible-change');
      await simulate.sleep(10);
      expect(overlayClick).toHaveBeenCalledTimes(0);

      // showOverlay为 true， overlayClick 事件执行
      comp.setData({
        visible: true,
        showOverlay: true,
      });

      popup.dispatchEvent('visible-change');
      await simulate.sleep(10);
      expect(overlayClick).toHaveBeenCalledTimes(1);

      const item = comp.querySelector('.base >>> .t-drawer__sidebar-item');
      item.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(itemClick).toHaveBeenCalledTimes(1);
    });
  });
});
