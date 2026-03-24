import props from './props';
import { validateRules, ValidateStatus } from './form-model';
import config from '../common/config';
import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import usingConfig from '../mixins/using-config';
import { isNumeric } from '../common/validator';

const { prefix } = config;
const parentComponentName = 'form';
const componentName = `form-item`;

/** 规范化 labelWidth，确保输出带有 CSS 单位 */
function normalizeLabelWidth(value: string | number | undefined): string {
  if (!value) return '';
  if (isNumeric(value)) return `${value}px`;
  return String(value);
}

@wxComponent()
export default class FormItem extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-controls`,
    `${prefix}-class-help`,
    `${prefix}-class-extra`,
  ];

  behaviors = [usingConfig({ componentName: parentComponentName })];

  properties = props;

  data = {
    prefix,
    classPrefix: `${prefix}-${componentName}`,
    formClass: `${prefix}-form`,
    formItemClass: `${prefix}-form__item`,
    labelClass: `${prefix}-form__label`,
    errorClasses: '',
    errorList: [],
    successList: [],
    verifyStatus: ValidateStatus.TO_BE_VALIDATED,
    needResetField: false,
    resetValidating: false,
    formRules: [],
    innerLabelAlign: '',
    innerLabelWidth: '',
    form: {},
    colon: false,
    innerShowErrorMessage: true,
  };

  relations: RelationsOptions = {
    '../form/form': {
      type: 'parent',
      linked(target) {
        target.registerChild(this);
        this.form = target;
        const { globalConfig } = this.data;
        const { requiredMark, labelAlign, labelWidth, showErrorMessage } = this.properties;
        const formRules = target.data.rules?.[this.properties.name];
        const isRequired = formRules?.some((rule) => rule.required);

        this.setData({
          formRules,
          colon: target.data.colon,
          innerLabelAlign: labelAlign || target.data.labelAlign,
          innerLabelWidth: normalizeLabelWidth(labelWidth || target.data.labelWidth),
          innerRequiredMark: requiredMark || target.data.requiredMark || globalConfig.requiredMark || isRequired,
          innerShowErrorMessage:
            typeof showErrorMessage === 'boolean' ? showErrorMessage : target.properties.showErrorMessage,
          requiredMarkPosition: target.data.requiredMarkPosition || globalConfig.requiredMarkPosition,
        });
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
    /* istanbul ignore next */
    detached() {
      if (this.form) {
        this.form.unregisterChild(this.properties.name);
      }
    },
  };

  methods = {
    calcErrorClasses(errorList = this.data.errorList) {
      if (!this.data.innerShowErrorMessage) return '';
      if (!errorList || errorList.length === 0) return '';
      const type = errorList[0].type || 'error';
      return type === 'error' ? `${this.data.formItemClass}--error` : `${this.data.formItemClass}--warning`;
    },

    // 滚动到当前 form-item
    scrollIntoView(type: string, distanceTop = 0) {
      this.createSelectorQuery()
        .select(`.${this.data.classPrefix}`)
        .boundingClientRect()
        .selectViewport()
        .scrollOffset()
        .exec((res) => {
          if (!res[0] || !res[1]) return;
          wx.pageScrollTo({
            scrollTop: res[0].top + res[1].scrollTop - distanceTop,
            duration: type === 'smooth' ? 300 : 0,
          });
        });
    },

    // 初始化表单项
    initFormItem() {
      this.setInitialValue();
    },

    // 设置初始值
    setInitialValue() {
      const { name } = this.properties;
      if (name && this.form) {
        const data = this.form.properties.data || {};
        this.initialValue = data[name];
      }
    },

    // 获取表单数据
    getFormData() {
      if (this.form) {
        return this.form.properties.data || {};
      }
      return {};
    },

    // 获取当前值
    getValue() {
      const { name } = this.properties;
      if (name && this.form) {
        const data = this.form.properties.data || {};
        return data[name];
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
      return this.data.formRules || [];
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
      const context = { formData: data, name: this.properties.name };
      const results = await validateRules(value, filteredRules, context);

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
      return this.validate(this.getFormData(), trigger, false);
    },

    // 分析验证结果
    analysisValidateResult(results) {
      const { globalConfig } = this.data;
      const errorMessage = (this.form && this.form.properties.errorMessage) || globalConfig.errorMessage;
      const labelName = this.properties.label || this.properties.name;

      const errorList = results
        .filter((item) => item.result !== true)
        .map((item) => {
          if (item.message) return item;

          Object.keys(item).forEach((key) => {
            if (!item.message && errorMessage[key]) {
              const template = errorMessage[key];
              item.message = template
                .replace(/\$\{name\}/g, labelName || '')
                .replace(/\$\{validate\}/g, String(item[key] === true ? '' : item[key]));
            }
          });
          return item;
        });

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
        errorClasses: this.calcErrorClasses(errorList),
        errorList,
        successList,
        verifyStatus: errorList.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS,
      });
    },

    // 清空验证结果
    clearValidate() {
      this.setData({
        errorClasses: '',
        errorList: [],
        successList: [],
        verifyStatus: ValidateStatus.TO_BE_VALIDATED,
      });
    },

    // 重置字段
    resetField() {
      this.clearValidate();
    },

    // 设置验证信息
    setValidateMessage(validateMessage) {
      const errorList = validateMessage.filter((item) => item.type !== 'success');
      const successList = validateMessage.filter((item) => item.type === 'success');

      let verifyStatus = ValidateStatus.SUCCESS;
      if (validateMessage.length > 0) {
        verifyStatus = errorList.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
      }

      this.setData({
        errorClasses: this.calcErrorClasses(errorList),
        errorList,
        successList,
        verifyStatus,
      });
    },
  };
}
