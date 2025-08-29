import path from 'path';
import simulate from 'miniprogram-simulate';

describe('Steps', () => {
  let comp;

  beforeAll(() => {
    const Index = load(path.resolve(__dirname, `./index`));
    comp = simulate.render(Index);
    comp.attach(document.body);
  });

  it(`: style && customStyle`, async () => {
    const $steps = comp.querySelector('.a1 >>> .t-steps');
    const $stepsItem = comp.querySelector('.a1 >>> .t-steps-item');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($steps.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      expect(
        $stepsItem.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect($steps.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      expect($stepsItem.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':default-current', async () => {
    const items = comp.querySelectorAll('.a1 >>> .item');
    ['process', 'default'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });

    const item = items[1].querySelector('.t-steps-item');
    item.dispatchEvent('tap');
    await simulate.sleep(5);

    ['finish', 'process'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });

    const items2 = comp.querySelectorAll('.a2 >>> .item');
    ['finish', 'process'].forEach((it, index) => {
      expect(items2[index].data.curStatus).toBe(it);
    });
  });

  it(': layout', async () => {
    const root = comp.querySelector('.a1 >>> .t-steps');

    expect(root.dom.classList).toContain('t-steps--t-steps--horizontal');

    comp.setData({ layout: 'vertical' });

    expect(root.dom.classList).toContain('t-steps--t-steps--vertical');
  });

  it(':theme', async () => {
    const item = comp.querySelector('.a2 >>> .item >>> .t-steps-item__line');

    expect(item.dom.classList).toContain('t-step--t-steps-item__line--dot');
  });

  it(': current', async () => {
    const items = comp.querySelectorAll('.b >>> .item');
    ['process', 'default'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });

    const item = items[1].querySelector('.t-steps-item');
    item.dispatchEvent('tap');
    await simulate.sleep(5);

    ['finish', 'process'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });
  });

  it(': current-status', async () => {
    const items = comp.querySelectorAll('.c >>> .item');
    ['error', 'default'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });

    const item = items[1].querySelector('.t-steps-item');
    item.dispatchEvent('tap');
    await simulate.sleep(5);

    ['finish', 'error'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });
  });

  it(': readonly', async () => {
    const mockFn = jest.fn();
    const root = comp.querySelector('.d');
    root.addEventListener('change', mockFn);

    const items = comp.querySelectorAll('.d >>> .item');
    const item = items[1].querySelector('.t-steps-item');
    item.dispatchEvent('tap');
    await simulate.sleep(5);

    expect(mockFn).toHaveBeenCalled();

    comp.setData({ readonly: true });
    item.dispatchEvent('tap');
    await simulate.sleep(5);

    expect(comp.querySelector('.d >>> .t-steps').dom.classList).toContain('t-steps--t-steps--readonly');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
