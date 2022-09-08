import simulate from 'miniprogram-simulate';
import path from 'path';

describe('slider', () => {
  const slider = simulate.load(path.resolve(__dirname, `../slider`), 't-slider', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  const left = 16;
  const right = 319;
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
  const calc = (pos) => Math.ceil(((pos - left) / size) * 100);
  const mockFn = jest.spyOn(wx, 'createSelectorQuery');

  mockFn.mockImplementation(() => createSelectorQuery);

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
    // mock function
    const right = 319;
    const left = 16;

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

    const size = right - left;
    expect($slider.instance.data.value).toStrictEqual([0, Math.ceil(((100 - left) / size) * 100)]);
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

    move($rightDot, 200);
    await simulate.sleep();

    expect($slider.instance.data.value).toStrictEqual([calc(100), calc(200)]);

    // disabled
    $slider.setData({ disabled: true });
    move($leftDot, 150);
    move($rightDot, 150);
    expect($slider.instance.data.value).toStrictEqual([calc(100), calc(200)]);
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
