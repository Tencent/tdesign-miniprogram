import path from 'path';
import simulate from 'miniprogram-simulate';
import Dialog from '../index';
import * as Util from '../../common/utils';

describe('dialog', () => {
  const dialog = load(path.resolve(__dirname, `../dialog`), 't-dialog');

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-dialog class="dialog" visible style="{{style}}" customStyle="{{customStyle}}"></t-dialog>`,
      usingComponents: {
        't-dialog': dialog,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $popup = comp.querySelector('.dialog >>> .t-popup');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($popup.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    }
  });
  it(':base', async () => {
    const id = simulate.load({
      template: `<t-dialog id="dialog" visible />`,
      usingComponents: {
        't-dialog': dialog,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':event', async () => {
    const handleOpenType = jest.fn();
    const handleOpenTypeError = jest.fn();
    const handleConfirm = jest.fn();
    const handleCancel = jest.fn();
    const handleOverlayClick = jest.fn();
    const id = simulate.load({
      template: `<t-dialog id="dialog"
        visible
        confirm-btn="ok"
        cancel-btn="cancel"
        closeOnOverlayClick
        bind:open-type-event="handleOpenType"
        bind:open-type-error-event="handleOpenTypeError"
        bind:overlay-click="handleOverlayClick"
        bind:cancel="handleCancel"
        bind:confirm="handleConfirm" />`,
      methods: {
        handleOpenType,
        handleOpenTypeError,
        handleConfirm,
        handleCancel,
        handleOverlayClick,
      },
      usingComponents: {
        't-dialog': dialog,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    if (!VIRTUAL_HOST) {
      // click confirm
      const $confirm = comp.querySelector('#dialog >>> .t-dialog__button--confirm');

      $confirm.dispatchEvent('tap');
      await simulate.sleep();

      expect(handleConfirm).toHaveBeenCalledTimes(1);

      // open-type
      $confirm.dispatchEvent('getuserinfo', { detail: { errMsg: 'ok' } });
      await simulate.sleep();

      expect(handleOpenType).toHaveBeenCalledTimes(1);

      $confirm.dispatchEvent('error', { detail: { errMsg: 'fail' } });
      await simulate.sleep();

      expect(handleOpenType).toHaveBeenCalledTimes(1);
      expect(handleOpenTypeError).toHaveBeenCalledTimes(1);

      // click cancel
      const $cancel = comp.querySelector('#dialog >>> .t-dialog__button--cancel');

      $cancel.dispatchEvent('tap');
      await simulate.sleep();

      expect(handleCancel).toHaveBeenCalledTimes(1);

      // click overlay
      const $overlay = comp.querySelector('#dialog >>> #popup-overlay');

      $overlay.dispatchEvent('tap');
      await simulate.sleep();

      expect(handleOverlayClick).toHaveBeenCalledTimes(1);
    }
  });

  it(':custom button', async () => {
    const bindtap = jest.fn();
    const handleOpenType = jest.fn();
    const handleOpenTypeError = jest.fn();
    const id = simulate.load({
      template: `<t-dialog id="dialog"
        visible
        bind:open-type-event="handleOpenType"
        bind:open-type-error-event="handleOpenTypeError"
        confirm-btn="{{confirmBtn}}" />`,
      data: {
        confirmBtn: {
          content: 'ok1',
          bindtap,
        },
      },
      methods: {
        handleOpenType,
        handleOpenTypeError,
      },
      usingComponents: {
        't-dialog': dialog,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    if (!VIRTUAL_HOST) {
      // click confirm
      const $confirm = comp.querySelector('#dialog >>> .t-dialog__button--confirm');

      $confirm.dispatchEvent('tap');
      await simulate.sleep();

      expect(bindtap).toHaveBeenCalledTimes(1);

      $confirm.dispatchEvent('getuserinfo', { detail: { errMsg: 'ok' } });
      await simulate.sleep();

      expect(handleOpenType).toHaveBeenCalledTimes(1);

      $confirm.dispatchEvent('getuserinfo', { detail: { errMsg: 'error' } });
      await simulate.sleep();

      expect(handleOpenTypeError).toHaveBeenCalledTimes(1);
    }
  });

  it(':actions', async () => {
    const handleAction = jest.fn();
    const id = simulate.load({
      template: `<t-dialog id="dialog"
        visible
        actions="{{actions}}"
        bind:action="handleAction" />`,
      data: {
        actions: [{ name: '1' }],
      },
      methods: {
        handleAction,
      },
      usingComponents: {
        't-dialog': dialog,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    if (!VIRTUAL_HOST) {
      // click confirm
      const $buttons = comp.querySelectorAll('#dialog >>> .t-dialog__button--action');

      expect($buttons.length).toBe(1);

      $buttons[0].dispatchEvent('tap');
      await simulate.sleep();

      expect(handleAction).toHaveBeenCalledTimes(1);
    }
  });

  it(':instance', async () => {
    const id = simulate.load({
      template: `<t-dialog id="dialog" visible />`,
      usingComponents: {
        't-dialog': dialog,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $dialog = comp.querySelector('#dialog');

    const mock = jest.spyOn(Util, 'getInstance');
    mock.mockImplementation(() => $dialog.instance);

    if (!VIRTUAL_HOST) {
      // alert
      const handleConfirm = jest.fn();
      Dialog.alert({ confirmBtn: 'ok' }).then(handleConfirm);
      const $confirm = comp.querySelector('#dialog >>> .t-dialog__button--confirm');
      $confirm.dispatchEvent('tap');
      await simulate.sleep();
      expect(handleConfirm).toHaveBeenCalledTimes(1);

      // click confirm
      Dialog.confirm({ confirmBtn: 'ok' }).then(handleConfirm);

      $confirm.dispatchEvent('tap');
      await simulate.sleep();

      expect(handleConfirm).toHaveBeenCalledTimes(2);

      // click cancel
      const handleCancel = jest.fn();
      Dialog.confirm({ confirmBtn: 'ok', cancelBtn: 'fine' }).then(handleConfirm).catch(handleCancel);
      const $cancel = comp.querySelector('#dialog >>> .t-dialog__button--cancel');

      $cancel.dispatchEvent('tap');
      await simulate.sleep();

      expect(handleCancel).toHaveBeenCalledTimes(1);

      // tap action
      const handleAction = jest.fn();
      Dialog.action({ actions: [{ content: 'first' }] }).then(handleAction);
      // click confirm
      const $buttons = comp.querySelectorAll('#dialog >>> .t-dialog__button--action');

      expect($buttons.length).toBe(1);
      $buttons[0].dispatchEvent('tap');
      await simulate.sleep();

      expect(handleAction).toHaveBeenCalledTimes(1);

      Dialog.close();
    }
    // without instance
    mock.mockImplementation(() => null);
    return Dialog.action().catch((e) => {
      expect(e).toBeUndefined();
      mock.mockRestore();
    });
  });
});
