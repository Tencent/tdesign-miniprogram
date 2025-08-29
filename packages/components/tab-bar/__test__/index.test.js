import path from 'path';
import simulate from 'miniprogram-simulate';

describe('tab-bar', () => {
  const id = load(path.resolve(__dirname, `./index`), 't-tab-bar');

  it(`: style && customStyle`, async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $tabBar = comp.querySelector('#base >>> .t-tab-bar');
    const $tabBarItem = comp.querySelector('#base >>> .t-tab-bar-item');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($tabBar.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      expect(
        $tabBarItem.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect($tabBar.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      expect($tabBarItem.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.querySelector('#item1').instance.data.isChecked).toBeTruthy();
  });

  it(':events', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $item2 = comp.querySelector('#item2');
    const $content = $item2.querySelector('.t-tab-bar-item__content');

    $content.dispatchEvent('tap');

    await simulate.sleep();

    expect($item2.instance.data.isChecked).toBeTruthy();
  });

  it(':sub', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $item3 = comp.querySelector('#item3');
    const $content = $item3.querySelector('.t-tab-bar-item__content');

    $content.dispatchEvent('tap');
    await simulate.sleep();

    expect($item3.instance.data.isSpread).toBeTruthy();

    const $spreadItem = $item3.querySelector('.t-tab-bar-item__spread-item');

    $spreadItem.dispatchEvent('tap');
    await simulate.sleep();

    expect(comp.instance.data.value).toBe('spread_3');
  });
});
