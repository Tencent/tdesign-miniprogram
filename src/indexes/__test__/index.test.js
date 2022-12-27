import simulate from 'miniprogram-simulate';
import path from 'path';
import * as Util from '../../common/utils';

beforeAll(() => {
  global.getCurrentPages = jest.fn(() => {
    return [
      {
        pageScroller: [jest.fn()],
      },
    ];
  });
});

describe('indexes', () => {
  const id = load(path.resolve(__dirname, `./index`));

  it('event scroll', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $index = comp.querySelector('.indexes');

    // touch
    const $sidebar = $index.querySelector('.t-indexes__sidebar');

    const mock = jest.spyOn(Util, 'getRect');
    let i = 0;
    const top = 286;

    mock.mockImplementation((x, y) => {
      if (y.includes('bar')) {
        return Promise.resolve({
          top,
          height: 64,
        });
      }
      return Promise.resolve({ top: (i += 100), height: 150 });
    });

    $sidebar.dispatchEvent('touchmove', {
      changedTouches: [{ x: 0, y: top + 21 }],
    });

    await simulate.sleep(0);

    expect($index.data.showTips).toBeTruthy();
    expect(comp.data.active).toBe('B');

    $sidebar.dispatchEvent('touchcancel');

    await simulate.sleep(500);

    expect($index.data.showTips).toBeFalsy();

    $sidebar.dispatchEvent('touchmove', {
      changedTouches: [{ x: 0, y: top + 41 }],
    });

    await simulate.sleep(0);

    expect($index.data.showTips).toBeTruthy();
    expect(comp.data.active).toBe('C');
  });
});
