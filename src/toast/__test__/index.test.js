import simulate from 'miniprogram-simulate';
import path from 'path';

describe('toast', () => {
  const toast = simulate.load(path.resolve(__dirname, `../toast`), 't-toast', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':base', async () => {
    const close = jest.fn();
    const destory = jest.fn();
    const id = simulate.load({
      template: `<t-toast id="toast" bind:close="close" bind:destory="destory"></t-toast>`,
      methods: {
        close,
        destory,
      },
      usingComponents: {
        't-toast': toast,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $toast = comp.querySelector('#toast');

    $toast.instance.show({ message: 'test' });

    expect($toast.querySelector('.t-toast__text').dom.textContent).toBe('test');

    $toast.instance.hide();

    await simulate.sleep(300);

    expect(close).toHaveBeenCalledTimes(1);

    comp.detach();

    await simulate.sleep(0);

    expect(destory).toHaveBeenCalledTimes(1);
  });
});
