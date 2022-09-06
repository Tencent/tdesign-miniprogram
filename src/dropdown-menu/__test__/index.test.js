import simulate from 'miniprogram-simulate';
import path from 'path';

describe('dropdown-menu', () => {
  const id = simulate.load(path.resolve(__dirname, `./index`), {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

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
    const $tree = comp.querySelector('#tree');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    const $radio = $first.querySelector('.t-dropdown-item__radio');
    const value = 'option_1';
    $radio.dispatchEvent('change', { detail: { value } });
    await simulate.sleep();

    expect($first.instance.data.value).toBe(value);

    const $items = $base.querySelectorAll('.t-dropdown-menu__item');
    $items[2].dispatchEvent('tap');
    await simulate.sleep(210);

    const $treeRadio = $tree.querySelectorAll('.t-dropdown-item__radio-item');
    const $treeRadioContent = $treeRadio[1].querySelector('.t-radio__content');
    $treeRadioContent.dispatchEvent('tap');
    await simulate.sleep();

    expect($tree.instance.data.value).toStrictEqual(['0', '0-1']);

    // reset
    const $treeReset = $tree.querySelector('.t-dropdown-item__reset-btn');
    $treeReset.dispatchEvent('tap');
    await simulate.sleep();

    expect($tree.instance.data.value).toStrictEqual(['0', '0-0']);

    // confirm
    const $treeConfirm = $tree.querySelector('.t-dropdown-item__confirm-btn');
    $treeConfirm.dispatchEvent('tap');
    await simulate.sleep();

    expect($tree.instance.data.value).toStrictEqual(['0', '0-0']);
  });

  it('@close', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $first = comp.querySelector('#first');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    $first.querySelector('.t-dropdown-item__popup-host').dispatchEvent('visible-change');

    await simulate.sleep();

    expect($first.instance.data.show).toBeFalsy();
  });
});
