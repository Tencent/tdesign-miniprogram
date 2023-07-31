import path from 'path';
import simulate from 'miniprogram-simulate';

describe('fab', () => {
  const fab = load(path.resolve(__dirname, `../fab`), 't-fab');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-fab class="fab" style="{{style}}" customStyle="{{customStyle}}"></t-fab>`,
      usingComponents: {
        't-fab': fab,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $fab = comp.querySelector('.fab >>> .t-fab');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($fab.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($fab.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(`fab :base`, async () => {
    const id = simulate.load({
      template: `<t-fab class="fab" text="{{text}}" ></fab>`,
      usingComponents: {
        't-fab': fab,
      },
      data: {
        text: 'base',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $content = comp.querySelector('.fab >>> .t-button__content');

    expect($content.dom.textContent).toBe('base');

    comp.setData({ text: '' });

    expect($content.dom.textContent).toBe('');
  });

  it(`fab :event`, async () => {
    const fn = jest.fn();
    const id = simulate.load({
      template: `<t-fab class="fab" bind:click="handleClick"></fab>`,
      methods: {
        handleClick: fn,
      },
      usingComponents: {
        't-fab': fab,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.querySelector('.fab >>> .t-button').dispatchEvent('tap');
    await simulate.sleep(10);

    expect(fn).toHaveBeenCalled();
  });
});
