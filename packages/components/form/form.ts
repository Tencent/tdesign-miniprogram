import props from './props';
import config from '../common/config';
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';

const { prefix } = config;
const name = `${prefix}-form`;
@wxComponent()
export default class Form extends SuperComponent {
  behaviors = ['wx://component-export'];

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-controls`,
    `${prefix}-class-help`,
    `${prefix}-class-extra`,
  ];

  properties = props as any;

  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    '../form-item/form-item': {
      type: 'child',
      linked() {},
    },
  };

  data = {
    prefix,
    classPrefix: name,
    children: [],
    formData: {},
    initialData: {},
    rules: {},
    fields: [],
    showErrorMessage: true,
  };

  lifetimes = {
    ready() {
      this.initFormData();
    },
  };

  methods = {
    // 初始化表单数据
    initFormData() {
      const { data } = this.properties;
      // 确保 data 不为 undefined 或 null
      const safeData = data || {};
      const formData = { ...safeData };
      const initialData = { ...safeData };
      const fields = Object.keys(safeData);
      this.setData({
        formData,
        initialData,
        fields,
        showErrorMessage: this.properties.showErrorMessage,
      });
    },

    // 注册子组件
    registerChild(child) {
      const { children } = this.data;
      if (!children.find((item) => item.data.name === child.data.name)) {
        children.push(child);
        this.setData({ children });
      }
    },

    // 注销子组件
    unregisterChild(childName) {
      const { children } = this.data;
      const index = children.findIndex((item) => item.data.name === childName);
      if (index > -1) {
        children.splice(index, 1);
        this.setData({ children });
      }
    },

    // 更新表单数据
    updateFormData(name, value) {
      const { formData } = this.data;
      formData[name] = value;
      this.setData({ formData });
    },

    // 验证表单
    async validate() {
      const { children } = this.data;
      const { data } = this.properties;
      const validatePromises = children.map((child) => child.validate(data, 'all', this.properties.showErrorMessage));

      try {
        const results = await Promise.all(validatePromises);
        const validateResult = this.formatValidateResult(results);

        this.triggerEvent('validate', {
          validateResult,
        });

        return validateResult;
      } catch (error) {
        return false;
      }
    },

    // 纯净验证（不显示错误信息）
    async validateOnly(params) {
      const { fields, trigger = 'all' } = params;
      const { children } = this.data;

      const validatePromises = children
        .filter((child) => {
          if (fields && fields.length > 0) {
            return fields.includes(child.data.name);
          }
          return true;
        })
        .map((child) => child.validateOnly(trigger));

      try {
        const results = await Promise.all(validatePromises);
        return this.formatValidateResult(results);
      } catch (error) {
        return false;
      }
    },

    // 格式化验证结果
    formatValidateResult(validateResultList) {
      const result = {};
      let hasError = false;

      validateResultList.forEach((item) => {
        if (item && typeof item === 'object') {
          Object.keys(item).forEach((key) => {
            if (item[key] !== true) {
              result[key] = item[key];
              hasError = true;
            }
          });
        }
      });

      return hasError ? result : true;
    },

    // 获取第一个错误信息
    getFirstError(validateResult) {
      if (validateResult === true) return '';
      const firstKey = Object.keys(validateResult)[0];
      if (!firstKey) return '';

      const errorList = validateResult[firstKey];
      if (Array.isArray(errorList) && errorList.length > 0) {
        return errorList[0].message || '';
      }

      return '';
    },

    // 提交表单
    async submit() {
      try {
        const validateResult = await this.validate();
        const firstError = this.getFirstError(validateResult);
        this.triggerEvent('submit', {
          validateResult,
          firstError,
        });

        return validateResult;
      } catch (error) {
        return false;
      }
    },
    // 获取表单提交信息
    async getValidate() {
      try {
        const validateResult = await this.validate();
        const firstError = this.getFirstError(validateResult);
        // this.triggerEvent('getFormData', {
        //   validateResult,
        //   firstError,
        // });

        return { validateResult, firstError };
      } catch (error) {
        return false;
      }
    },
    // 重置表单
    reset() {
      const { children, initialData, formData, fields } = this.data;

      children.forEach((child) => {
        if (fields && fields.includes(child.data.name)) {
          if (this.properties.resetType === 'empty') {
            this.updateFormData(child.data.name, this.getEmptyValue(child.data.name));
          } else if (this.properties.resetType === 'initial') {
            this.updateFormData(child.data.name, initialData[child.data.name]);
          }
          child.resetField();
        }
      });

      this.triggerEvent('reset', {
        formData,
      });
    },

    // 清空验证结果
    clearValidate(fields) {
      const { children } = this.data;

      children.forEach((child) => {
        if (!fields || fields.includes(child.data.name)) {
          child.clearValidate();
        }
      });
    },

    // 设置验证信息
    setValidateMessage(validateMessage) {
      const { children } = this.data;

      children.forEach((child) => {
        if (validateMessage[child.data.name]) {
          child.setValidateMessage(validateMessage[child.data.name]);
        }
      });
    },

    // 获取空值
    getEmptyValue(name) {
      const { formData } = this.data;
      const currentValue = formData[name];

      if (Array.isArray(currentValue)) {
        return [];
      }
      if (typeof currentValue === 'object' && currentValue !== null) {
        return {};
      }
      if (typeof currentValue === 'number') {
        return 0;
      }
      return '';
    },

    // 表单提交事件处理
    onSubmit() {
      this.submit();
    },

    // 表单重置事件处理
    onReset() {
      this.reset();
    },
  };
}
