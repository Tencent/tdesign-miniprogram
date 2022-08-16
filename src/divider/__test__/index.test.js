import simulate from 'miniprogram-simulate';
import path from 'path';

// 文本位置
const textAlign = ['left', 'center', 'right'];

describe('Divider', () => {
  const divider = simulate.load(path.resolve(__dirname, `../divider`), 't-divider', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  textAlign.forEach((align) => {
    it(`:align ${align} render correctly`, () => {
      const id = simulate.load({
        template: `<t-divider class="divider-align"></t-divider>`,
        data: {
          content: '文字信息',
          align,
        },
        usingComponents: {
          't-divider': divider,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      expect(comp.toJSON()).toMatchSnapshot();
    });
  });

  it(`:content render correctly`, () => {
    const id = simulate.load({
      template: `<t-divider></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.setData({
      content: '文字信息',
    });
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':dashed render correctly', () => {
    const id = simulate.load({
      template: `<t-divider></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.setData({
      content: '文字信息',
      dashed: true,
    });
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':layout horizontal render correctly', () => {
    const id = simulate.load({
      template: `<t-divider></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.setData({
      layout: 'horizontal',
      content: '文字信息',
      dashed: true,
    });
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':layout vertical render correctly', () => {
    const id = simulate.load({
      template: `<t-divider></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.setData({
      layout: 'vertical',
      content: '文字信息',
    });
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });

  it(':line-color render correctly', () => {
    const id = simulate.load({
      template: `<t-divider></t-divider>`,
      usingComponents: {
        't-divider': divider,
      },
    });
    const comp = simulate.render(id);
    comp.setData({
      lineColor: '#eee',
      content: '文字信息',
    });
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
