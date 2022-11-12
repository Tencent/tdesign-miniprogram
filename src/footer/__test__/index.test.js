import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Footer', () => {
  const footer = load(path.resolve(__dirname, `../footer`));

  it(':base', () => {
    const id = simulate.load({
      template: `<t-footer></t-footer>`,
      usingComponents: {
        't-footer': footer,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
