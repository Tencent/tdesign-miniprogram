import simulate from 'miniprogram-simulate';
import path from 'path';

describe('collapse', () => {
  const id = load(path.resolve(__dirname, `./index`));

  it(':base', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':event', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $base = comp.querySelector('#base');
    const $second = comp.querySelector('#second >>> .t-collapse-panel__title');
    const $transitionWrapper = comp.querySelector('#second >>> .t-collapse-panel__wrapper');

    $second.dispatchEvent('click');
    $transitionWrapper.dispatchEvent('transitionend');

    await simulate.sleep();

    expect($base.instance.data.value.includes(1)).toBeTruthy();

    $second.dispatchEvent('click');

    await simulate.sleep();

    expect($base.instance.data.value.includes(1)).toBeFalsy();

    // expandMutex = true
    comp.setData({ expandMutex: true });

    expect($base.instance.data.value.includes(0)).toBeTruthy();

    $second.dispatchEvent('click');

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

    const $base = comp.querySelector('#base');

    expect($base.toJSON()).toMatchSnapshot();
  });
});
