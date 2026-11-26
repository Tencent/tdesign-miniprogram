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

    it(': allowInputOverMax', async () => {
      const handleChange = jest.fn();
      const id = simulate.load({
        template: `<t-textarea
        class="base"
        maxcharacter="{{maxcharacter}}"
        allowInputOverMax
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
      expect(component.instance.data.count).toBe(28);
      expect(handleChange.mock.calls[1][0].detail).toStrictEqual({
        value: 'textarea用于多行文本信息输入',
        cursor: undefined,
      });

      $textarea.dispatchEvent('input', { detail: { value: 'textarea用于567' } });
      await simulate.sleep(0);
      expect(component.instance.data.count).toBe(15);
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

  describe('event', () => {
    it(': change carries the value truncated by maxlength when setData is async (issue #4705)', async () => {
      const id = simulate.load({
        template: `<t-textarea
        class="maxlength-truncate"
        maxlength="{{maxlength}}"
        value="{{value}}"
        ></t-textarea>`,
        data: {
          maxlength: 10,
          value: '',
        },
        usingComponents: {
          't-textarea': textarea,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const { instance } = comp.querySelector('.maxlength-truncate');

      // 真机上 setData 不是同步生效的：本轮同步代码里 this.data.value 仍是旧值。
      // jsdom 的模拟实现是同步的，会让这个时序 bug 隐没，所以这里显式延迟 setData 来复现真机行为。
      const realSetData = instance.setData.bind(instance);
      instance.setData = (data, callback) => {
        setTimeout(() => realSetData(data, callback), 0);
      };

      const changes = [];
      instance.triggerEvent = (name, detail) => {
        if (name === 'change') changes.push(detail);
      };

      // 模拟"输满 10 个字符后粘贴超长文本"：event.detail 里是未截断的原始值。
      instance.onInput({ detail: { value: 'textarea用于多行文本信息输入超长粘贴内容', cursor: 0 } });
      await simulate.sleep(10);

      expect(changes.length).toBe(1);
      // 对外抛出的 value 必须是经 maxlength 截断后的结果：22 个字符入参应被截到 10 个。
      // 旧实现抛的是 this.data.value（setData 尚未生效，仍是空串），长度 0，断言失败。
      expect(changes[0].value.length).toBe(10);
      expect(changes[0].value).toBe('textarea用于');
    });
  });
});
