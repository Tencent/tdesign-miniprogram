import simulate from 'miniprogram-simulate';
import path from 'path';
import EXAMPLE from './contant';

describe('indexes', () => {
  const indexes = simulate.load(path.resolve(__dirname, `../indexes`), 't-indexes', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  const id = simulate.load({
    template: `<t-indexes class="indexes" height={{height}} list={{list}}></t-indexes>`,
    data: {
      list: EXAMPLE,
      height: 600,
    },
    usingComponents: {
      't-indexes': indexes,
    },
  });

  it(':props', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    expect(comp.querySelector('.indexes').data.height).toBe(600);
  });

  it(':list', () => {
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    expect(comp.querySelector('.indexes').data.list).toStrictEqual(EXAMPLE);
    const $index = comp.querySelector('.indexes');
    const $scrollGroup = $index.querySelector('.t-indexes__group');
    // title不存在时，默认使用index
    expect($scrollGroup.data.title).toBe('A');
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
    const $bar = comp.querySelectorAll('.indexes >>> .t-indexes__bar')[0];
    const touch = async () => {
      $bar.dispatchEvent('touchstart', {
        touches: [{ x: 0, y: 100 }],
      });
      $bar.dispatchEvent('touchmove', {
        touches: [{ x: 0, y: 200 }],
      });
      $bar.dispatchEvent('touchend', {
        changedTouches: [{ x: 0, y: 200 }],
      });
    };
    touch();
    expect(comp).toMatchSnapshot();
    await simulate.sleep();
    expect($index.data.showScrollTip).toBeTruthy;
    expect($index.data.activeGroup.index).toBe('G');
    const $cell = $index.querySelector('#cell_6_0');
    $cell.dispatchEvent('tap', {
      changedTouches: [
        {
          pageY: 200,
        },
      ],
    });
    expect($index.data.currentGroup.title).toBe('G开头');
  });
});
