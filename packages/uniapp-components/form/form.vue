<template>
  <view>
    <form
      :class="
        classPrefix +
          ' ' + classPrefix + '--' + labelAlign +
          ' ' + classPrefix + '--' + (disabled ? 'disabled' : '') +
          ' ' + classPrefix + '--' + (readonly ? 'readonly' : '') +
          ' ' + tClass
      "
      :style="customStyle"
    >
      <slot />
    </form>
  </view>
</template>
<script>

import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { ParentMixin, RELATION_MAP } from '../common/relation';
import { coalesce } from '../common/utils';

const name = `${prefix}-form`;

const needValidate = (name, fields) => {
  if (!fields || !Array.isArray(fields)) return true;
  return fields.indexOf(`${name}`) !== -1;
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [ParentMixin(RELATION_MAP.FormItem)],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      children: [],
      formData: {},
      initialData: {},
      fields: [],
    };
  },
  created() {
    this.initFormData();
  },

  methods: {
    // 初始化表单数据
    initFormData() {
      const { data } = this;
      // 确保 data 不为 undefined 或 null
      const safeData = data || {};
      const formData = { ...safeData };
      const initialData = { ...safeData };
      const fields = Object.keys(safeData);

      this.formData = formData;
      this.initialData = initialData;
      this.fields = fields;
    },

    // 注册子组件
    registerChild(child) {
      const { children } = this;
      if (!children.find(item => item.name === child.name)) {
        children.push(child);
        this.children = children;
      }
    },

    // 注销子组件
    unregisterChild(childName) {
      const { children } = this;
      const index = children.findIndex(item => item.name === childName);
      if (index > -1) {
        children.splice(index, 1);
        this.children = children;
      }
    },

    // 更新表单数据
    updateFormData(name, value) {
      const { formData } = this;
      formData[name] = value;
      this.formData = formData;
    },

    // 验证表单
    async validate(params = {}) {
      const { fields, trigger = 'all' } = params;
      const showErrorMessage = coalesce(params.showErrorMessage, this.showErrorMessage);

      const { children } = this;
      const { data } = this;
      const validatePromises = children
        .filter(child => needValidate(`${child.name}`, fields))
        .map(child => child.validate(data, trigger, showErrorMessage));

      try {
        const results = await Promise.all(validatePromises);
        const validateResult = this.formatValidateResult(results);

        this.$emit('validate', {
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
      const { children } = this;

      const validatePromises = children
        .filter((child) => {
          if (fields && fields.length > 0) {
            return fields.includes(child.name);
          }
          return true;
        })
        .map(child => child.validateOnly(trigger));

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
    async submit(options) {
      try {
        const validateResult = await this.validate({
          showErrorMessage: coalesce(options?.showErrorMessage, this.showErrorMessage),
        });
        const firstError = this.getFirstError(validateResult);
        this.$emit('submit', {
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
        // this.$emit('getFormData', {
        //   validateResult,
        //   firstError,
        // });

        return { validateResult, firstError };
      } catch (error) {
        return false;
      }
    },
    // 重置表单
    reset(params = {}) {
      const { fields } = params;
      const resetType = coalesce(params.resetType, this.resetType);
      const { children, initialData, formData } = this;

      children
        .filter(child => needValidate(`${child.name}`, fields))
        .forEach((child) => {
          if (resetType === 'empty') {
            this.updateFormData(child.name, this.getEmptyValue(child.name));
          } else if (resetType === 'initial') {
            this.updateFormData(child.name, initialData[child.name]);
          }
          child.resetField();
        });

      this.$emit('reset', {
        formData,
      });
    },

    // 清空验证结果
    clearValidate(fields) {
      const { children } = this;

      children.forEach((child) => {
        if (!fields || fields.includes(child.name)) {
          child.clearValidate();
        }
      });
    },

    // 设置验证信息
    setValidateMessage(validateMessage) {
      const { children } = this;

      children.forEach((child) => {
        if (validateMessage[child.name]) {
          child.setValidateMessage(validateMessage[child.name]);
        }
      });
    },

    // 获取空值
    getEmptyValue(name) {
      const { formData } = this;
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
  },
});

</script>
<style scoped>
@import './form.css';
</style>
