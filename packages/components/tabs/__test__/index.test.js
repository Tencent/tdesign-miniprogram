import path from 'path';
import simulate from 'miniprogram-simulate';

beforeAll(() => {
  global.getCurrentPages = jest.fn(() => {
    return [
      {
        pageScroller: [jest.fn()],
      },
    ];
  });
});

describe('tabs', () => {
  const id = load(path.resolve(__dirname, `./index`), 't-tabs');

  it(`: style && customStyle`, async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $tabs = comp.querySelector('#base >>> .t-tabs');
    const $tabPanel = comp.querySelector('#first >>> .t-tab-panel');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($tabs.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      expect($tabPanel.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($tabs.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      expect($tabPanel.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $first = comp.querySelector('#first');
    const $base = comp.querySelector('#base');

    await simulate.sleep();
    expect($first.instance.data.active).toBeTruthy();

    $base.setData({ placement: 'left' });
    await simulate.sleep();
  });

  it(':change event', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const [, $item] = comp.querySelectorAll('#base >>> .t-tabs__item');

    $item.dispatchEvent('tap');
    await simulate.sleep();
    expect($base.instance.data.value === 1).toBeTruthy();

    $item.dispatchEvent('tap');
    await simulate.sleep();
    expect($base.instance.data.value === 1).toBeTruthy();
  });

  it(':touch event', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $wrapper = comp.querySelector('#base >>> .t-tabs__content');

    expect($base.instance.data.value).toBe(0);

    // to previous
    $wrapper.dispatchEvent('touchstart', {
      touches: [{ x: 1, y: 1 }],
    });
    $wrapper.dispatchEvent('touchmove', {
      touches: [{ x: 51, y: 1 }],
    });
    $wrapper.dispatchEvent('touchend');

    await simulate.sleep();
    expect($base.instance.data.value).toBe(0);

    // to next
    const move = () => {
      $wrapper.dispatchEvent('touchstart', {
        touches: [{ x: 51, y: 1 }],
      });
      $wrapper.dispatchEvent('touchmove', {
        touches: [{ x: 1, y: 1 }],
      });
      $wrapper.dispatchEvent('touchend');
    };
    move();
    await simulate.sleep();
    expect($base.instance.data.value).toBe(1);

    // disabled swipeable
    $base.setData({ swipeable: false });

    move();

    await simulate.sleep();
    expect($base.instance.data.value).toBe(1);
  });

  it(':unlinked', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');

    expect($base.instance.children.length).toBe(4);

    comp.setData({ items: [1, 2] });

    await simulate.sleep();

    expect($base.instance.children.length).toBe(3);
  });
});
