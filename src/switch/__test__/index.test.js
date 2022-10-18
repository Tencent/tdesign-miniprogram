import simulate from 'miniprogram-simulate';
import path from 'path';
import { hex2Rgb } from '../../../test/utils/colors';

// TODO size 未实现 loading 未实现

describe('switch', () => {
  const switchComp = load(path.resolve(__dirname, `../switch`), 't-switch');

  describe('Props', () => {
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
          label: '',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $label = comp.querySelector('.switch >>> .t-switch__label');
      expect($label).toBeUndefined();

      comp.setData({
        label: '开关的标签',
      });
      await simulate.sleep(20);
      const $label2 = comp.querySelector('.switch >>> .t-switch__label');
      expect($label2.dom.textContent).toBe('开关的标签');
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

      const $body = comp.querySelector('.switch >>> .t-switch__body');
      expect($body.dom.style.backgroundColor).toBe(hex2Rgb('#0052d9'));
    });

    it(':colors two', async () => {
      const id = simulate.load({
        template: `<t-switch class="switch" colors="{{colors}}" value="{{value}}" disabled="{{disabled}}"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          colors: ['#1e80ff', '#8e1280'],
          value: true,
          disabled: false,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $body = comp.querySelector('.switch >>> .t-switch__body');
      await simulate.sleep(20);
      expect($body.dom.style.backgroundColor).toBe(hex2Rgb('#1e80ff'));

      comp.setData({ value: false });
      await simulate.sleep(200);
      expect($body.dom.style.backgroundColor).toBe(hex2Rgb('#8e1280'));
    });

    it(':colors one', async () => {
      const id = simulate.load({
        template: `<t-switch class="switch" colors="{{colors}}" defaultValue="{{defaultValue}}" disabled="{{disabled}}"></t-switch>`,
        usingComponents: {
          't-switch': switchComp,
        },
        data: {
          colors: ['#c0b8e9'],
          defaultValue: true,
          disabled: false,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $body = comp.querySelector('.switch >>> .t-switch__body');
      await simulate.sleep(20);
      expect($body.dom.style.backgroundColor).toBe(hex2Rgb('#c0b8e9'));

      $body.dispatchEvent('tap');
      await simulate.sleep(200);
      expect($body.dom.style.backgroundColor).toBe('rgba(0, 0, 0, 0.26)');

      comp.setData({ disabled: true });
      $body.dispatchEvent('tap');
      await simulate.sleep(200);
      expect($body.dom.style.backgroundColor).toBe('rgba(0, 0, 0, 0.26)');
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

      // body 触发事件
      const $body = comp.querySelector('.switch >>> .t-switch__body');
      expect($body.dom.style.backgroundColor).toBe('rgba(0, 0, 0, 0.26)');
      $body.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(value).toStrictEqual({ value: true });

      // dot 触发事件
      const $dot = comp.querySelector('.switch >>> .t-switch__dot');
      $dot.dispatchEvent('tap');
      await simulate.sleep(20);
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(value).toStrictEqual({ value: false });
    });
  });
});
