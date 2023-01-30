import simulate from 'miniprogram-simulate';
import path from 'path';

describe('icon', () => {
  const icon = load(path.resolve(__dirname, `../icon`));

  it(`icon :base`, () => {
    const id = simulate.load({
      template: `<t-icon class="icon" size="{{size}}"></t-icon>`,
      data: {
        size: 20,
      },
      usingComponents: {
        't-icon': icon,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $icon = comp.querySelector('.icon >>> .t-icon');
    expect($icon.dom.getAttribute('style').includes('font-size: 20px')).toBeTruthy();
  });

  it(`icon :name`, () => {
    const id = simulate.load({
      template: `<t-icon class="icon" size="{{size}}" name="{{name}}"></t-icon>`,
      data: {
        size: 20,
        name: 'https://tdesign.gtimg.com/miniprogram/images/icon-image.png',
      },
      usingComponents: {
        't-icon': icon,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $image = comp.querySelector('.icon >>> .t-icon__image');
    expect($image).toBeTruthy();
  });

  it(`icon :event`, async () => {
    const handleClick = jest.fn();
    const id = simulate.load({
      template: `<t-icon class="icon" bind:click="handleClick"></t-icon>`,
      data: {
        size: 20,
      },
      methods: {
        handleClick,
      },
      usingComponents: {
        't-icon': icon,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.querySelector('.icon >>> .t-icon').dispatchEvent('tap');

    await simulate.sleep(10);

    expect(handleClick).toHaveBeenCalled();
  });
});
