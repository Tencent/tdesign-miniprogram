import path from 'path';

import simulate from 'miniprogram-simulate';
import { showToast, hideToast } from '../index';
import * as Util from '../../common/utils';

describe('toast', () => {
  const toast = load(path.resolve(__dirname, `../toast`), 't-toast');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-toast id="toast" style="{{style}}" customStyle="{{customStyle}}"></t-toast>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
      usingComponents: {
        't-toast': toast,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $toastInstance = comp.querySelector('#toast');
    $toastInstance.instance.show({ message: 'test', duration: 0 });
    await simulate.sleep(0);
    // expect(comp.toJSON()).toMatchSnapshot();
    const $toast = comp.querySelector('#toast >>> .t-toast');
    if (VIRTUAL_HOST) {
      expect($toast.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($toast.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
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

  it(':duration', async () => {
    const id = simulate.load({
      template: `<t-toast id="toast"></t-toast>`,
      usingComponents: {
        't-toast': toast,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $toast = comp.querySelector('#toast');

    $toast.instance.show({ message: 'test', duration: 0 });

    await simulate.sleep(2000);

    expect($toast.data.visible).toBeTruthy();
  });

  it(':instance', async () => {
    const handleClose = jest.fn();
    const id = simulate.load({
      template: `<t-toast id="toast" bind:close="handleClose"></t-toast>`,
      methods: {
        handleClose,
      },
      usingComponents: {
        't-toast': toast,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $toast = comp.querySelector('#toast');
    const mock = jest.spyOn(Util, 'getInstance');
    mock.mockImplementation(() => $toast.instance);

    showToast();
    expect($toast.data.visible).toBeTruthy();

    showToast();
    expect(handleClose).toHaveBeenCalledTimes(0);

    await simulate.sleep(2000);
    expect(handleClose).toHaveBeenCalledTimes(1);

    hideToast();
    expect($toast.data.visible).toBeFalsy();
  });
});
