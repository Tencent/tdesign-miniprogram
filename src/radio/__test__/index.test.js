import path from 'path';
import simulate from 'miniprogram-simulate';

describe('radio', () => {
  // test('comp should trigger change events', async () => {
  //   const container = simulate.render(radio);
  //   const comp = container.instance;
  //   comp.triggerEvent = jest.fn();
  //   comp.doChange();
  //   expect(comp.triggerEvent).toHaveBeenCalled();
  // });
  // const id = simulate.load(path.resolve(__dirname, `./index`), { less: true });

  describe('with group', () => {
    it(`radio :base`, async () => {
      const id = simulate.load({
        template: `
        <t-radio-group class="group" value="1">
          <t-radio class="a" value="1"></t-radio>
        </t-radio-group>
        `,
        usingComponents: {
          't-radio': './radio',
          't-radio-group': '../../radio-group/radio-group',
        },
        rootPath: path.resolve(__dirname, '../..'),
        compiler: 'official',
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // const group = comp.querySelector('.group')
      const a = comp.querySelector('.a');

      expect(a.data.checked).toBeTruthy();
      // expect(comp.toJSON()).toMatchSnapshot();
    });
  });
});
