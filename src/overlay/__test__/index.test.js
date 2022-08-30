import simulate from 'miniprogram-simulate';
import path from 'path';

describe('overlay', () => {
  const overlay = simulate.load(path.resolve(__dirname, `../overlay`), 't-overlay', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':base', () => {
    const id = simulate.load({
      template: `<t-overlay visible></t-overlay>`,
      usingComponents: {
        't-overlay': overlay,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':event', async () => {
    const handleClick = jest.fn();
    const id = simulate.load({
      template: `<t-overlay id="overlay" visible="{{true}}" bind:click="handleClick"></t-overlay>`,
      methods: {
        handleClick,
      },
      usingComponents: {
        't-overlay': overlay,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $overlay = comp.querySelector('#overlay >>> .t-overlay');

    $overlay.dispatchEvent('tap');
    $overlay.dispatchEvent('touchmove');

    await simulate.sleep();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(':background', async () => {
    const id = simulate.load({
      template: `<t-overlay id="overlay" visible="{{true}}" backgroundColor="blue"></t-overlay>`,
      usingComponents: {
        't-overlay': overlay,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $overlay = comp.querySelector('#overlay >>> .t-overlay');

    expect($overlay.dom.style.backgroundColor).toBe('blue');
  });
});
