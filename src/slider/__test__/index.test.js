import simulate from 'miniprogram-simulate';
import path from 'path';

describe('slider', () => {
  const slider = load(path.resolve(__dirname, `../slider`), 't-slider');

  const left = 16;
  const right = 325;
  const createSelectorQuery = {
    left,
    right,
    in() {
      return this;
    },
    select() {
      return this;
    },
    boundingClientRect(fn) {
      const { left, right } = this;
      fn({ left, right });
      return this;
    },
    exec() {
      return this;
    },
  };
  const size = right - left;
  const calc = (pos) => {
    const ans = Math.round(((pos - left) / size) * 100);
    return ans;
  };
  const mockFn = jest.spyOn(wx, 'createSelectorQuery');

  mockFn.mockImplementation(() => createSelectorQuery);

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-slider class="slider" style="{{style}}" customStyle="{{customStyle}}"></t-slider>`,
      usingComponents: {
        't-slider': slider,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $slider = comp.querySelector('.slider >>> .t-slider');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($slider.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($slider.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', async () => {
    const id = simulate.load({
      template: `<t-slider id="base" value="{{value}}" bind:change="handleChange"></t-slider>`,
      data: {
        value: 10,
      },
      methods: {
        handleChange(e) {
          this.setData({ value: e.detail.value });
        },
      },
      usingComponents: {
        't-slider': slider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $slider = comp.querySelector('#base');
    const $line = $slider.querySelector('#sliderLine');
    const tap = (dom, x) =>
      dom.dispatchEvent('tap', {
        changedTouches: [
          {
            pageX: x,
          },
        ],
      });
    expect($slider.instance.data.value).toBe(10);

    tap($line, 100);
    await simulate.sleep();

    expect($slider.instance.data.value).toBe(calc(100));

    $slider.setData({ disabled: true });
    tap($line, 150);
    await simulate.sleep();

    expect($slider.instance.data.value).toBe(calc(100));
  });

  it('without value', async () => {
    const id = simulate.load({
      template: `<t-slider id="base" defaultValue="{{0}}"></t-slider>`,
      usingComponents: {
        't-slider': slider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $slider = comp.querySelector('#base');

    expect($slider.instance.data.value).toBe(0);
  });

  it(':range', async () => {
    const id = simulate.load({
      template: `<t-slider id="base" range></t-slider>`,
      usingComponents: {
        't-slider': slider,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $slider = comp.querySelector('#base');
    const $line = $slider.querySelector('#sliderLine');

    $line.dispatchEvent('tap', {
      changedTouches: [
        {
          pageX: 100,
        },
      ],
    });

    await simulate.sleep();

    expect($slider.instance.data.value).toStrictEqual([0, calc(100)]);
  });

  it(':marks', async () => {
    const id = simulate.load({
      template: `<t-slider id="base" marks="{{marks}}"></t-slider>`,
      data: {
        marks: {
          0: 'small',
          50: 'middle',
          100: 'big',
        },
      },
      usingComponents: {
        't-slider': slider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $scaleDescList = comp.querySelectorAll('#base >>> .t-slider__scale-desc');

    expect($scaleDescList[0].dom.textContent.trim()).toBe('small');
    expect($scaleDescList[1].dom.textContent.trim()).toBe('middle');
    expect($scaleDescList[2].dom.textContent.trim()).toBe('big');

    // array marks
    comp.setData({ marks: [10, 30, 50, 80, 100] });

    expect(comp.querySelectorAll('#base >>> .t-slider__scale-desc').length).toBe(0);
    expect(comp.querySelectorAll('#base >>> .t-slider__scale-item').length).toBe(5);

    // empty object
    comp.setData({});
  });

  it('@touch on range', async () => {
    const id = simulate.load({
      template: `<t-slider id="base" range></t-slider>`,
      usingComponents: {
        't-slider': slider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $slider = comp.querySelector('#base');
    const $leftDot = $slider.querySelector('#leftDot');
    const $rightDot = $slider.querySelector('#rightDot');
    const move = (dom, x, y) => {
      dom.dispatchEvent('touchmove', {
        changedTouches: [{ x, y }],
      });
    };

    move($leftDot, 100);
    await simulate.sleep();

    expect($slider.instance.data.value).toStrictEqual([calc(100), 100]);

    move($rightDot, 300);
    await simulate.sleep();

    expect($slider.instance.data.value).toStrictEqual([calc(100), calc(300)]);

    // disabled
    $slider.setData({ disabled: true });
    move($leftDot, 150);
    move($rightDot, 150);
    expect($slider.instance.data.value).toStrictEqual([calc(100), calc(300)]);
  });

  it('value is over limited', async () => {
    const id = simulate.load({
      template: `<t-slider id="base" value="{{value}}"></t-slider>`,
      data: {
        value: -1,
      },
      usingComponents: {
        't-slider': slider,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    await simulate.sleep();

    const $slider = comp.querySelector('#base');

    expect($slider.instance.data._value).toBe(0);

    comp.setData({ value: 101 });
    expect($slider.instance.data._value).toBe(100);

    comp.setData({ value: 'undefined' });
    expect($slider.instance.data._value).toBe(0);
  });
});
