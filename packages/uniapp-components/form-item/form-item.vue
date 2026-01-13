<template>
  <view
    :class="
      classPrefix +
        ' ' + classPrefix + '--' + dataLabelAlign +
        ' ' + classPrefix + '--bordered' +
        ' ' + classPrefix + '--' + (verifyStatus === 2 ? 'error' : verifyStatus === 1 ? 'success' : '') +
        ' ' + tClass
    "
    :style="tools._style([customStyle])"
  >
    <view
      v-if="label"
      :class="classPrefix + '__label ' + classPrefix + '__label--' + dataLabelAlign + ' ' + tClassLabel"
      :style="'width: ' + dataLabelWidth"
    >
      <text
        v-if="dataRequiredMark && requiredMarkPosition === 'left'"
        :class="classPrefix + '__label--required'"
      >
        *
      </text>
      <slot
        name="label"
      >
        <text>
          {{ label }}
        </text>
      </slot>
      <text
        v-if="dataRequiredMark && requiredMarkPosition === 'right'"
        :class="classPrefix + '__label--required'"
      >
        *
      </text>
      <text
        v-if="colon"
        :class="classPrefix + '__label--colon'"
      >
        :
      </text>
    </view>
    <view
      :class="classPrefix + '__controls ' + tClassControls"
      :style="contentStyle"
    >
      <view :class="classPrefix + '__controls-content ' + classPrefix + '__controls-content--' + dataContentAlign">
        <slot />
        <view
          v-if="arrow"
          :class="classPrefix + '__arrow'"
        >
          <t-icon
            name="chevron-right"
            size="16"
          />
        </view>
      </view>

      <view
        :class="classPrefix + '__help ' + classPrefix + '__help--' + dataContentAlign + tClassHelp"
        :style="errorPosition"
      >
        <slot name="help">
          {{ help }}
        </slot>
      </view>

      <view
        v-if="errorList.length > 0 && dataShowErrorMessage"
        :class="classPrefix + '__error ' + classPrefix + '__error--' + (errorList[0].type || 'error')"
      >
        {{ errorList[0].message }}
      </view>
      <view
        v-if="successList.length > 0"
        :class="classPrefix + '__success'"
      >
        {{ successList[0].message }}
      </view>
    </view>

    <view :class="classPrefix + '__extra ' + tClassExtra">
      <slot name="extra" />
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { validate, ValidateStatus } from './form-model';
import TIcon from '../icon/icon.vue';
import TButton from '../button/button.vue';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';
import tools from '../common/utils.wxs';
import { isNumber } from '../common/validator';

const name = `${prefix}-form-item`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-controls`,
    `${prefix}-class-help`,
    `${prefix}-class-extra`,
  ],
  provide() {
    return {
      [RELATION_MAP.FormKey]: this,
    };
  },
  mixins: [ChildrenMixin(RELATION_MAP.FormItem)],
  components: {
    TIcon,
    TButton,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      errorList: [],
      successList: [],
      verifyStatus: ValidateStatus.TO_BE_VALIDATED,
      needResetField: false,
      resetValidating: false,
      // rules: [],
      form: {},
      colon: false,
      // showErrorMessage: true,

      tools,
      dataRules: this.rules,
      dataLabelAlign: this.labelAlign,
      dataLabelWidth: this.labelWidth,
      dataRequiredMark: this.requiredMark,
      dataShowErrorMessage: this.showErrorMessage,
      dataContentAlign: this.contentAlign,

      errorPosition: '',
    };
  },
  computed: {
    contentStyle() {
      const { labelWidth, labelAlign } = this;
      let contentStyle = {};
      if (labelWidth && labelAlign !== 'top') {
        if (isNumber(labelWidth)) {
          contentStyle = { marginLeft: `${labelWidth}px` };
        } else {
          contentStyle = { marginLeft: labelWidth };
        }
      }

      return tools._style(contentStyle);
    },
  },
  watch: {

  },
  created() {
    // this.initFormItem();
  },
  onBeforeUnmount() {
    if (this.form) {
      this.form.unregisterChild(this.name);
    }
  },
  mounted() {

  },
  methods: {
    innerAfterLinked() {
      const target = this[RELATION_MAP.FormItem];
      target.registerChild(this);
      this.form = target;
      this.initFormItem();

      const { requiredMark, labelAlign, labelWidth, showErrorMessage, contentAlign } = this;
      const isRequired = target.rules[this.name]?.some(rule => rule.required);

      this.dataRules = target.rules[this.name];
      this.colon = target.colon;
      this.dataLabelAlign = labelAlign || target.labelAlign || 'right';
      this.dataLabelWidth = labelWidth || target.labelWidth;
      this.dataContentAlign = contentAlign || target.contentAlign,
      this.dataRequiredMark = (() => {
        if (!isRequired) {
          return false;
        }
        if (typeof requiredMark === 'boolean') {
          return requiredMark;
        }
        return target.requiredMark || false;
      })();
      this.dataShowErrorMessage = typeof showErrorMessage === 'boolean' ? showErrorMessage : target.showErrorMessage;
      this.requiredMarkPosition = target.requiredMarkPosition;

      setTimeout(() => {
        this.errorPosition = this.dataLabelAlign !== 'top' && `text-align: ${this.dataContentAlign}`;
      }, 33);
    },
    innerAfterUnlinked() {
      if (this.form) {
        this.form.unregisterChild(this.name);
      }
    },
    // 处理描述信息链接点击事件
    handlePreviewImage(e) {
      const { url } = e.currentTarget.dataset;
      const urls = url.map(item => item.url) || [];
      if (url) {
        uni.previewImage({
          urls,
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
      const { name } = this;
      if (name && this.form) {
        const { formData } = this.form;
        this.initialValue = formData[name];
      }
    },

    // 获取表单数据
    getFormData() {
      if (this.form) {
        return this.form.formData;
      }
      return {};
    },

    // 获取当前值
    getValue() {
      const { name } = this;
      if (name && this.form) {
        const { formData } = this.form;
        return formData[name];
      }
      return undefined;
    },

    // 获取验证规则
    getRules() {
      const { rules } = this;

      // 优先使用组件自身的规则
      if (rules && rules.length > 0) {
        return rules;
      }

      // 使用表单的规则
      return this.dataRules || [];
    },

    // 验证表单项
    async validate(data, trigger, showErrorMessage) {
      const rules = this.getRules();
      if (rules.length === 0) {
        return { [this.name]: true };
      }

      // 根据触发方式过滤规则
      const filteredRules = trigger === 'all'
        ? rules
        : rules.filter(rule => (rule.trigger || 'change') === trigger);

      if (filteredRules.length === 0) {
        return { [this.name]: true };
      }

      const value = data[this.name];
      const results = await validate(value, filteredRules);

      // 分析验证结果
      const analysis = this.analysisValidateResult(results);

      // 更新状态
      this.updateValidateStatus(analysis, showErrorMessage);

      // 返回验证结果
      const result = {};
      result[this.name] = analysis.errorList.length > 0 ? analysis.errorList : true;
      return result;
    },

    // 纯净验证（不显示错误信息）
    async validateOnly(trigger) {
      return this.validate(this.getFormData(), trigger, false);
    },

    // 分析验证结果
    analysisValidateResult(results) {
      const errorList = results.filter(item => item.result !== true);
      const successList = results.filter(item => item.result === true && item.message && item.type === 'success');

      return {
        errorList,
        successList,
        resultList: results,
      };
    },

    // 更新验证状态
    updateValidateStatus(analysis) {
      const { errorList, successList } = analysis;

      this.errorList = errorList;
      this.successList = successList;
      this.verifyStatus = errorList.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
    },

    // 清空验证结果
    clearValidate() {
      this.errorList = [];
      this.successList = [];
      this.verifyStatus = ValidateStatus.TO_BE_VALIDATED;
    },

    // 重置字段
    resetField() {
      const { name } = this;
      if (name && this.form) {
        const { resetType } = this.form;

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
      this.errorList = validateMessage.filter(item => item.type === 'error');
      this.successList = validateMessage.filter(item => item.type === 'warning');
      this.verifyStatus = validateMessage.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
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
      const { name } = this;
      if (name && this.form) {
        this.form.updateFormData(name, value);

        // 触发change验证
        this.validate(this.getFormData(), 'change', true);
      }
    },

    // 处理失焦事件
    onBlur() {
      // 触发blur验证
      this.validate(this.getFormData(), 'blur', true);
    },
  },
});
</script>
<style scoped>
@import './form-item.css';
</style>
