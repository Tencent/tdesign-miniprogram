import simulate from 'miniprogram-simulate';
import path from 'path';

describe('search', () => {
  const search = simulate.load(path.resolve(__dirname, `../search`), 't-search', {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':base', () => {
    const id = simulate.load({
      template: `<t-search></t-search>`,
      usingComponents: {
        't-search': search,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
