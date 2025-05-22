import path from 'path';
import simulate from 'miniprogram-simulate';

describe('image-viewer', () => {
  const imageViewer = load(path.resolve(__dirname, `../image-viewer`), 't-image-viewer');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-image-viewer class="imageViewer" visible style="{{style}}" customStyle="{{customStyle}}"></t-image-viewer>`,
      usingComponents: {
        't-image-viewer': imageViewer,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $imageViewer = comp.querySelector('.imageViewer >>> .t-image-viewer');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect(
        $imageViewer.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect($imageViewer.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', async () => {
    const id = simulate.load({
      template: `<t-image-viewer visible id="base" images="{{images}}" />`,
      data: {
        images: ['a.png', 'b.png'],
      },
      usingComponents: {
        't-image-viewer': imageViewer,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $image = comp.querySelector('#base >>> .t-image-viewer__image');

    $image.dispatchEvent('load', { detail: { width: 100, height: 100 } });
    await simulate.sleep();

    expect($image.toJSON()).toMatchSnapshot();

    $image.dispatchEvent('load', { detail: { width: 1000, height: 1000 } });
    await simulate.sleep();

    expect($image.toJSON()).toMatchSnapshot();

    $image.dispatchEvent('load', { detail: { width: 800, height: 1000 } });
    await simulate.sleep();

    expect($image.toJSON()).toMatchSnapshot();
  });

  it(':event', async () => {
    const handleClose = jest.fn();
    const handleDelete = jest.fn();
    const id = simulate.load({
      template: `<t-image-viewer
        id="base"
        visible
        closeBtn
        deleteBtn
        bind:delete="handleDelete"
        bind:close="handleClose"
        images="{{images}}" />`,
      data: {
        images: ['a.png', 'b.png'],
      },
      methods: {
        handleClose,
        handleDelete,
      },
      usingComponents: {
        't-image-viewer': imageViewer,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    // close
    const $close = comp.querySelector('#base >>> .t-image-viewer__nav-close');

    $close.dispatchEvent('tap');
    await simulate.sleep();

    expect(handleClose).toHaveBeenCalled();

    // delete
    const $delete = comp.querySelector('#base >>> .t-image-viewer__nav-delete');

    $delete.dispatchEvent('tap');
    await simulate.sleep();

    expect(handleDelete).toHaveBeenCalled();
  });

  it(':width', () => {});
});
