import path from 'path';
import simulate from 'miniprogram-simulate';

describe('image', () => {
  const image = load(path.resolve(__dirname, `../image`), 't-image');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-image class="image" style="{{style}}" customStyle="{{customStyle}}"></t-image>`,
      usingComponents: {
        't-image': image,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $image = comp.querySelector('.image >>> .t-image');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($image.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($image.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
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
