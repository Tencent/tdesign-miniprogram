import simulate from 'miniprogram-simulate';
import path from 'path';

describe('dropdown-menu', () => {
  const id = load(path.resolve(__dirname, `./index`));

  it(':base', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $first = comp.querySelector('#first');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    expect($first.instance.data.wrapperVisible).toBeFalsy();

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    expect($first.instance.data.wrapperVisible).toBeTruthy();

    $item.dispatchEvent('tap');
    $first.querySelector('.t-dropdown-item__popup-host').dispatchEvent('leaved'); // 因为 Popup 不会自动触发
    await simulate.sleep();

    expect($first.instance.data.wrapperVisible).toBeFalsy();
  });

  it('@select', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $first = comp.querySelector('#first');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    const $radio = $first.querySelector('.t-dropdown-item__radio');
    const value = 'option_1';
    $radio.dispatchEvent('change', { detail: { value } });
    await simulate.sleep();

    expect($first.instance.data.value).toBe(value);
  });

  it('@close', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $first = comp.querySelector('#first');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    const $overlay = $first.querySelector('.t-dropdown-item__popup-host >>> #popup-overlay');
    $overlay.dispatchEvent('tap');
    await simulate.sleep();

    expect($first.instance.data.show).toBeFalsy();

    // test :closeOnClickOverlay
    comp.setData({ closeOnClickOverlay: false });

    // open
    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    expect($first.instance.data.show).toBeTruthy();

    // overlay
    $overlay.dispatchEvent('tap');
    await simulate.sleep();
    expect($first.instance.data.show).toBeTruthy();
  });

  it(':keys', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const options = [{ name: 'first', val: 1 }];
    comp.setData({
      keys: {
        label: 'name',
        value: 'val',
      },
      'singleSelect.options': options,
    });

    const $base = comp.querySelector('#base');
    const $first = comp.querySelector('#first');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    $first.querySelector('.t-dropdown-item__radio-item');

    expect($first.dom.textContent.trim()).toBe('first');
  });
});
