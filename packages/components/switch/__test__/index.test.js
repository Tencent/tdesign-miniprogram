import path from 'path';
import simulate from 'miniprogram-simulate';

// TODO size 未实现 loading 未实现

describe('switch', () => {
  const switchComp = load(path.resolve(__dirname, `../switch`), 't-switch');

  describe('Props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-switch class="switch" style="{{style}}" customStyle="{{customStyle}}"></switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $switch = comp.querySelector('.switch >>> .t-switch');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect($switch.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect($switch.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(':base', () => {
      const id = simulate.load({
        template: `<t-switch></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      expect(comp.toJSON()).toMatchSnapshot();
    });

    it(':disabled', async () => {
      const onChange = jest.fn();
      const id = simulate.load({
        template: `<t-switch class="switch" disabled="{{disabled}}" colors="{{colors}}" bind:change="onChange"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          disabled: true,
          colors: null,
        },
        methods: {
          onChange,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $body = comp.querySelector('.switch >>> .t-switch__body');
      const $dot = comp.querySelector('.switch >>> .t-switch__dot');
      expect($body.dom.getAttribute('class').includes('t-switch__body--disabled')).toBeTruthy();

      $body.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onChange).not.toHaveBeenCalled();

      $dot.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onChange).not.toHaveBeenCalled();

      comp.setData({ disabled: false });
      await simulate.sleep(20);
      expect($body.dom.getAttribute('class').includes('t-switch__body--disabled')).toBeFalsy();
    });

    it(':label', async () => {
      const id = simulate.load({
        template: `<t-switch class="switch" label="{{label}}"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          label: ['开', '关'],
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $switch = comp.querySelector('.switch >>> .t-switch');
      const $label = comp.querySelector('.switch >>> .t-switch__label');
      expect($label.dom.textContent).toBe('关');

      $switch.dispatchEvent('tap');
      await simulate.sleep();
      const $label2 = comp.querySelector('.switch >>> .t-switch__label');
      expect($label2.dom.textContent).toBe('开');
    });

    it(':defaultValue', async () => {
      const id = simulate.load({
        template: `<t-switch class="switch" defaultValue="{{defaultValue}}"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          defaultValue: true,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $switch = comp.querySelector('.switch');
      expect($switch.instance.data.value).toBeTruthy();
    });

    it(':custom-value', async () => {
      let val;
      const onChange = jest.fn((e) => {
        val = e.detail;
      });
      const id = simulate.load({
        template: `<t-switch class="switch" customValue="{{customValue}}" defaultValue="{{defaultValue}}" bind:change="onChange"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          customValue: [false, true], // [打开时的值，关闭时的值]
          defaultValue: true,
        },
        methods: {
          onChange,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $switch = comp.querySelector('.switch');
      expect($switch.instance.data.value).toBe(true);

      const $body = comp.querySelector('.switch >>> .t-switch__body');
      $body.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(val).toStrictEqual({ value: false });
    });
  });

  describe('Event', () => {
    it(':change', async () => {
      let value;
      const onChange = jest.fn((e) => {
        value = e.detail;
      });
      const id = simulate.load({
        template: `<t-switch class="switch" bind:change="onChange" defaultValue="{{defaultValue}}"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          defaultValue: false,
        },
        methods: {
          onChange,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 触发事件
      const $switch = comp.querySelector('.switch >>> .t-switch');
      $switch.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(value).toStrictEqual({ value: true });

      $switch.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(value).toStrictEqual({ value: false });
    });
  });
});
