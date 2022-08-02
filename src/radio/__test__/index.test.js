import path from 'path';
import simulate from 'miniprogram-simulate';

describe('radio', () => {
  const id = simulate.load(path.resolve(__dirname, '../../radio/radio'), 't-radio', {
    less: true,
    rootPath: path.resolve(__dirname, '../../'),
  });

  test('comp should render correctly', async () => {
    const container = simulate.render(id);
    container.attach(document.createElement('parent-wrapper'));
    expect(container.toJSON()).toMatchSnapshot();
  });

  test('comp should trigger change events', async () => {
    const container = simulate.render(id);
    const comp = container.instance;
    comp.triggerEvent = jest.fn();
    comp.doChange();
    expect(comp.triggerEvent).toHaveBeenCalled();
  });
});
