import path from 'path';
import simulate from 'miniprogram-simulate';

describe('guide', () => {
  const guide = load(path.resolve(__dirname, `../guide`));

  jest.resetModules();

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-guide class="guide"></t-guide>`,
        usingComponents: {
          't-guide': guide,
        },
        data: {},
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const comp = simulate.render(id);
    });
  });
});
