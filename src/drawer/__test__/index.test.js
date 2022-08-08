import simulate from 'miniprogram-simulate';
import path from 'path';

describe('drawer', () => {
  const drawer = simulate.load(path.resolve(__dirname, `../drawer`), {
    less: true,
  });

  it(`drawer :`, async () => {
    const id = simulate.load({
      template: `<t-drawer
        class="base"
        visible="{{visible}}"
        placement="{{placement}}"
        items="{{sidebar}}"
      ></t-drawer>`,
      data: {
        visible: false,
        placement: 'left',
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
      methods: {},
      usingComponents: {
        't-drawer': drawer,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({
      visible: true,
    });

    await simulate.sleep(10);
    const popup = comp.querySelector('.base >>> .t-popup');
    popup.dispatchEvent('visible-change');

    await simulate.sleep(10);
    const item = comp.querySelector('.base >>> .t-drawer__sidebar-item');
    item.dispatchEvent('tap');
  });
});
