import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Rate', () => {
  const tagName = 'rate';
  const Rate = simulate.load(path.resolve(__dirname, `../rate`), tagName, { less: true });

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
    box.dispatchEvent('touchstart');
    await simulate.sleep(10);

    expect(mockFn).toHaveBeenCalledTimes(1);

    comp.setData({ disabled: true });
    box.dispatchEvent('touchstart');
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

    const iconList = comp.querySelectorAll('.box >>> .t-rate__icon');
    iconList.forEach((it) => {
      expect(it.dom.classList).toContain(`${tagName}--t-rate-unselected`);
    });

    comp.setData({ value: 0.5 });
    expect(iconList[0].dom.classList).toContain(`${tagName}--t-rate-selected-half`);

    comp.setData({ value: 1.5 });
    expect(iconList[0].dom.classList).toContain(`${tagName}--t-rate-selected`);
    expect(iconList[1].dom.classList).toContain(`${tagName}--t-rate-selected-half`);
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
    expect(text.dom.textContent).toBe('');

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
    expect(text.dom.textContent).toBe('');

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
