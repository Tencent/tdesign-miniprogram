import path from 'path';
import simulate from 'miniprogram-simulate';

describe('textarea', () => {
  const textarea = load(path.resolve(__dirname, `../textarea`), 't-textarea');

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-textarea class="textarea" style="{{style}}" customStyle="{{customStyle}}"></t-textarea>`,
        usingComponents: {
          't-textarea': textarea,
        },
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $textarea = comp.querySelector('.textarea >>> .t-textarea');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect(
          $textarea.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($textarea.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(': label', () => {
      const id = simulate.load({
        template: `<t-textarea
        class="base"
        value="{{value}}"
        label="{{label}}"
        ></t-textarea>`,
        data: {
          value: 'textarea content',
          label: '标签文字',
        },
        usingComponents: {
          't-textarea': textarea,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');

      const $label = comp.querySelector('.base >>> .t-textarea__label');
      expect($label).toBeDefined();
      expect($label.dom.textContent).toBe(component.instance.data.label);
    });

    it(': maxcharacter', async () => {
      const handleChange = jest.fn();
      const id = simulate.load({
        template: `<t-textarea
        class="base"
        maxcharacter="{{maxcharacter}}"
        value="{{value}}"
        bind:change="handleChange"
        >
        </t-textarea>`,
        data: {
          maxcharacter: 10,
          value: 'tdesign',
        },
        methods: {
          handleChange,
        },
        usingComponents: {
          't-textarea': textarea,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component.instance.data.count).toBe(7);

      const $textarea = comp.querySelector('.base >>> .t-textarea__wrapper-inner');

      $textarea.dispatchEvent('input', { detail: { value: 'tdesign123' } });
      await simulate.sleep(0);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(component.instance.data.count).toBe(10);

      $textarea.dispatchEvent('input', { detail: { value: 'textarea用于多行文本信息输入' } });
      await simulate.sleep(0);
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(component.instance.data.count).toBe(10);
      expect(handleChange.mock.calls[1][0].detail).toStrictEqual({
        value: 'textarea用',
        cursor: undefined,
      });

      $textarea.dispatchEvent('textarea', { detail: { value: 'textarea用于567' } });
      await simulate.sleep(0);
      expect(component.instance.data.count).toBe(10);
    });
  });

  describe('slots', () => {
    it(': label', () => {
      const id = simulate.load({
        template: `
        <t-textarea class="base">
          <text slot="label">标签文字</text>
        </t-textarea>`,
        usingComponents: {
          't-textarea': textarea,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component).toMatchSnapshot();

      const $label = comp.querySelector('.base >>> .t-textarea__label');
      expect($label.dom.textContent).toBe('标签文字');
      //
    });
  });

  describe('event', () => {
    it(': line-change', async () => {
      const handleLineChange = jest.fn();
      const id = simulate.load({
        template: `<t-textarea
        class="base"
        maxcharacter="{{maxcharacter}}"
        value="{{value}}"
        bind:line-change="handleLineChange"
        >
        </t-textarea>`,
        data: {
          maxcharacter: 10,
          value: 'tdesign',
        },
        methods: {
          handleLineChange,
        },
        usingComponents: {
          't-textarea': textarea,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component.instance.data.count).toBe(7);

      const $textarea = comp.querySelector('.base >>> .t-textarea__wrapper-inner');

      $textarea.dispatchEvent('linechange', {
        detail: {
          value: '指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离',
        },
      });
      await simulate.sleep(0);
      expect(handleLineChange).toHaveBeenCalledTimes(1);
      expect(handleLineChange.mock.calls[0][0].detail).toStrictEqual({
        value: '指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离',
      });
      // expect(component.instance.data.count).toBe(10);
    });

    it(': other', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      const handleEnter = jest.fn();
      const id = simulate.load({
        template: `<t-textarea
        class="base"
        value="{{value}}"
        bind:focus="handleFocus"
        bind:blur="handleBlur"
        bind:enter="handleEnter"
        >
        </t-textarea>`,
        data: {
          maxcharacter: 10,
          value: 'tdesign',
        },
        methods: {
          handleFocus,
          handleBlur,
          handleEnter,
        },
        usingComponents: {
          't-textarea': textarea,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.base');
      expect(component.instance.data.count).toBe(7);

      const $textarea = comp.querySelector('.base >>> .t-textarea__wrapper-inner');

      $textarea.dispatchEvent('focus');
      await simulate.sleep();
      expect(handleFocus).toHaveBeenCalledTimes(2);

      $textarea.dispatchEvent('confirm', {
        detail: {
          value: 'click confirm',
        },
      });
      await simulate.sleep();
      expect(handleEnter).toHaveBeenCalledTimes(1);
      expect(handleEnter.mock.calls[0][0].detail).toStrictEqual({
        value: 'click confirm',
      });
      $textarea.dispatchEvent('blur');
      await simulate.sleep();
      expect(handleBlur).toHaveBeenCalledTimes(2);
    });
  });
});
