import simulate from 'miniprogram-simulate';
import path from 'path';

describe('indexes', () => {
  const id = load(path.resolve(__dirname, `./index`));

  it(':props', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    expect(comp.querySelector('.indexes').data.height).toBe(600);
  });

  it('event scroll', async () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $index = comp.querySelector('.indexes');
    const $scrollView = $index.querySelector('.t-indexes__content');

    // scroll
    simulate.scroll($scrollView, 100, 1);
    await simulate.sleep();
    // touch
    const $sidebar = $index.querySelector('.t-indexes__sidebar');

    $sidebar.dispatchEvent('touchmove', {
      changedTouches: [{ x: 0, y: 40 }],
    });

    await simulate.sleep();
    expect($index.data.showTips).toBeTruthy();
    expect($index.data.activeAnchor).toBe('Z');
  });
});
