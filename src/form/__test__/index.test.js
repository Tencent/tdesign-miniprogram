import path from 'path';
import simulate from 'miniprogram-simulate';

describe('form', () => {
  const form = load(path.resolve(__dirname, '../form'));

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-form class="form" style="{{style}}" customStyle="{{customStyle}}"></t-form>`,
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $form = comp.querySelector('.form >>> .t-form');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect($form.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        const style = $form.dom.getAttribute('style');
        expect(style && style.includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(': data', async () => {
      const testData = {
        name: 'test',
        age: 18,
        email: 'test@example.com',
      };
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}"></t-form>`,
        data: {
          data: testData,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.formData).toEqual(testData);
      expect(component.instance.data.initialData).toEqual(testData);
      expect(component.instance.data.fields).toEqual(['name', 'age', 'email']);
    });

    it(': labelAlign', async () => {
      const id = simulate.load({
        template: `<t-form class="form" labelAlign="{{labelAlign}}"></t-form>`,
        data: {
          labelAlign: 'right',
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.labelAlign).toBe('right');
    });

    it(': colon', async () => {
      const id = simulate.load({
        template: `<t-form class="form" colon="{{colon}}"></t-form>`,
        data: {
          colon: true,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.colon).toBe(true);
    });

    it(': requiredMark', async () => {
      const id = simulate.load({
        template: `<t-form class="form" requiredMark="{{requiredMark}}"></t-form>`,
        data: {
          requiredMark: false,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.requiredMark).toBe(false);
    });

    it(': disabled', async () => {
      const id = simulate.load({
        template: `<t-form class="form" disabled="{{disabled}}"></t-form>`,
        data: {
          disabled: true,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.disabled).toBe(true);
    });

    it(': rules', async () => {
      const testRules = {
        name: [
          { required: true, message: '请输入姓名' },
          { min: 2, message: '姓名至少2个字符' },
        ],
        email: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱格式' },
        ],
      };
      const id = simulate.load({
        template: `<t-form class="form" rules="{{rules}}"></t-form>`,
        data: {
          rules: testRules,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.rules).toEqual(testRules);
    });

    it(': showErrorMessage', async () => {
      const id = simulate.load({
        template: `<t-form class="form" showErrorMessage="{{showErrorMessage}}"></t-form>`,
        data: {
          showErrorMessage: false,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');
      expect(component.instance.data.showErrorMessage).toBe(false);
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

  describe('methods', () => {
    it(': registerChild && unregisterChild', async () => {
      const id = simulate.load({
        template: `<t-form class="form"></t-form>`,
        data: {},
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟子组件
      const mockChild = {
        data: { name: 'testField' },
      };

      // 测试注册子组件
      component.instance.registerChild(mockChild);
      expect(component.instance.data.children).toHaveLength(1);
      expect(component.instance.data.children[0]).toStrictEqual(mockChild);

      // 测试重复注册不会重复添加
      component.instance.registerChild(mockChild);
      expect(component.instance.data.children).toHaveLength(1);

      // 测试注销子组件
      component.instance.unregisterChild('testField');
      expect(component.instance.data.children).toHaveLength(0);
    });

    it(': updateFormData', async () => {
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}"></t-form>`,
        data: {
          data: { name: 'initial' },
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 更新表单数据
      component.instance.updateFormData('name', 'updated');
      expect(component.instance.data.formData.name).toBe('updated');

      // 添加新字段
      component.instance.updateFormData('age', 25);
      expect(component.instance.data.formData.age).toBe(25);
    });

    it(': validate', async () => {
      const handleValidate = jest.fn();
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}" rules="{{rules}}" bind:validate="handleValidate"></t-form>`,
        data: {
          data: { name: '' },
          rules: {
            name: [{ required: true, message: '请输入姓名' }],
          },
        },
        methods: {
          handleValidate,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟子组件
      const mockChild = {
        data: { name: 'name' },
        validate: jest.fn().mockResolvedValue({ name: [{ message: '请输入姓名' }] }),
      };
      component.instance.data.children = [mockChild];

      // 执行验证
      const result = await component.instance.validate();
      expect(result).toEqual({ name: [{ message: '请输入姓名' }] });
      expect(handleValidate).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { validateResult: { name: [{ message: '请输入姓名' }] } },
        }),
      );
    });

    it(': validateOnly', async () => {
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}" rules="{{rules}}"></t-form>`,
        data: {
          data: { name: '' },
          rules: {
            name: [{ required: true, message: '请输入姓名' }],
          },
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟子组件
      const mockChild = {
        data: { name: 'name' },
        validateOnly: jest.fn().mockResolvedValue({ name: [{ message: '请输入姓名' }] }),
      };
      component.instance.data.children = [mockChild];

      // 执行纯净验证
      const result = await component.instance.validateOnly({ fields: ['name'] });
      expect(result).toEqual({ name: [{ message: '请输入姓名' }] });
    });

    it(': submit', async () => {
      const handleSubmit = jest.fn();
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}" rules="{{rules}}" bind:submit="handleSubmit"></t-form>`,
        data: {
          data: { name: '' },
          rules: {
            name: [{ required: true, message: '请输入姓名' }],
          },
        },
        methods: {
          handleSubmit,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟验证方法
      component.instance.validate = jest.fn().mockResolvedValue({ name: [{ message: '请输入姓名' }] });

      // 执行提交
      const result = await component.instance.submit();
      expect(result).toEqual({ name: [{ message: '请输入姓名' }] });
      expect(handleSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: {
            validateResult: { name: [{ message: '请输入姓名' }] },
            firstError: '请输入姓名',
          },
        }),
      );
    });

    it(': reset', async () => {
      const handleReset = jest.fn();
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}" resetType="{{resetType}}" bind:reset="handleReset"></t-form>`,
        data: {
          data: { name: 'initial' },
          resetType: 'empty',
        },
        methods: {
          handleReset,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟子组件
      const mockChild = {
        data: { name: 'name' },
        resetField: jest.fn(),
      };
      component.instance.data.children = [mockChild];
      component.instance.data.fields = ['name'];

      // 执行重置
      component.instance.reset();
      expect(mockChild.resetField).toHaveBeenCalled();
      expect(handleReset).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: { formData: { name: '' } },
        }),
      );
    });

    it(': clearValidate', async () => {
      const id = simulate.load({
        template: `<t-form class="form"></t-form>`,
        data: {},
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟子组件
      const mockChild = {
        data: { name: 'name' },
        clearValidate: jest.fn(),
      };
      component.instance.data.children = [mockChild];

      // 执行清空验证
      component.instance.clearValidate(['name']);
      expect(mockChild.clearValidate).toHaveBeenCalled();
    });

    it(': setValidateMessage', async () => {
      const id = simulate.load({
        template: `<t-form class="form"></t-form>`,
        data: {},
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟子组件
      const mockChild = {
        data: { name: 'name' },
        setValidateMessage: jest.fn(),
      };
      component.instance.data.children = [mockChild];

      // 执行设置验证信息
      const validateMessage = {
        name: [{ message: '自定义错误信息' }],
      };
      component.instance.setValidateMessage(validateMessage);
      expect(mockChild.setValidateMessage).toHaveBeenCalledWith(validateMessage.name);
    });

    it(': getEmptyValue', async () => {
      const id = simulate.load({
        template: `<t-form class="form" data="{{data}}"></t-form>`,
        data: {
          data: {
            string: 'test',
            number: 123,
            boolean: true,
            array: [1, 2, 3],
            object: { key: 'value' },
          },
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 测试不同类型字段的空值
      expect(component.instance.getEmptyValue('string')).toBe('');
      expect(component.instance.getEmptyValue('number')).toBe(0);
      expect(component.instance.getEmptyValue('boolean')).toBe('');
      expect(component.instance.getEmptyValue('array')).toEqual([]);
      expect(component.instance.getEmptyValue('object')).toEqual({});
      expect(component.instance.getEmptyValue('unknown')).toBe('');
    });
  });

  describe('events', () => {
    it(': onSubmit', async () => {
      const handleSubmit = jest.fn();
      const id = simulate.load({
        template: `<t-form class="form" bind:submit="handleSubmit"></t-form>`,
        data: {},
        methods: {
          handleSubmit,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟提交方法
      component.instance.submit = jest.fn();

      // 模拟提交事件
      component.instance.onSubmit({});
      expect(component.instance.submit).toHaveBeenCalled();
    });

    it(': onReset', async () => {
      const handleReset = jest.fn();
      const id = simulate.load({
        template: `<t-form class="form" bind:reset="handleReset"></t-form>`,
        data: {},
        methods: {
          handleReset,
        },
        usingComponents: {
          't-form': form,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const component = comp.querySelector('.form');

      // 模拟重置方法
      component.instance.reset = jest.fn();

      // 模拟重置事件
      component.instance.onReset({});
      expect(component.instance.reset).toHaveBeenCalled();
    });
  });
});
