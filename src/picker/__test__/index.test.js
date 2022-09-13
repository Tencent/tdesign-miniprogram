import simulate from 'miniprogram-simulate';
import path from 'path';

describe('picker', () => {
  const id = simulate.load(path.resolve(__dirname, `./index`), {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });
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

  it(':base', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    const $city = comp.querySelector('#city');
    comp.setData({ cityVisible: true });

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
