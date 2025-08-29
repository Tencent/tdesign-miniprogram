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
