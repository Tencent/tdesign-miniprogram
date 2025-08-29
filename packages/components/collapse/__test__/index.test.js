import path from 'path';
import simulate from 'miniprogram-simulate';

describe('collapse', () => {
  const id = load(path.resolve(__dirname, `./index`));

  it(`: style && customStyle`, async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const collapse = comp.querySelector('#base >>> .t-collapse');
    const collapsePanel = comp.querySelector('#first >>> .t-collapse-panel');

    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect(collapse.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      expect(
        collapsePanel.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    } else {
      expect(collapse.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      expect(collapsePanel.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':event', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $second = comp.querySelector('#second >>> .t-collapse-panel__title');
    const $transitionWrapper = comp.querySelector('#second >>> .t-collapse-panel__wrapper');

    $second.dispatchEvent('tap');
    $transitionWrapper.dispatchEvent('transitionend');

    await simulate.sleep();

    expect($base.instance.data.value.includes(1)).toBeTruthy();

    $second.dispatchEvent('tap');

    await simulate.sleep();

    expect($base.instance.data.value.includes(1)).toBeFalsy();

    // expandMutex = true
    comp.setData({ expandMutex: true });

    expect($base.instance.data.value.includes(0)).toBeTruthy();

    $second.dispatchEvent('tap');

    await simulate.sleep();

    expect($base.instance.data.value.includes(0)).toBeFalsy();
    expect($base.instance.data.value.includes(1)).toBeTruthy();
  });

  it(':defaultExpandAll', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $expandAll = comp.querySelector('#expandAll');

    expect($expandAll.toJSON()).toMatchSnapshot();
  });

  it(':disabled', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    comp.setData({ secondDisabled: true });

    await simulate.sleep();

    // const $base = comp.querySelector('#base');

    // expect($base.toJSON()).toMatchSnapshot();
  });
});
