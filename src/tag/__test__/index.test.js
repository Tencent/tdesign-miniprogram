import simulate from 'miniprogram-simulate';

import path from 'path';

describe('tag && check-tag', () => {
  const Tag = simulate.load(path.resolve(__dirname, `../tag`), {
    less: true,
  });

  const CheckTag = simulate.load(path.resolve(__dirname, `../check-tag`), {
    less: true,
  });

  it(`tag :`, async () => {
    const handleClick = jest.fn();
    const handleClose = jest.fn();
    const id = simulate.load({
      template: `
        <t-tag
          class="base"
          theme="{{theme}}"
          variant="{{variant}}"
          size="{{size}}"
          shape="{{shape}}"
          closable="{{closable}}"
          disabled="{{disabled}}"
          maxWidth="{{maxWidth}}"
          bind:click="handleClick"
          bind:close="handleClose"
        >危险</t-tag>`,

      data: {
        theme: '',
        variant: '',
        size: '',
        shape: '',
        disabled: false,
        closable: false,
        maxWidth: null,
      },
      methods: {
        handleClick,
        handleClose,
      },
      usingComponents: {
        't-tag': Tag,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $tag = comp.querySelector('.base');

    // theme值预期为 `default`, variant值预期为 `dark`, size预期值为 `medium`, shape预期值为 `square`
    // 组件className应包含类名：t-tag--theme-default、t-tag--variant-dark、t-tag--size-medium、t-tag--shape-square
    expect($tag.data.className.includes('t-tag--theme-default')).toBe(true);
    expect($tag.data.className.includes('t-tag--variant-dark')).toBe(true);
    expect($tag.data.className.includes('t-tag--size-medium')).toBe(true);
    expect($tag.data.className.includes('t-tag--shape-square')).toBe(true);

    // closable && disabled 值为true时，
    // 组件className应包含类名：t-tag--closable、t-tag--disabled
    await simulate.sleep(10);
    $tag.setData({
      disabled: true,
      closable: true,
    });

    $tag.instance.setClass();
    expect($tag.data.className.includes('t-tag--disabled')).toBe(true);
    expect($tag.data.className.includes('t-tag--closable')).toBe(true);

    // maxWidth值为120时，预期 maxWidth为120px
    await simulate.sleep(10);
    $tag.setData({
      maxWidth: 120,
    });
    $tag.instance.setTagStyle();
    const component = comp.querySelector('.base >>> .t-tag');
    expect(window.getComputedStyle(component.dom).maxWidth).toBe('120px');

    await simulate.sleep(10);
    $tag.setData({
      maxWidth: `120px`,
    });
    $tag.instance.setTagStyle();
    expect(window.getComputedStyle(component.dom).maxWidth).toBe('120px');

    const $click = $tag.querySelector('.t-tag');
    const $close = comp.querySelector('.base >>> .t-tag__icon-close');
    // 禁用态：event
    await simulate.sleep(10);
    expect($tag.data.disabled).toBe(true);
    $click.dispatchEvent('tap');

    $close.dispatchEvent('tap');

    // 非禁用态：event
    await simulate.sleep(10);
    $tag.setData({
      disabled: false,
    });
    await simulate.sleep(10);
    expect($tag.data.disabled).toBe(false);
    $click.dispatchEvent('tap');

    $close.dispatchEvent('tap');
  });

  it(`check-tag :`, async () => {
    const handleChange = jest.fn();
    const handleClose = jest.fn();
    const id = simulate.load({
      template: `
        <t-check-tag
          class="base"
          size="{{size}}"
          shape="{{shape}}"
          closable="{{closable}}"
          disabled="{{disabled}}"
          checked="{{checked}}"
          defaultChecked="{{defaultChecked}}"
          bind:change="handleChange"
          bind:close="handleClose"
        >选中</t-check-tag>`,

      data: {
        size: '',
        shape: '',
        disabled: true,
        closable: true,
        checked: false,
        defaultChecked: false,
      },
      methods: {
        handleChange,
        handleClose,
      },
      usingComponents: {
        't-check-tag': CheckTag,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $CheckTag = comp.querySelector('.base');

    // size预期值为 `medium`, shape预期值为 `square`
    // 组件className应包含类名：t-tag--size-medium、t-tag--shape-square
    expect($CheckTag.data.className.includes('t-tag--size-medium')).toBe(true);
    expect($CheckTag.data.className.includes('t-tag--shape-square')).toBe(true);

    // closable&& disabled 为true时，
    // 组件className应包含类名：t-tag--disabled, t-tag--closable
    expect($CheckTag.data.className.includes('t-tag--disabled')).toBe(true);
    expect($CheckTag.data.className.includes('t-tag--closable')).toBe(true);

    await simulate.sleep(10);
    $CheckTag.setData({
      closable: false,
    });
    $CheckTag.instance.setClass();
    expect($CheckTag.data.className.includes('t-tag--closable')).toBe(false);

    // checked || defaultChecked 为true时，
    // 组件className应包含类名：t-tag--checked
    await simulate.sleep(10);
    $CheckTag.setData({
      checked: true,
      defaultChecked: false,
    });
    expect($CheckTag.data.checked).toBeTruthy();

    $CheckTag.instance.setClass();
    expect($CheckTag.data.className.includes('t-tag--checked')).toBeTruthy();

    // 禁用态时，不触发事件，checked不变
    await simulate.sleep(10);
    $CheckTag.setData({
      disabled: true,
      checked: false,
      defaultChecked: true,
      closable: true,
    });
    $CheckTag.instance.setClass();
    expect($CheckTag.data.className.includes('t-tag--checked')).toBeTruthy();

    const $click = $CheckTag.querySelector('.t-tag');
    const $close = comp.querySelector('.base >>> .t-tag__icon-close');

    $click.dispatchEvent('tap');

    await simulate.sleep(10);
    expect($CheckTag.data.checked).toBe(false);

    $close.dispatchEvent('tap');

    // 非禁用态时，触发事件， checked取反
    await simulate.sleep(10);
    $CheckTag.setData({
      disabled: false,
      checked: false,
      defaultChecked: true,
      closable: true,
    });

    $click.dispatchEvent('tap');
    await simulate.sleep(10);
    expect($CheckTag.data.checked).toBe(false);

    await simulate.sleep(10);
    $CheckTag.setData({
      disabled: false,
      checked: false,
      defaultChecked: false,
    });

    $click.dispatchEvent('tap');
    await simulate.sleep(10);
    expect($CheckTag.data.checked).toBe(true);

    $close.dispatchEvent('tap');
  });
});
