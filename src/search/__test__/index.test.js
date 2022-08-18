import simulate from 'miniprogram-simulate';
import path from 'path';

describe('search', () => {
  const search = simulate.load(path.resolve(__dirname, `../search`), 't-search', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  // props

  it(':action string', () => {
    const id = simulate.load({
      template: `<t-search class="search" action={{action}}></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        action: '提交',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $search = comp.querySelector('.search >>> .t-search__search-action');
    expect($search.dom.textContent.trim()).toBe('提交');
  });

  it(':action slot', () => {
    const id = simulate.load({
      template: `<t-search class="search"><text class="search-action" slot="action">取消</text></t-search>`,
      usingComponents: {
        't-search': search,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $search = comp.querySelector('.search >>> .search-action');
    expect($search.dom.textContent.trim()).toBe('取消');
  });

  it(':center', () => {
    const id = simulate.load({
      template: `<t-search class="search" center={{center}}></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        center: true,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $inputBox = comp.querySelector('.search >>> .t-search__input-box');
    expect($inputBox.dom.getAttribute('class').includes('t-search__input-box--center'));

    const $input = comp.querySelector('.search >>> .t-class-input');
    expect(
      $input
        .toJSON()
        .attrs.filter((v) => v.name === 'placeholderClass')
        .map((v) => v.value)
        .includes('t-search__placeholder--center'),
    );
  });

  it(':label', () => {
    const id = simulate.load({
      template: `<t-search class="search" label={{label}}></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        label: 'TDesign',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $search = comp.querySelector('.search >>> .t-search__label');
    expect($search.dom.textContent.trim()).toBe('TDesign');
  });

  it(':placeholder', () => {
    const id = simulate.load({
      template: `<t-search class="search" placeholder={{placeholder}}></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        placeholder: 'TDesign MiniProgram',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $input = comp.querySelector('.search >>> .t-class-input');
    expect(
      $input
        .toJSON()
        .attrs.filter((v) => v.name === 'placeholder')
        .map((v) => v.value)
        .includes('TDesign MiniProgram'),
    );
  });

  it(':left-icon & right-icon', () => {
    const id = simulate.load({
      template: `<t-search class="search" left-icon={{leftIcon}} right-icon={{rightIcon}} value={{value}}></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        leftIcon: 'add-circle',
        rightIcon: 'caret-right',
        value: 'test',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $leftIcon = comp.querySelector('.search >>> .t-icon-add-circle');
    expect($leftIcon).toBeDefined();

    const $rightIcon = comp.querySelector('.search >>> .t-icon-caret-right');
    expect($rightIcon).toBeDefined();
  });

  it(':shape', () => {
    const id = simulate.load({
      template: `<t-search class="search" shape={{shape}}></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        shape: 'square',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $inputBox = comp.querySelector('.search >>> .t-search__input-box');
    expect($inputBox.dom.getAttribute('class').includes('t-search__input-box--square')).toBeTruthy();

    comp.setData({
      shape: 'round',
    });
    expect($inputBox.dom.getAttribute('class').includes('t-search__input-box--round')).toBeTruthy();
  });

  it(':disabled', async () => {
    const handler = jest.fn();
    const id = simulate.load({
      template: `<t-search class="search" disabled={{disabled}} bind:change="handler" bind:submit="handler" bind:blur="handler" bind:focus="handler"></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        disabled: true,
      },
      methods: {
        handler,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    // const $input = comp.querySelector('.search >>> .t-class-input');
    // $input.dispatchEvent('change');
    // await simulate.sleep(20);
    // expect(handler).toHaveBeenCalledTimes(0);

    // $input.dispatchEvent('focus');
    // await simulate.sleep(20);
    // expect(handler).toHaveBeenCalledTimes(0);

    // $input.dispatchEvent('blur');
    // await simulate.sleep(20);
    // expect(handler).toHaveBeenCalledTimes(0);

    // $input.dispatchEvent('submit');
    // await simulate.sleep(20);
    // expect(handler).toHaveBeenCalledTimes(0);
  });

  it(':focus', () => {
    const handler = jest.fn();
    const id = simulate.load({
      template: `<t-search class="search" focus={{focus}} bind:focus="handler"></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        focus: true,
      },
      methods: {
        handler,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.triggerLifeTime('ready');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // Events

  it(':action-click', async () => {
    const handler = jest.fn();

    const id = simulate.load({
      template: `<t-search class="search" action={{action}} bind:action-click="handler"></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        action: '提交',
      },
      methods: {
        handler,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $action = comp.querySelector('.search >>> .t-search__search-action');
    $action.dispatchEvent('tap');
    await simulate.sleep(20);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  // it(':clear', async () => {
  //   const handler = jest.fn();

  //   const id = simulate.load({
  //     template: `<t-search class="search" value={{value}} bind:clear="handler"></t-search>`,
  //     usingComponents: {
  //       't-search': search,
  //     },
  //     data: {
  //       value: '搜索',
  //     },
  //     methods: {
  //       handler,
  //     },
  //   });
  //   const comp = simulate.render(id);
  //   comp.attach(document.createElement('parent-wrapper'));

  //   const $clear = comp.querySelector('.search >>> .t-search__right');
  //   $clear.dispatchEvent('tap');
  //   await simulate.sleep(20);
  //   expect(handler).toHaveBeenCalledTimes(1);
  //   expect(comp.data.value).toBe('');
  // });

  // it(':change', async () => {
  //   const handler = jest.fn();

  //   const id = simulate.load({
  //     template: `<t-search class="search" value={{value}} bind:change="handler"></t-search>`,
  //     usingComponents: {
  //       't-search': search,
  //     },
  //     data: {
  //       value: '搜索框',
  //     },
  //     methods: {
  //       handler,
  //     },
  //   });
  //   const comp = simulate.render(id);
  //   comp.attach(document.createElement('parent-wrapper'));

  //   const $input = comp.querySelector('.search >>> .t-class-input');
  //   $input.dispatchEvent('input', {
  //     value: '搜索',
  //   });
  //   await simulate.sleep(20);
  //   expect(handler).toHaveBeenCalledTimes(1);
  //   expect(comp.data.value).toBe('搜索');

  //   // $input.dispatchEvent('change');
  //   // $input.setData({
  //   //   value: '搜索2',
  //   // });
  //   // await simulate.sleep(20);
  //   // // expect(handler).toHaveBeenCalledTimes(2);
  //   // expect($input.data.value).toBe('搜索2');
  // });

  it(':blur', async () => {
    const handler = jest.fn();
    const id = simulate.load({
      template: `<t-search class="search" bind:blur="handler"></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        handler,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $input = comp.querySelector('.search >>> .t-class-input');
    $input.dispatchEvent('blur');
    await simulate.sleep(20);
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it(':focus', async () => {
    const handler = jest.fn();
    const id = simulate.load({
      template: `<t-search class="search" bind:focus="handler"></t-search>`,
      usingComponents: {
        't-search': search,
      },
      data: {
        handler,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $input = comp.querySelector('.search >>> .t-class-input');
    $input.dispatchEvent('focus');
    await simulate.sleep(20);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
