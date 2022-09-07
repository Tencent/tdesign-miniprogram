import simulate from 'miniprogram-simulate';
import path from 'path';

describe('search', () => {
  const search = simulate.load(path.resolve(__dirname, `../search`), 't-search', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  describe('Props', () => {
    it(`:base`, () => {
      const id = simulate.load({
        template: `<t-search class="search" action="{{action}}"></t-search>`,
        usingComponents: {
          't-search': search,
        },
        data: {
          action: '提交',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.toJSON()).toMatchSnapshot();
    });

    it(':action string', () => {
      const id = simulate.load({
        template: `<t-search class="search" action="{{action}}"></t-search>`,
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
        template: `<t-search class="search" center="{{center}}"></t-search>`,
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
          .attrs.filter((v) => v.name === 'placeholderClass')[0]
          .value.includes('t-search__placeholder--center'),
      ).toBeTruthy();
    });

    it(':label', () => {
      const id = simulate.load({
        template: `<t-search class="search" label="{{label}}"></t-search>`,
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
        template: `<t-search class="search" placeholder="{{placeholder}}"></t-search>`,
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
          .attrs.filter((v) => v.name === 'placeholder')[0]
          .value.includes('TDesign MiniProgram'),
      ).toBeTruthy();
    });

    it(':left-icon & right-icon', () => {
      const id = simulate.load({
        template: `<t-search class="search" left-icon="{{leftIcon}}" right-icon="{{rightIcon}}" value="{{value}}"></t-search>`,
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
        template: `<t-search class="search" shape="{{shape}}"></t-search>`,
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
  });

  describe('Event', () => {
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

    it(':clear', async () => {
      let val;
      const onClear = jest.fn((e) => {
        val = e.detail.value;
      });
      const id = simulate.load({
        template: `<t-search class="search" value="{{value}}" bind:clear="onClear"></t-search>`,
        usingComponents: {
          't-search': search,
        },
        data: {
          value: '搜索',
        },
        methods: {
          onClear,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $clear = comp.querySelector('.search >>> .t-search__right');
      $clear.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onClear).toHaveBeenCalledTimes(1);
      expect(val).toBe('');
    });

    it(':submit', async () => {
      let val;
      const onSubmit = jest.fn((e) => {
        val = e.detail.value;
      });
      const id = simulate.load({
        template: `<t-search class="search" value="{{value}}" bind:submit="onSubmit"></t-search>`,
        usingComponents: {
          't-search': search,
        },
        data: {
          value: '测试Search',
        },
        methods: {
          onSubmit,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $input = comp.querySelector('.search >>> .t-class-input');
      $input.dispatchEvent('confirm', { detail: { value: '测试Search' } });
      await simulate.sleep(20);
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(val).toBe('测试Search');
    });

    it(':change', async () => {
      let val;
      const onChange = jest.fn((e) => {
        val = e.detail.value;
      });

      const id = simulate.load({
        template: `<t-search class="search" value="{{value}}" bind:change="onChange"></t-search>`,
        usingComponents: {
          't-search': search,
        },
        data: {
          value: '搜索框',
        },
        methods: {
          onChange,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $input = comp.querySelector('.search >>> .t-class-input');
      $input.dispatchEvent('input', { detail: { value: '搜索' } });
      await simulate.sleep(20);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(val).toBe('搜索');

      $input.dispatchEvent('input', { detail: { value: '搜索1' } });
      await simulate.sleep(20);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(val).toBe('搜索1');
    });

    it(':blur', async () => {
      let type;
      let val;
      const onBlur = jest.fn();
      const id = simulate.load({
        template: `<t-search class="search" left-icon="{{leftIcon}}" bind:blur="onBlur"></t-search>`,
        usingComponents: {
          't-search': search,
        },
        data: {
          leftIcon: 'add-circle',
        },
        methods: {
          onBlur,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      comp.addEventListener('blur', (evt) => {
        type = evt.type;
        val = evt.detail.value;
        comp.removeEventListener('blur');
      });

      const $input = comp.querySelector('.search >>> .t-class-input');
      $input.dispatchEvent('blur', { detail: { value: 'blur text' } });
      await simulate.sleep(20);
      expect(type).toBe('blur');
      expect(val).toBe('blur text');
      expect(onBlur).toHaveBeenCalledTimes(2);
    });

    it(':focus', async () => {
      let type;
      let val;
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      const id = simulate.load({
        template: `<t-search class="search" left-icon="{{leftIcon}}" bind:focus="onFocus" bind:blur="onBlur"></t-search>`,
        usingComponents: {
          't-search': search,
        },
        data: {
          leftIcon: 'add-circle',
        },
        methods: {
          onFocus,
          onBlur,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      comp.addEventListener('focus', (evt) => {
        type = evt.type;
        val = evt.detail.value;
        comp.removeEventListener('focus');
      });

      const $input = comp.querySelector('.search >>> .t-class-input');
      $input.dispatchEvent('focus', { detail: { value: 'focus text' } });
      await simulate.sleep(20);
      expect(type).toBe('focus');
      expect(val).toBe('focus text');
      expect(onFocus).toHaveBeenCalledTimes(2);
    });
  });
});
