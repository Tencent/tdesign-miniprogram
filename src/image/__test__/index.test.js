import simulate from 'miniprogram-simulate';
import path from 'path';

describe('image', () => {
  const image = simulate.load(path.resolve(__dirname, `../image`), 't-image', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':base', () => {
    const id = simulate.load({
      template: `<t-image></t-image>`,
      usingComponents: {
        't-image': image,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':success', async () => {
    const handleLoad = jest.fn();
    const id = simulate.load({
      template: `<t-image 
      id="root"
      mode="{{mode}}"
      src="https://www.tencent.com/img/index/menu_logo.png"
      bind:load="handleLoad"
      />`,
      data: {
        mode: 'widthFix',
      },
      methods: {
        handleLoad,
      },
      usingComponents: {
        't-image': image,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $image = comp.querySelector('#root >>> #image');

    $image.dispatchEvent('load', { detail: { width: 100, height: 100 } });

    await simulate.sleep();

    expect(handleLoad).toHaveBeenCalled();

    // height fixed
    const mock = jest.spyOn(wx, 'getSystemInfoSync');
    mock.mockImplementation(() => ({ SDKVersion: '2.10.2' }));

    comp.setData({ mode: 'heightFix' });
    $image.dispatchEvent('load', { detail: { width: 100, height: 100 } });

    await simulate.sleep();
    expect(comp.toJSON()).toMatchSnapshot();

    mock.mockRestore();
  });
});
