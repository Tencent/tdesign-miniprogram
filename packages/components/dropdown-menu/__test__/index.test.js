import path from 'path';
import simulate from 'miniprogram-simulate';

describe('dropdown-menu', () => {
  const id = load(path.resolve(__dirname, `./index`));

  it(`: style && customStyle`, async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    // expect(comp.toJSON()).toMatchSnapshot();

    const $dropdownMenu = comp.querySelector('#base >>> .t-dropdown-menu');

    if (VIRTUAL_HOST) {
      expect(
        $dropdownMenu.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect($dropdownMenu.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
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
    expect(comp.toJSON()).toMatchSnapshot();
  });

  it('@select', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $first = comp.querySelector('#first');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);

    if (!VIRTUAL_HOST) {
      const $radio = $first.querySelector('.t-dropdown-item__radio');
      const value = 'option_1';
      $radio.dispatchEvent('change', { detail: { value } });
      await simulate.sleep();

      expect($first.instance.data.value).toBe(value);
    }
  });

  it('@close', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $item = $base.querySelector('.t-dropdown-menu__item');

    $item.dispatchEvent('tap');
    await simulate.sleep(210);
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

    if (!VIRTUAL_HOST) {
      $first.querySelector('.t-dropdown-item__radio-item');
      expect($first.dom.textContent.trim()).toBe('first');
    }
  });

  it(':keepLabelActive', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    await simulate.sleep();

    const $keepActive = comp.querySelector('#keep-active');
    const $keepActiveEmpty = comp.querySelector('#keep-active-empty');
    const $second = comp.querySelector('#second');

    // 子组件：multiple + keepLabelActive + 有选中项 → keepActive 为 true
    expect($keepActive.instance.data.keepActive).toBeTruthy();
    // 子组件：multiple + keepLabelActive 但无选中项 → keepActive 为 false
    expect($keepActiveEmpty.instance.data.keepActive).toBeFalsy();
    // 子组件：multiple 但未开启 keepLabelActive → keepActive 为 false
    expect($second.instance.data.keepActive).toBeFalsy();

    const $items = comp.querySelectorAll('#base >>> .t-dropdown-menu__item');
    // 收起态下：multiple + keepLabelActive + 有选中项 → 标题保持高亮
    expect($items[2].dom.className).toContain('t-dropdown-menu__item--active');
    // multiple 未开启 keepLabelActive → 收起态不高亮
    expect($items[1].dom.className).not.toContain('t-dropdown-menu__item--active');
    // keepLabelActive 但无选中项 → 不高亮
    expect($items[3].dom.className).not.toContain('t-dropdown-menu__item--active');
  });
});
