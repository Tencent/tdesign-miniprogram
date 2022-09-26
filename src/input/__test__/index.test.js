import simulate from 'miniprogram-simulate';
import path from 'path';

describe('input', () => {
  const input = simulate.load(path.resolve(__dirname, `../input`), 't-input', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  describe('props', () => {
    it(': maxcharacter', async () => {
      const handleChange = jest.fn();
      const id = simulate.load({
        template: `<t-input
        class="base"
        maxcharacter="{{maxcharacter}}"
        value="{{value}}"
        bind:change="handleChange"
        >
        </t-input>`,
        data: {
          maxcharacter: 10,
          value: 'tdesign',
        },
        methods: {
          handleChange,
        },
        usingComponents: {
          't-input': input,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component.instance.data.count).toBe(7);

      const $input = comp.querySelector('.base >>> .t-input__control');

      // value 长度 = maxcharacter
      $input.dispatchEvent('input', { detail: { value: 'tdesign123' } });
      await simulate.sleep(0);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(component.instance.data.count).toBe(10);

      // value 长度 > maxcharacter
      $input.dispatchEvent('input', { detail: { value: 'input用于单行文本信息输入' } });
      await simulate.sleep(0);
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(component.instance.data.count).toBe(9);
      expect(handleChange.mock.calls[1][0].detail).toStrictEqual({
        value: 'input用于',
        cursor: undefined,
        keyCode: undefined,
      });

      // value 长度 < maxcharacter
      $input.dispatchEvent('input', { detail: { value: 'input用于567' } });
      await simulate.sleep(0);
      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(component.instance.data.count).toBe(10);
    });

    it(': borderless && align && size', async () => {
      const id = simulate.load({
        template: `<t-input
        class="base"
        align="{{align}}"
        size="{{size}}"
        borderless="{{borderless}}"
        ></t-input>`,
        data: {
          borderless: false,
          align: 'center',
          size: 'small',
        },
        usingComponents: {
          't-input': input,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.base >>> .t-input');
      expect(component.dom.getAttribute('class').includes('t-input--bordered')).toBeTruthy();
      expect(component.dom.getAttribute('class').includes('t-input--size-small')).toBeTruthy();

      const $input = comp.querySelector('.base >>> .t-input__control');
      expect($input.dom.getAttribute('class').includes('t-input__control--center')).toBeTruthy();
    });

    // clearable label suffix
    it(': clearable && label && suffix', async () => {
      const id = simulate.load({
        template: `<t-input
        class="base"
        clearable="{{clearable}}"
        value="{{value}}"
        label="{{label}}"
        suffix="{{suffix}}"
        suffixIcon="{{suffixIcon}}"
        ></t-input>`,
        data: {
          clearable: true,
          value: 'input输入框',
          label: 'tdesign',
          suffix: '后置内容',
          suffixIcon: 'app',
        },
        usingComponents: {
          't-input': input,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component).toMatchSnapshot();

      const $label = comp.querySelector('.base >>> .t-input__label');
      expect($label).toBeDefined();
      expect($label.dom.textContent).toBe(component.instance.data.label);

      const $clearable = comp.querySelector('.base >>> .t-class-clearable');
      expect($clearable).toBeDefined();

      const $suffix = comp.querySelector('.base >>> .t-input__wrap--suffix-text');
      expect($suffix.dom.textContent).toBe(component.instance.data.suffix);
    });
  });

  describe('slots', () => {
    it(': label', async () => {
      const id = simulate.load({
        template: `
        <t-input class="base" label="slot">
          <text slot="label">标签文字<text style="color: #e34d59"> *</text> </text>
        </t-input>`,
        data: {},
        usingComponents: {
          't-input': input,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component).toMatchSnapshot();

      const $label = comp.querySelector('.base >>> .t-input__label');
      expect($label.dom.textContent).toBe('标签文字*');
    });
  });

  describe('event', () => {
    it(': clear', async () => {
      const handleClear = jest.fn();
      const id = simulate.load({
        template: `<t-input
        class="base"
        value="{{value}}"
        clearable="{{clearable}}"
        bind:clear="handleClear"
        ></t-input>`,
        data: {
          value: 'tdesign',
          clearable: true,
        },
        methods: {
          handleClear,
        },
        usingComponents: {
          't-input': input,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const clearable = comp.querySelector('.base >>> .t-input__wrap--icon');
      clearable.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(handleClear.mock.calls[0][0].detail).toStrictEqual({});
    });

    it(': other', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      const handleEnter = jest.fn();
      const id = simulate.load({
        template: `<t-input
        class="base"
        value="{{value}}"
        clearable="{{clearable}}"
        bind:focus="handleFocus"
        bind:blur="handleBlur"
        bind:enter="handleEnter"
        ></t-input>`,
        data: {
          value: 'tdesign',
          clearable: true,
        },
        methods: {
          handleFocus,
          handleBlur,
          handleEnter,
        },
        usingComponents: {
          't-input': input,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $input = comp.querySelector('.base >>> .t-input__control');

      $input.dispatchEvent('focus');
      await simulate.sleep();
      expect(handleFocus).toHaveBeenCalledTimes(2);

      $input.dispatchEvent('confirm', {
        detail: {
          value: 'click confirm',
        },
      });
      await simulate.sleep();
      expect(handleEnter).toHaveBeenCalledTimes(1);
      expect(handleEnter.mock.calls[0][0].detail).toStrictEqual({
        value: 'click confirm',
      });
      $input.dispatchEvent('blur');
      await simulate.sleep();
      expect(handleBlur).toHaveBeenCalledTimes(2);
    });
  });
});
