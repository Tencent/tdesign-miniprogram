import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Steps', () => {
  let comp;

  beforeAll(() => {
    const Index = load(path.resolve(__dirname, `./index`));
    comp = simulate.render(Index);
    comp.attach(document.body);
  });

  it(': default-current', async () => {
    const items = comp.querySelectorAll('.a1 >>> .item');
    ['process', 'default'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });
    ['process', 'default'].forEach((it, index) => {
      expect(items[index].querySelector('.t-steps-item').dom.classList).toContain(`t-step--t-steps-item--${it}`);
    });

    const icon = items[1].querySelector('.t-steps-item__icon');
    icon.dispatchEvent('tap');
    await simulate.sleep(5);

    ['finish', 'process'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });

    const items2 = comp.querySelectorAll('.a2 >>> .item');
    ['finish', 'process'].forEach((it, index) => {
      expect(items2[index].data.curStatus).toBe(it);
    });
    ['finish', 'process'].forEach((it, index) => {
      expect(items2[index].querySelector('.t-steps-item').dom.classList).toContain(`t-step--t-steps-item--${it}`);
    });
  });

  it(': layout', async () => {
    const root = comp.querySelector('.a1 >>> .t-steps');

    expect(root.dom.classList).toContain('t-steps--t-steps--horizontal');

    comp.setData({ layout: 'vertical' });

    expect(root.dom.classList).toContain('t-steps--t-steps--vertical');
  });

  it(': theme', async () => {
    const item = comp.querySelector('.a2 >>> .item >>> .t-step');

    expect(item.dom.classList).toContain('t-step--t-step--dot-anchor');
  });

  it(': current', async () => {
    const items = comp.querySelectorAll('.b >>> .item');
    ['process', 'default'].forEach((it, index) => {
      expect(items[index].data.curStatus).toBe(it);
    });

    const icon = items[1].querySelector('.t-steps-item__icon');
    icon.dispatchEvent('tap');
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

    const icon = items[1].querySelector('.t-steps-item__icon');
    icon.dispatchEvent('tap');
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
    const icon = items[1].querySelector('.t-steps-item__icon');
    icon.dispatchEvent('tap');
    await simulate.sleep(5);

    expect(mockFn).toHaveBeenCalled();

    comp.setData({ readonly: true });
    icon.dispatchEvent('tap');
    await simulate.sleep(5);

    expect(comp.querySelector('.d >>> .t-steps').dom.classList).toContain('t-steps--t-steps--readonly');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it(': sub-step-items(step-item)', async () => {
    const subs1 = comp.querySelectorAll('.e1 >>> .item >>> .t-steps-item-sub');

    expect(subs1.length).toBe(2);
    ['process', 'finish'].forEach((it, index) => {
      expect(subs1[index].dom.classList).toContain(`t-step--t-steps-item-sub-status--${it}`);
    });

    const subs2 = comp.querySelectorAll('.e2 >>> .item >>> .t-steps-item-sub');

    ['process', 'error'].forEach((it, index) => {
      expect(subs2[index].dom.classList).toContain(`t-step--t-steps-item-sub-status--${it}`);
    });
  });

  it(': status(step-item)', async () => {
    const item = comp.querySelector('.f >>> .item >>> .t-steps-item');

    expect(item.dom.classList).toContain('t-step--t-steps-item--error');
  });
});
