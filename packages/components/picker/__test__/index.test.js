import path from 'path';
import simulate from 'miniprogram-simulate';

describe('picker', () => {
  const id = load(path.resolve(__dirname, `./index`));
  const handler = (dom) => {
    const trigger = (action, x, y) =>
      dom.dispatchEvent(`touch${action}`, {
        touches: [{ x, y }],
      });
    return {
      start: (x, y) => trigger('start', x, y),
      move: (x, y) => trigger('move', x, y),
      end: () => trigger('end'),
    };
  };

  it(': style && customStyle', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    comp.setData({ cityVisible: true });
    // const $city = comp.querySelector('#city');
    // expect($city.toJSON()).toMatchSnapshot();
    const $picker = comp.querySelector('#city >>> .t-picker');
    const $pickerItemGroup = comp.querySelector('#city >>> .t-picker-item__group');

    if (VIRTUAL_HOST) {
      expect($picker.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      expect(
        $pickerItemGroup.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
      ).toBeTruthy();
    }
  });

  it(':base', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $city = comp.querySelector('#yearSeasons');
    comp.setData({ yearSeasonsVisible: true });

    expect($city.toJSON()).toMatchSnapshot();
  });

  it(': cancelBtn false', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    comp.setData({ cityVisible: true });
    $picker.instance.setData({ cancelBtn: false });
    await simulate.sleep();

    expect($picker.querySelector('.t-picker__cancel')).toBeUndefined();
    expect($picker.querySelector('.t-picker__confirm')).toBeDefined();
  });

  it(': cancelBtn true', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    comp.setData({ cityVisible: true });
    $picker.instance.setData({ cancelBtn: true });
    await simulate.sleep();

    const $cancel = $picker.querySelector('.t-picker__cancel');
    expect($cancel).toBeDefined();
    expect($cancel.dom.textContent).toBe('取消');
  });

  it(': cancelBtn custom text', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    comp.setData({ cityVisible: true });
    $picker.instance.setData({ cancelBtn: '返回' });
    await simulate.sleep();

    const $cancel = $picker.querySelector('.t-picker__cancel');
    expect($cancel).toBeDefined();
    expect($cancel.dom.textContent).toBe('返回');
  });

  it(': confirmBtn false', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    comp.setData({ cityVisible: true });
    $picker.instance.setData({ confirmBtn: false });
    await simulate.sleep();

    expect($picker.querySelector('.t-picker__cancel')).toBeDefined();
    expect($picker.querySelector('.t-picker__confirm')).toBeUndefined();
  });

  it(': confirmBtn true', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    comp.setData({ cityVisible: true });
    $picker.instance.setData({ confirmBtn: true });
    await simulate.sleep();

    const $confirm = $picker.querySelector('.t-picker__confirm');
    expect($confirm).toBeDefined();
    expect($confirm.dom.textContent).toBe('确认');
  });

  it(': confirmBtn custom text', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    comp.setData({ cityVisible: true });
    $picker.instance.setData({ confirmBtn: '完成' });
    await simulate.sleep();

    const $confirm = $picker.querySelector('.t-picker__confirm');
    expect($confirm).toBeDefined();
    expect($confirm.dom.textContent).toBe('完成');
  });

  it(':change', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $picker = comp.querySelector('#city');
    const $pickItem = comp.querySelector('#cityItem >>> .t-picker-item__group');
    const pickerHandler = handler($pickItem);

    comp.setData({ cityVisible: true });
    pickerHandler.start(0, 0);
    pickerHandler.move(0, -100);
    pickerHandler.end();
    await simulate.sleep(100);

    const $confirm = $picker.querySelector('.t-picker__confirm');

    $confirm.dispatchEvent('tap');
    await simulate.sleep();

    expect(comp.instance.data.cityValue).toStrictEqual(['深圳']);

    pickerHandler.start(0, 0);
    pickerHandler.move(0, 0);
    pickerHandler.end();
    await simulate.sleep(100);

    $picker.instance.setData({ autoClose: false });
    $confirm.dispatchEvent('tap');
    await simulate.sleep();

    expect(comp.instance.data.cityValue).toStrictEqual(['深圳']);
    expect($picker.instance.data.visible).toBeTruthy();
  });
});
