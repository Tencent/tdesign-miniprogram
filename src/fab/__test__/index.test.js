import simulate from 'miniprogram-simulate';
import path from 'path';

describe('fab', () => {
  const fab = simulate.load(path.resolve(__dirname, `../fab`), 't-fab', {
    less: true,
    rootPath: path.resolve(__dirname, '../../'),
  });
  it(`fab :base`, async () => {
    const id = simulate.load({
      template: `<t-fab class="fab" text="{{text}}"></fab>`,
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
