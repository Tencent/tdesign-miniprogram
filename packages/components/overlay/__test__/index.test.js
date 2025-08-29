import path from 'path';
import simulate from 'miniprogram-simulate';

describe('overlay', () => {
  const overlay = load(path.resolve(__dirname, `../overlay`), 't-overlay');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-overlay class="overlay" visible style="{{style}}" customStyle="{{customStyle}}"></t-overlay>`,
      usingComponents: {
        't-overlay': overlay,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $overlay = comp.querySelector('.overlay >>> .t-overlay');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($overlay.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($overlay.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
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
    // expect(comp.toJSON()).toMatchSnapshot();
    expect($overlay.dom.style.backgroundColor).toBe('blue');
  });
});
