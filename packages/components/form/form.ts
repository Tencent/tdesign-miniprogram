import props from './props';
import config from '../common/config';
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-form`;
@wxComponent()
export default class Form extends SuperComponent {
  behaviors = ['wx://component-export', useCustomNavbar];

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-controls`,
    `${prefix}-class-help`,
    `${prefix}-class-extra`,
  ];

  properties = props;

  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    '../form-item/form-item': {
      type: 'child',
      // 子组件挂载时主动下发一次表单配置，兼容 Skyline 下 linked 仅触发一次的情况
      linked(target) {
        target.syncFromParent?.();
        this.syncLastChildFlags();
      },
      unlinked() {
        this.syncLastChildFlags();
      },
    },
  };

  data = {
    prefix,
    classPrefix: name,
    initialData: {},
    fields: [],
  };

  observers = {
    // 父组件配置变化时，统一下发到所有 form-item，保证 父 -> 子 的属性同步
    'labelAlign, labelWidth, colon, contentAlign, requiredMark, requiredMarkPosition, showErrorMessage, rules'() {
      this.getChildren().forEach((child: any) => child.syncFromParent?.());
    },
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
      const initialData = { ...safeData };
      const fields = Object.keys(safeData);
      this.setData({
        initialData,
        fields,
      });
    },

    // 获取所有 form-item 子组件
    // 优先使用 relations 注入的 $children（基于 getRelationNodes，兼容 Skyline），兜底使用节点查询
    getChildren() {
      let items = this.$children;
      if (!items?.length) {
        items = this.selectAllComponents(`.${prefix}-form-item`);
      }
      return items || [];
    },

    syncLastChildFlags() {
      const items = this.getChildren();
      items.forEach((child, index) => child.setData?.({ isLastChild: index === items.length - 1 }));
    },

    // 验证表单
    async validate() {
      const children = this.getChildren();
      const { data } = this.properties;
      const validatePromises = children.map((child) => child.validate(data, 'all', this.properties.showErrorMessage));

      try {
        const results = await Promise.all(validatePromises);
        const validateResult = this.formatValidateResult(results);

        if (validateResult !== true) {
          this.scrollToError(validateResult);
        }

        this.triggerEvent('validate', {
          validateResult,
        });

        return validateResult;
      } catch (error) {
        return false;
      }
    },

    // 滚动到第一个校验不通过的字段
    scrollToError(validateResult) {
      const { distanceTop } = this.data;
      const { scrollToFirstError } = this.properties;
      if (!scrollToFirstError) return;

      const firstErrorKey = Object.keys(validateResult)[0];
      if (!firstErrorKey) return;

      const children = this.getChildren();
      const errorChild = children.find((child) => child.properties.name === firstErrorKey);
      if (!errorChild) return;

      errorChild.scrollIntoView(scrollToFirstError, distanceTop);
    },

    // 纯净验证（不显示错误信息）
    async validateOnly(params) {
      const { fields, trigger = 'all' } = params;
      const children = this.getChildren();

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
    // 获取空值
    getEmptyValue(name) {
      const currentValue = this.properties.data[name];

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

    // 重置表单
    reset() {
      const children = this.getChildren();
      const { initialData, fields } = this.data;
      const resetData = {};

      children.forEach((child) => {
        if (fields && fields.includes(child.data.name)) {
          if (this.properties.resetType === 'empty') {
            resetData[child.data.name] = this.getEmptyValue(child.data.name);
          } else if (this.properties.resetType === 'initial') {
            resetData[child.data.name] = initialData[child.data.name];
          }
          child.resetField();
        }
      });

      this.triggerEvent('reset', {
        formData: resetData,
      });
    },

    // 清空验证结果
    clearValidate(fields) {
      const children = this.getChildren();

      children.forEach((child) => {
        if (!fields || fields.includes(child.data.name)) {
          child.clearValidate();
        }
      });
    },

    // 设置验证信息
    setValidateMessage(validateMessage) {
      const children = this.getChildren();

      children.forEach((child) => {
        if (validateMessage[child.data.name]) {
          child.setValidateMessage(validateMessage[child.data.name]);
        }
      });
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
