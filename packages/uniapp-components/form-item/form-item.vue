<template>
  <view
    :class="classPrefix + ' ' + formItemClass + ' ' + formClass + '--' + dataLabelAlign + ' ' + formItemClass + '__' + name + ' ' + errorClasses + ' ' + tClass"
    :style="'' + tools._style([customStyle])"
  >
    <view :class="formItemClass + '-wrap ' + formItemClass + '--' + dataLabelAlign + ' ' + tClassWrap">
      <!-- 标签区域 -->
      <view
        v-if="label"
        :class="labelClass + ' ' + labelClass + '--' + dataLabelAlign
          + (dataRequiredMark ? ' ' + labelClass + '--required' : '')
          + (dataRequiredMark && requiredMarkPosition === 'right' ? ' ' + labelClass + '--required-right' : '')
          + ' ' + tClassLabel"
        :style="'width: ' + dataLabelWidth"
      >
        <label :for="forId">{{ label }}</label>
        <template v-if="colon">
          {{ globalConfig.colonText }}
        </template>
      </view>

      <!-- 内容区域 -->
      <view :class="formClass + '__controls ' + errorClasses + ' ' + tClassControls">
        <view
          :class="formClass + '__controls-content ' + formClass + '__controls--' + dataContentAlign"
          :style="contentStyle"
        >
          <slot />
        </view>
        <!-- 帮助信息 -->
        <view
          v-if="help"
          :class="formItemClass + '-help ' + formClass + '__controls--' + dataContentAlign + ' ' + tClassHelp"
        >
          {{ help }}
        </view>

        <!-- 校验提示信息 -->
        <view
          v-if="(errorList.length > 0 && dataShowErrorMessage) || successList.length > 0"
          :class="formItemClass + '-extra ' + formClass + '__controls--' + dataContentAlign + ' ' + tClassExtra"
        >
          {{ errorList.length > 0 && dataShowErrorMessage ? errorList[0].message : successList[0].message }}
        </view>
      </view>
    </view>

    <t-icon
      v-if="arrow"
      name="chevron-right"
      size="24"
      color="rgba(0, 0, 0, 0.4)"
    />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { getRect } from '../common/utils';
import { prefix } from '../common/config';
import props from './props';
import { validateRules, ValidateStatus } from './form-model';
import TIcon from '../icon/icon.vue';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';
import tools from '../common/utils.wxs';
import usingConfig from '../mixins/using-config';
import { isNumeric } from '../common/validator';

const parentComponentName = 'form';
const componentName = 'form-item';
const name = `${prefix}-${componentName}`;

/** 规范化 labelWidth，确保输出带有 CSS 单位 */
function normalizeLabelWidth(value) {
  if (!value) return '';
  if (isNumeric(value)) return `${value}px`;
  return String(value);
}

export default {
  components: {
    TIcon,
  },
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [
      `${prefix}-class`,
      `${prefix}-class-wrap`,
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
    mixins: [
      ChildrenMixin(RELATION_MAP.FormItem),
      usingConfig({ componentName: parentComponentName }),
    ],

    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        formClass: `${prefix}-form`,
        formItemClass: `${prefix}-form__item`,
        labelClass: `${prefix}-form__label`,
        errorClasses: '',
        errorList: [],
        successList: [],
        verifyStatus: ValidateStatus.TO_BE_VALIDATED,
        needResetField: false,
        resetValidating: false,
        form: {},
        colon: false,

        tools,
        dataRules: this.rules,
        dataLabelAlign: this.labelAlign,
        dataLabelWidth: this.labelWidth,
        dataRequiredMark: this.requiredMark,
        dataShowErrorMessage: this.showErrorMessage,
        dataContentAlign: this.contentAlign,
        requiredMarkPosition: '',

        forId: this.for || '',
      };
    },
    computed: {
      contentStyle() {
        const contentAlign = this.dataContentAlign;
        return contentAlign ? `text-align: ${contentAlign}` : '';
      },
    },
    watch: {

    },
    created() {
    // this.initFormItem();
    },
    beforeUnmount() {
      if (this.form) {
        this.form.unregisterChild(this.name);
      }
    },
    methods: {
      innerAfterLinked() {
        const target = this[RELATION_MAP.FormItem];
        target.registerChild(this);
        this.form = target;
        this.initFormItem();

        const { globalConfig } = this;
        const { requiredMark, labelAlign, labelWidth, showErrorMessage, contentAlign } = this;
        const formRules = target.rules?.[this.name];
        const isRequired = formRules?.some(rule => rule.required);

        this.dataRules = formRules;
        this.colon = target.colon;
        this.dataLabelAlign = labelAlign || target.labelAlign;
        this.dataLabelWidth = normalizeLabelWidth(labelWidth || target.labelWidth);
        this.dataContentAlign = contentAlign || target.contentAlign;
        this.dataRequiredMark = requiredMark || target.requiredMark || globalConfig.requiredMark || isRequired;
        this.dataShowErrorMessage = typeof showErrorMessage === 'boolean' ? showErrorMessage : target.showErrorMessage;
        this.requiredMarkPosition = target.requiredMarkPosition || globalConfig.requiredMarkPosition;
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
        const context = { formData: data, name: this.name };
        const results = await validateRules(value, filteredRules, context);

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
        const { globalConfig } = this;
        const errorMessage = (this.form && this.form.errorMessage) || (globalConfig && globalConfig.errorMessage) || {};
        const labelName = this.label || this.name;

        const errorList = results
          .filter(item => item.result !== true)
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

        const successList = results.filter(item => item.result === true && item.message && item.type === 'success');

        return {
          errorList,
          successList,
          resultList: results,
        };
      },

      // 滚动到当前 form-item
      scrollIntoView(type, distanceTop = 0) {
        getRect(this, `.${this.classPrefix}`).then((rect) => {
          if (!rect) return;
          const query = uni.createSelectorQuery();
          query.selectViewport().scrollOffset()
            .exec((res) => {
              if (!res[0]) return;
              uni.pageScrollTo({
                scrollTop: rect.top + res[0].scrollTop - distanceTop,
                duration: type === 'smooth' ? 300 : 0,
              });
            });
        });
      },

      // 计算错误样式类
      calcErrorClasses(errorList = this.errorList) {
        if (!this.dataShowErrorMessage) return '';
        if (!errorList || errorList.length === 0) return '';
        const type = errorList[0].type || 'error';
        return type === 'error' ? `${this.formItemClass}--error` : `${this.formItemClass}--warning`;
      },

      // 更新验证状态
      updateValidateStatus(analysis) {
        const { errorList, successList } = analysis;

        this.errorClasses = this.calcErrorClasses(errorList);
        this.errorList = errorList;
        this.successList = successList;
        this.verifyStatus = errorList.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
      },

      // 清空验证结果
      clearValidate() {
        this.errorClasses = '';
        this.errorList = [];
        this.successList = [];
        this.verifyStatus = ValidateStatus.TO_BE_VALIDATED;
      },

      // 重置字段
      resetField() {
        this.clearValidate();
      },

      // 设置验证信息
      setValidateMessage(validateMessage) {
        const errorList = validateMessage.filter(item => item.type !== 'success');
        const successList = validateMessage.filter(item => item.type === 'success');

        let verifyStatus = ValidateStatus.SUCCESS;
        if (validateMessage.length > 0) {
          verifyStatus = errorList.length > 0 ? ValidateStatus.FAIL : ValidateStatus.SUCCESS;
        }

        this.errorClasses = this.calcErrorClasses(errorList);
        this.errorList = errorList;
        this.successList = successList;
        this.verifyStatus = verifyStatus;
      },
    },
  }),
};
</script>
<style scoped src="./form-item.css"></style>
