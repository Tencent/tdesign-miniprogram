import simulate from 'miniprogram-simulate';
import path from 'path';
import { getBackgroundColor } from '../utils';

describe('progress', () => {
  const progress = simulate.load(path.resolve(__dirname, `../progress`), {
    less: true,
  });

  it(`progress :`, async () => {
    const id = simulate.load({
      template: `

      <t-progress percentage="{{percentage}}" color="{{color}}"></t-progress>
      `,
      data: {
        percentage: 88,
        color: '#0052D9',
      },
      methods: {},
      usingComponents: {
        't-progress': progress,
      },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    // await simulate.sleep(10);
    // const $btn = comp.querySelector('.btn >>> .t-button');
    // $btn.dispatchEvent('click');

    // await simulate.sleep(10);
    // comp.setData({ color: ['#f00', '#0ff', '#f0f'] });
  });
});

describe('function getBackgroundColor', () => {
  // 输入 ['#f00', '#0ff', '#f0f']，预期值为 linear-gradient( 90deg,#f00,#0ff,#f0f )
  // 输入 { from: '#000', to: '#000' }，预期值为 linear-gradient(to right, #000, #000)
  it('getBackgroundColor() to equal string', () => {
    expect(getBackgroundColor(['#f00', '#0ff', '#f0f'])).toBe('linear-gradient( 90deg,#f00,#0ff,#f0f )');
    expect(getBackgroundColor({ from: '#000', to: '#000' })).toBe('linear-gradient(to right, #000, #000)');
    expect(getBackgroundColor({ '0%': '#f00', '100%': '#0ff' })).toBe('linear-gradient(to right, #f00 0%,#0ff 100%)');
  });
});
