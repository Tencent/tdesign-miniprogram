import simulate from 'miniprogram-simulate';
import path from 'path';

describe('stepper', () => {
  const stepper = load(path.resolve(__dirname, `../stepper`), 't-stepper');

  describe('props', () => {
    it(': disabled', () => {
      const id = simulate.load({
        template: `<t-stepper
        class="base"
        value="1"
        disabled="{{disabled}}"
        ></t-stepper>`,
        data: {
          disabled: true,
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.base >>> .t-stepper__minus');
      expect(component.dom.getAttribute('class').includes('t-stepper--disabled')).toBeTruthy();

      comp.setData({
        disabled: false,
      });
      expect(component.dom.getAttribute('class').includes('t-stepper--disabled')).not.toBeTruthy();
    });

    it(': input-width', async () => {
      const id = simulate.load({
        template: `<t-stepper
        class="base"
        inputWidth="{{inputWidth}}"
        ></t-stepper>`,
        data: {
          inputWidth: 80,
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $input = comp.querySelector('.base >>> .t-stepper__input');
      // TODO: 获取的dom节点的样式似乎不能识别 `rpx`, 会将单位转变为 `px`, 小程序实际渲染没问题
      expect($input.dom.getAttribute('style').includes('width:80px')).toBeTruthy();
    });

    it(': theme', async () => {
      const id = simulate.load({
        template: `<t-stepper
        class="base"
        theme="{{theme}}"
        ></t-stepper>`,
        data: {
          theme: 'normal',
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.base >>> .t-stepper__minus');
      expect(component.dom.getAttribute('class').includes(`t-stepper__minus--normal`)).toBeTruthy();

      comp.setData({
        theme: 'grey',
      });
      expect(component.dom.getAttribute('class').includes('t-stepper__minus--grey')).toBeTruthy();
    });

    it(': step && max && min', async () => {
      let inputValue;
      const handleChange = jest.fn((e) => {
        inputValue = e.detail;
      });
      const id = simulate.load({
        template: `<t-stepper
        class="base"
        max="{{max}}"
        min="{{min}}"
        step="{{step}}"
        value="{{value}}"
        bind:change="handleChange"
        ></t-stepper>`,
        data: {
          max: 10,
          min: 0,
          step: 10,
          value: 5,
          disabled: false,
        },
        methods: {
          handleChange,
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const minusIcon = comp.querySelector('.base >>> .t-stepper__minus');
      const plusIcon = comp.querySelector('.base >>> .t-stepper__plus');

      minusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleChange).toHaveBeenCalledTimes(1);
      // change 预期返回值为 { value: 0 }
      expect(inputValue).toEqual({ value: 0 });

      plusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleChange).toHaveBeenCalledTimes(2);
      // change 预期返回值为 { value: 10 }
      expect(inputValue).toEqual({ value: 10 });
    });
  });

  describe('event', () => {
    it(': chang', async () => {
      let inputValue;
      const handleChange = jest.fn((e) => {
        inputValue = e.detail;
      });

      const id = simulate.load({
        template: `<t-stepper
        class="base"
        value="{{value}}"
        disabled="{{disabled}}"
        bind:change="handleChange"
        ></t-stepper>`,
        data: {
          value: 1,
          disabled: true,
        },
        methods: {
          handleChange,
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // (disabled = true), 事件不触发;
      const component = comp.querySelector('.base >>> .t-stepper__minus');
      expect(component.dom.getAttribute('class').includes('t-stepper--disabled')).toBeTruthy();

      const minusIcon = comp.querySelector('.base >>> .t-stepper__minus');
      const plusIcon = comp.querySelector('.base >>> .t-stepper__plus');
      minusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleChange).toHaveBeenCalledTimes(0);
      plusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleChange).toHaveBeenCalledTimes(0);

      // disabled = false, 事件正常触发
      comp.setData({
        value: 10,
        disabled: false,
      });
      expect(component.dom.getAttribute('class').includes('t-stepper--disabled')).not.toBeTruthy();

      minusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleChange).toHaveBeenCalledTimes(1);

      // change 预期返回值为 { value: 9 }
      expect(inputValue).toEqual({ value: 9 });

      plusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleChange).toHaveBeenCalledTimes(2);
    });

    it(': overlimit', async () => {
      let typeValue;
      const handleOverlimit = jest.fn((e) => {
        typeValue = e.detail;
      });
      const id = simulate.load({
        template: `<t-stepper
        class="base"
        max="{{max}}"
        min="{{min}}"
        step="{{step}}"
        value="{{value}}"
        disabled="{{disabled}}"
        bind:overlimit="handleOverlimit"
        ></t-stepper>`,
        data: {
          max: 10,
          min: 0,
          step: 10,
          value: 0,
          disabled: false,
        },
        methods: {
          handleOverlimit,
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.base >>> .t-stepper');
      expect(component.dom.getAttribute('class').includes('t-is-disabled')).not.toBeTruthy();

      const minusIcon = comp.querySelector('.base >>> .t-stepper__minus');
      const plusIcon = comp.querySelector('.base >>> .t-stepper__plus');

      minusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleOverlimit).toHaveBeenCalledTimes(1);
      expect(typeValue).toEqual({ type: 'minus' });

      comp.setData({
        value: 10,
      });
      plusIcon.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(handleOverlimit).toHaveBeenCalledTimes(2);
      expect(typeValue).toEqual({ type: 'plus' });
    });

    // TODO: `input` 失焦&&聚焦
    it(': input', async () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();
      const handleChange = jest.fn();
      const id = simulate.load({
        template: `<t-stepper
        class="base"
        value="{{value}}"
        step="{{step}}"
        bind:focus="handleFocus"
        bind:blur="handleBlur"
        bind:change="handleChange"
        ></t-stepper>`,
        data: {
          value: 4,
          step: 2,
        },
        methods: {
          handleFocus,
          handleBlur,
          handleChange,
        },
        usingComponents: {
          't-stepper': stepper,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const $stepper = comp.querySelector('.base >>> .t-stepper');
      expect($stepper.toJSON()).toMatchSnapshot();

      const $input = comp.querySelector('.base >>> .t-stepper__input');
      $input.dispatchEvent('input', { detail: { value: 88 } });
      await simulate.sleep(0);
      expect($stepper.toJSON()).toMatchSnapshot();
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange.mock.calls[0][0].detail).toStrictEqual({
        value: 88,
      });
    });
  });
});
