import path from 'path';
import simulate from 'miniprogram-simulate';

describe('radio', () => {
  let id;
  beforeAll(() => {
    id = simulate.load(path.resolve(__dirname, '../radio'), { less: true });
  });
  test('comp should render correctly', async () => {
    const container = simulate.render(id);
    container.attach(document.createElement('parent-wrapper'));
    expect(container.toJSON()).toMatchSnapshot();
  });
  test('comp should trigger change events', async () => {
    const container = simulate.render(id);
    const that = container.instance;
    that.triggerEvent = jest.fn();
    that.onChange();
    expect(that.triggerEvent).toHaveBeenCalled();
  });
});
