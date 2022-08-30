import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Avatar Event', () => {
  const avatar = simulate.load(path.resolve(__dirname, `../avatar`), 't-avatar', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':image load error', async () => {
    const onLoadError = jest.fn();
    const id = simulate.load({
      template: `<t-avatar class="error-avatar" image="{{errorImage}}" alt="avatar" bind:error="onLoadError" />`,
      usingComponents: {
        't-avatar': avatar,
      },
      data: {
        errorImage: 'https://cdn-we-retail.ym.tencent.com/retail-ui/components-exp/avatar/avatar/1',
      },
      methods: {
        onLoadError,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $image = comp.querySelector('.error-avatar >>> #image');
    $image.dispatchEvent('error');

    await simulate.sleep(20);
    expect(onLoadError).toBeCalled();
  });
});
