import simulate from 'miniprogram-simulate';
import path from 'path';

describe('icon', () => {
  const icon = simulate.load(path.resolve(__dirname, `../icon`), {
    less: true,
  });

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

    expect(comp.querySelector('.icon').data.fontSize).toBe('20');

    comp.setData({ size: 'xs' });
    expect(comp.querySelector('.icon').data.fontSize).toBe('24rpx');
    comp.setData({ size: 'small' });
    expect(comp.querySelector('.icon').data.fontSize).toBe('28rpx');
    comp.setData({ size: 'middle' });
    expect(comp.querySelector('.icon').data.fontSize).toBe('32rpx');
    comp.setData({ size: 'large' });
    expect(comp.querySelector('.icon').data.fontSize).toBe('36rpx');
    comp.setData({ size: 'xl' });
    expect(comp.querySelector('.icon').data.fontSize).toBe('40rpx');
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
