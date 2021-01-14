import simulate from 'miniprogram-simulate';
import getDemoPath from '../../../test/utils/getDemoPath';
describe('radio basic demo', () => {
  let id;
  beforeAll(() => {
    id = simulate.load(getDemoPath('radio', 'basic'), {
      less: true,
    });
  });
  test('demo should render correctly', async () => {
    const container = simulate.render(id);
    container.attach(document.createElement('parent-wrapper'));
    expect(container.toJSON()).toMatchSnapshot();
  });
});
