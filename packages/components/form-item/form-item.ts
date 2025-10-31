import props from './props';
import { validate, ValidateStatus } from './form-model';
import config from '../common/config';
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';

const { prefix } = config;
const name = `${prefix}-form-item`;

@wxComponent()
export default class FormItem extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-controls`,
    `${prefix}-class-help`,
    `${prefix}-class-extra`,
  ];

  properties = props as any;

  data = {
    prefix,
    classPrefix: name,
    errorList: [],
    successList: [],
    verifyStatus: ValidateStatus.TO_BE_VALIDATED,
    needResetField: false,
    resetValidating: false,
    rules: [],
    form: {},
    colon: false,
    showErrorMessage: true,
  };

  relations: RelationsOptions = {
    '../form/form': {
      type: 'parent',
      linked(target) {
        target.registerChild(this);
        this.form = target;
        const { requiredMark, labelAlign, labelWidth, showErrorMessage } = this.properties;
        const isRequired = target.data.rules[this.properties.name]?.some((rule) => rule.required);
        this.setData(
          {
            rules: target.data.rules[this.properties.name],
            colon: target.data.colon,
            labelAlign: labelAlign || target.data.labelAlign || 'right',
            labelWidth: labelWidth || target.data.labelWidth,
            requiredMark: (() => {
              if (!isRequired) {
                return false;
              }
              if (typeof requiredMark === 'boolean') {
                return requiredMark;
              }
              return target.data.requiredMark || false;
            })(),
            showErrorMessage: typeof showErrorMessage === 'boolean' ? showErrorMessage : target.data.showErrorMessage,
            requiredMarkPosition: target.data.requiredMarkPosition,
          },
          () => {
            this.setData({
              errorPosition: this.data.labelAlign !== 'top' && 'text-align: right;',
            });
          },
        );
      },
      unlinked() {
        if (this.form) {
          this.form.unregisterChild(this.properties.name);
        }
      },
    },
  };

  lifetimes = {
    ready() {
      this.initFormItem();
    },
    detached() {
      if (this.form) {
        this.form.unregisterChild(this.properties.name);
      }
    },
  };

  methods = {
    // 处理描述信息链接点击事件
    handlePreviewImage(e) {
      const { url } = e.currentTarget.dataset;
      const urls = url.map((item) => item.url) || [];
      if (url) {
        wx.previewImage({
          urls: urls,
          current: urls[0],
        });
      }
    },
    // 初始化表单项
    initFormItem() {
      this.setInitialValue();
    },

    // 设置初始值
    setInitialValue() {
      const { name } = this.properties;
      if (name && this.form) {
        const { formData } = this.form.data;
        this.initialValue = formData[name];
      }
    },

    // 获取表单数据
    getFormData() {
      if (this.form) {
        return this.form.data.formData;
      }
      return {};
    },

    // 获取当前值
    getValue() {
      const { name } = this.properties;
      if (name && this.form) {
        const { formData } = this.form.data;
        return formData[name];
      }
      return undefined;
    },

    // 获取验证规则
    getRules() {
      const { rules } = this.properties;

      // 优先使用组件自身的规则
      if (rules && rules.length > 0) {
        return rules;
      }

      // 使用表单的规则
      return this.data.rules || [];
    },

    // 验证表单项
    async validate(data, trigger, showErrorMessage) {
      const rules = this.getRules();
      if (rules.length === 0) {
        return { [this.properties.name]: true };
      }

      // 根据触发方式过滤规则
      const filteredRules = trigger === 'all' ? rules : rules.filter((rule) => (rule.trigger || 'change') === trigger);

      if (filteredRules.length === 0) {
        return { [this.properties.name]: true };
      }

      const value = data[this.properties.name];
      const results = await validate(value, filteredRules);

      // 分析验证结果
      const analysis = this.analysisValidateResult(results);

      // 更新状态
      this.updateValidateStatus(analysis, showErrorMessage);

      // 返回验证结果
      const result = {};
      result[this.properties.name] = analysis.errorList.length > 0 ? analysis.errorList : true;
      return result;
    },

    // 纯净验证（不显示错误信息）
    async validateOnly(trigger) {
      return this.validate(trigger, false);
    },

    // 分析验证结果
    analysisValidateResult(results) {
      const errorList = results.filter((item) => item.result !== true);
      const successList = results.filter((item) => item.result === true && item.message && item.type === 'success');

      return {
        errorList,
        successList,
        resultList: results,
      };
    },

    // 更新验证状态
    updateValidateStatus(analysis) {
      const { errorList, successList } = analysis;

      this.setData({
        errorList,
        successList,
        verifyStatus: errorList.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS,
      });
    },

    // 清空验证结果
    clearValidate() {
      this.setData({
        errorList: [],
        successList: [],
        verifyStatus: ValidateStatus.TO_BE_VALIDATED,
      });
    },

    // 重置字段
    resetField() {
      const { name } = this.properties;
      if (name && this.form) {
        const { resetType } = this.form.properties;

        if (resetType === 'initial') {
          this.form.updateFormData(name, this.initialValue);
        } else {
          this.form.updateFormData(name, this.getEmptyValue());
        }
      }

      this.clearValidate();
    },

    // 设置验证信息
    setValidateMessage(validateMessage) {
      this.setData({
        errorList: validateMessage.filter((item) => item.type === 'error'),
        successList: validateMessage.filter((item) => item.type === 'warning'),
        verifyStatus: validateMessage.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS,
      });
    },

    // 获取空值
    getEmptyValue() {
      const value = this.getValue();

      if (Array.isArray(value)) {
        return [];
      }
      if (typeof value === 'object' && value !== null) {
        return {};
      }
      if (typeof value === 'number') {
        return 0;
      }
      return '';
    },

    // 处理值变化
    onValueChange(value) {
      const { name } = this.properties;
      if (name && this.form) {
        this.form.updateFormData(name, value);

        // 触发change验证
        this.validate('change');
      }
    },

    // 处理失焦事件
    onBlur() {
      // 触发blur验证
      this.validate('blur');
    },
  };
}
