import path from 'path';
import simulate from 'miniprogram-simulate';

describe('Rate', () => {
  const tagName = 'rate';
  const Rate = load(path.resolve(__dirname, `../rate`), tagName);

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-rate class="rate" style="{{style}}" customStyle="{{customStyle}}"></t-rate>`,
      usingComponents: {
        't-rate': Rate,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $rate = comp.querySelector('.rate >>> .t-rate');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($rate.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($rate.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':disabled', async () => {
    const mockFn = jest.fn();
    const id = simulate.load({
      usingComponents: {
        't-rate': Rate,
      },
      template: `<t-rate class="box" value="{{1}}" disabled="{{disabled}}" bind:change="onChange"></t-rate>`,
      options: {
        data: {
          disabled: false,
        },
      },
      methods: {
        onChange: mockFn,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.body);

    const box = comp.querySelector('.box >>> .t-rate__wrapper');
    box.dispatchEvent('touchmove');
    await simulate.sleep(10);

    expect(mockFn).toHaveBeenCalledTimes(1);

    comp.setData({ disabled: true });
    box.dispatchEvent('touchmove');
    await simulate.sleep(10);

    expect(mockFn).not.toHaveBeenCalledTimes(2);
  });

  it(':allow-half', async () => {
    const id = simulate.load({
      usingComponents: {
        't-rate': Rate,
      },
      template: `<t-rate class="box" value="{{value}}" allow-half></t-rate>`,
      options: {
        data: { value: 0 },
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.body);

    if (!VIRTUAL_HOST) {
      const iconList = comp.querySelectorAll('.box >>> .t-rate__icon');
      iconList.forEach((it) => {
        expect(it.dom.classList).toContain(`${tagName}--t-rate__icon--unselected`);
      });

      comp.setData({ value: 0.5 });
      expect(iconList[0].dom.classList).toContain(`${tagName}--t-rate__icon--selected-half`);

      comp.setData({ value: 1.5 });
      expect(iconList[0].dom.classList).toContain(`${tagName}--t-rate__icon--selected`);
      expect(iconList[1].dom.classList).toContain(`${tagName}--t-rate__icon--selected-half`);
    }
  });

  it(':show-text default texts', async () => {
    const id = simulate.load({
      usingComponents: {
        't-rate': Rate,
      },
      template: `<t-rate class="box" show-text value="{{value}}"></t-rate>`,
      options: {
        data: { value: 0 },
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.body);

    const box = comp.querySelector('.box');
    const text = box.querySelector('.t-rate__text');
    expect(text.dom.textContent).toBe('未评分');

    comp.setData({ value: 1 });
    expect(text.dom.textContent).toBe(box.data.defaultTexts[0]);

    comp.setData({ value: 2 });
    expect(text.dom.textContent).toBe(box.data.defaultTexts[1]);

    comp.setData({ value: 3 });
    expect(text.dom.textContent).toBe(box.data.defaultTexts[2]);

    comp.setData({ value: 4 });
    expect(text.dom.textContent).toBe(box.data.defaultTexts[3]);

    comp.setData({ value: 5 });
    expect(text.dom.textContent).toBe(box.data.defaultTexts[4]);
  });

  it(':show-text custom texts', async () => {
    const texts = ['1分', '2分', '3分', '4分', '5分'];
    const id = simulate.load({
      usingComponents: {
        't-rate': Rate,
      },
      template: `<t-rate class="box" texts="{{texts}}" show-text value="{{value}}"></t-rate>`,
      options: {
        data: { value: 0, texts: [] },
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.body);

    const box = comp.querySelector('.box');
    const text = box.querySelector('.t-rate__text');
    comp.setData({ texts: texts });
    expect(text.dom.textContent).toBe('未评分');

    comp.setData({ value: 1 });
    expect(text.dom.textContent).toBe(texts[0]);

    comp.setData({ value: 2 });
    expect(text.dom.textContent).toBe(texts[1]);

    comp.setData({ value: 3 });
    expect(text.dom.textContent).toBe(texts[2]);

    comp.setData({ value: 4 });
    expect(text.dom.textContent).toBe(texts[3]);

    comp.setData({ value: 5 });
    expect(text.dom.textContent).toBe(texts[4]);
  });
});
