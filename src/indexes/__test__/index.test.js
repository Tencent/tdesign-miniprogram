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
    simulate.scroll($scrollView, 50, 3);
    await simulate.sleep();
    expect($scrollView.dom.scrollTop).toEqual(50);
    expect(comp).toMatchSnapshot();

    // touch
    const $bar = comp.querySelectorAll('.indexes >>> .t-indexes__bar')[0];

    const touch = async () => {
      $bar.dispatchEvent('touchstart', {
        touches: [{ x: 0, pageY: 50 }],
      });
      $bar.dispatchEvent('touchmove', {
        touches: [{ x: 0, pageY: 60 }],
      });
      $bar.dispatchEvent('touchend', {
        changedTouches: [{ x: 0, pageY: 60 }],
      });
    };
    touch();
  });
});
