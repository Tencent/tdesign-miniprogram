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

    await simulate.sleep(5000);

    const $image = comp.querySelector('.error-avatar >>> .t-image');

    console.log($image.instance);

    expect(onLoadError).toBeCalled();
  });
});
