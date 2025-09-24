import path from 'path';
import simulate from 'miniprogram-simulate';

describe('form', () => {
  const form = load(path.resolve(__dirname, `../form`), 't-form');

  describe('props', () => {
    it(': colon && labelWidth', async () => {
      const id = simulate.load({
        template: `<t-form class="form" colon="{{colon}}" labelWidth="{{labelWidth}}"></t-form>`,
        data: {
          colon: true,
          labelWidth: '120px',
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.form');
      expect(component.instance.data.colon).toBe(true);
      expect(component.instance.data.labelWidth).toBe('120px');
    });

    it(': data && rules', async () => {
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}" rules="{{rules}}"></t-form>`,
        data: {
          data: {
            name: 'tdesign',
            age: 18,
          },
          rules: {
            name: [{ required: true, message: '请输入姓名' }],
            age: [{ required: true, message: '请输入年龄' }],
          },
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.form');
      expect(component.instance.data.formData).toEqual({
        name: 'tdesign',
        age: 18,
      });
      expect(component.instance.data.rules).toEqual({
        name: [{ required: true, message: '请输入姓名' }],
        age: [{ required: true, message: '请输入年龄' }],
      });
    });

    it(': showErrorMessage && requiredMark', async () => {
      const id = simulate.load({
        template: `<t-form class="form" showErrorMessage="{{showErrorMessage}}" requiredMark="{{requiredMark}}"></t-form>`,
        data: {
          showErrorMessage: false,
          requiredMark: false,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.form');
      expect(component.instance.data.showErrorMessage).toBe(false);
      expect(component.instance.data.requiredMark).toBe(false);
    });

    it(': resetType', async () => {
      const id = simulate.load({
        template: `<t-form class="form" resetType="{{resetType}}"></t-form>`,
        data: {
          resetType: 'initial',
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const component = comp.querySelector('.form');
      expect(component.instance.data.resetType).toBe('initial');
    });
  });
});
