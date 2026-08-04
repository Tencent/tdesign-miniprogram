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
    colon: false,
    innerShowErrorMessage: true,
    innerContentAlign: '',
    contentStyle: '',
    isLastChild: false,
  };

  observers = {
    contentAlign(val: string) {
      // 自身传了 contentAlign 时，优先使用自身值
      if (val) {
        this.setData({
          innerContentAlign: val,
          contentStyle: `text-align: ${val}`,
        });
      }
    },
  };

  relations: RelationsOptions = {
    '../form/form': {
      type: 'ancestor',
      // 关联建立时主动向父组件同步一次配置
      linked() {
        this.syncFromParent();
      },
    },
  };

  lifetimes = {
    ready() {
      // Skyline/glass-easel 下 relations.linked 可能未触发，ready 时再主动同步一次兜底
      this.syncFromParent();
    },
  };

  methods = {
    // 从父组件 t-form 同步配置（父 -> 子），集中处理「form-item 自身属性优先级高于 Form」的逻辑。
    // 父组件引用统一通过 relations 注入的 $parent（基于 getRelationNodes）获取，兼容 Skyline 下 linked 仅触发一次的问题
    syncFromParent() {
      const parent = this.$parent;
      if (!parent) return;

      const { globalConfig } = this.data;
      const { requiredMark, labelAlign, labelWidth, showErrorMessage, contentAlign, name } = this.properties;
      const parentData = parent.data;

      const formRules = parentData.rules?.[name];
      const isRequired = formRules?.some((rule) => rule.required);
      const innerContentAlign = contentAlign || parentData.contentAlign || '';

      this.setData({
        formRules: formRules || [],
        colon: parentData.colon,
        innerLabelAlign: labelAlign || parentData.labelAlign,
        innerLabelWidth: normalizeLabelWidth(labelWidth || parentData.labelWidth),
        innerContentAlign,
        contentStyle: innerContentAlign ? `text-align: ${innerContentAlign}` : '',
        innerRequiredMark: requiredMark ?? parentData.requiredMark ?? globalConfig.requiredMark ?? isRequired,
        innerShowErrorMessage: typeof showErrorMessage === 'boolean' ? showErrorMessage : parentData.showErrorMessage,
        requiredMarkPosition: parentData.requiredMarkPosition || globalConfig.requiredMarkPosition || 'left',
      });

      // 父组件可能在子组件之后才完成数据准备，这里主动同步初始值，避免 Skyline 下初始值丢失
      this.setInitialValue();
    },

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

    // 设置初始值
    setInitialValue() {
      const { name } = this.properties;
      const parent = this.$parent;
      if (name && parent) {
        const data = parent.properties.data || {};
        this.initialValue = data[name];
      }
    },

    // 获取表单数据
    getFormData() {
      const parent = this.$parent;
      if (parent) {
        return parent.properties.data || {};
      }
      return {};
    },

    // 获取当前值
    getValue() {
      const { name } = this.properties;
      const parent = this.$parent;
      if (name && parent) {
        const data = parent.properties.data || {};
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
      const errorMessage = this.$parent?.properties.errorMessage || globalConfig.errorMessage;
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
