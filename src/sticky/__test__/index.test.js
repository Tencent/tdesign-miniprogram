import simulate from 'miniprogram-simulate';
import path from 'path';

let scrollTop = 0;

beforeAll(() => {
  global.getCurrentPages = jest.fn(() => {
    return [
      {
        pageScroller: [
          jest.fn(() => {
            scrollTop += 1;
          }),
        ],
      },
    ];
  });
});

describe('Sticky Props', () => {
  const id = simulate.load(path.resolve(__dirname, './index'), {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':base', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    expect(comp.toJSON()).toMatchSnapshot();
  });

  // it(':contentStyle', async () => {
  //   const comp = simulate.render(id);
  //   comp.attach(document.createElement('parent-wrapper'));

  //   const $demo = comp.querySelector('.demo');
  //   const $sticky = comp.querySelector('.demo >>> #base-sticky');

  //   simulate.scroll($demo, 500, 4);
  //   await simulate.sleep(20);
  //   expect($sticky.instance.data.contentStyle).toBe('position:fixed;top:0px');
  // });

  // it(':offset-top', async () => {
  //   const comp = simulate.render(id);
  //   comp.attach(document.createElement('parent-wrapper'));
  //   const $demo = comp.querySelector('.demo');
  //   const $sticky = comp.querySelector('.demo >>> #offset-top-sticky');

  //   simulate.scroll($demo, 500, 4);
  //   await simulate.sleep(20);
  //   console.log(scrollTop);
  //   console.log('$sticky.instance.data.contentStyle: ', $sticky.instance.data.contentStyle);
  //   // expect($sticky.instance.data.contentStyle).toBe('position:fixed;top:100px');
  // });

  // it(':disabled', async () => {
  //   const comp = simulate.render(id);
  //   comp.attach(document.createElement('parent-wrapper'));
  //   const $demo = comp.querySelector('.demo');
  //   const $sticky = comp.querySelector('.demo >>> #disabled-sticky');

  //   simulate.scroll($demo, 500, 4);
  //   await simulate.sleep(20);
  //   // expect($sticky.instance.data.contentStyle).toBe('');
  //   console.log('$sticky.instance.data: ', $sticky.data);
  // });

  // it(':container', async () => {
  //   const comp = simulate.render(id);
  //   comp.attach(document.createElement('parent-wrapper'));
  //   const $demo = comp.querySelector('.demo');
  //   const $sticky = comp.querySelector('.demo >>> #container-sticky');

  //   simulate.scroll($demo, 500, 4);
  //   await simulate.sleep(20);
  //   // expect($sticky.instance.data.contentStyle).toBe('');
  //   console.log('$sticky.instance.data: ', $sticky.data);
  // });

  it(':detached', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $demo = comp.querySelector('.demo');
    simulate.scroll($demo, 500, 4);
    await simulate.sleep(20);
    comp.triggerLifeTime('detached');
  });
});
