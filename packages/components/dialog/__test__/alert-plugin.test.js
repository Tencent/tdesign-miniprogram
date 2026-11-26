import path from 'path';
import simulate from 'miniprogram-simulate';
import Dialog from '../index';
import * as Util from '../../common/utils';

describe('dialog plugin alert', () => {
  const dialog = load(path.resolve(__dirname, `../dialog`), 't-dialog');

  const setup = async (template) => {
    const id = simulate.load({
      template,
      usingComponents: {
        't-dialog': dialog,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    return comp;
  };

  it(':hides the cancel button even when the instance declares one', async () => {
    const comp = await setup(`<t-dialog id="dialog" visible cancelBtn="cancel" />`);
    const $dialog = comp.querySelector('#dialog');
    const mock = jest.spyOn(Util, 'getInstance');
    mock.mockImplementation(() => $dialog.instance);

    Dialog.alert({ confirmBtn: 'ok' });
    await simulate.sleep();

    expect(comp.querySelectorAll('#dialog >>> .t-dialog__button--cancel').length).toBe(0);
    expect(comp.querySelectorAll('#dialog >>> .t-dialog__button--confirm').length).toBe(1);

    mock.mockRestore();
  });

  it(':renders no cancel button for an empty cancelBtn', async () => {
    const comp = await setup(`<t-dialog id="dialog" visible confirmBtn="ok" cancelBtn="" />`);

    expect(comp.querySelectorAll('#dialog >>> .t-dialog__button--cancel').length).toBe(0);
    expect(comp.querySelectorAll('#dialog >>> .t-dialog__button--confirm').length).toBe(1);
  });

  it(':renders the cancel button for a labelled cancelBtn', async () => {
    const comp = await setup(`<t-dialog id="dialog" visible cancelBtn="cancel" />`);
    const $buttons = comp.querySelectorAll('#dialog >>> .t-dialog__button--cancel');

    expect($buttons.length).toBe(1);
    expect($buttons[0].dom.textContent.trim()).toBe('cancel');
  });
});
