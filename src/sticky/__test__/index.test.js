import path from 'path';
import simulate from 'miniprogram-simulate';

beforeAll(() => {
  global.getCurrentPages = jest.fn(() => {
    return [
      {
        pageScroller: [jest.fn()],
      },
    ];
  });
});

describe('Sticky Props', () => {
  const id = load(path.resolve(__dirname, './index'));

  it(':base', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    // expect(comp.toJSON()).toMatchSnapshot();
    const $sticky = comp.querySelector('#base-sticky >>> .t-sticky');
    if (VIRTUAL_HOST) {
      expect($sticky.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($sticky.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':contentStyle', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $demo = comp.querySelector('.demo');
    const $sticky = comp.querySelector('.demo >>> #base-sticky');

    simulate.scroll($demo, 500, 4);
    await simulate.sleep(20);
    expect($sticky.instance.data.contentStyle).toBe('position:fixed;top:0px;left:0;right:0;');
  });

  it(':offset-top', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $demo = comp.querySelector('.demo');
    const $sticky = comp.querySelector('.demo >>> #offset-top-sticky');

    simulate.scroll($demo, 500, 4);
    await simulate.sleep(20);
    expect($sticky.instance.data.contentStyle).toBe('position:fixed;top:100px;left:0;right:0;');
  });

  it(':disabled', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $demo = comp.querySelector('.demo');
    const $sticky = comp.querySelector('.demo >>> #disabled-sticky');

    simulate.scroll($demo, 500, 4);
    await simulate.sleep(20);
    expect($sticky.instance.data.contentStyle).toBe('');
  });
});
