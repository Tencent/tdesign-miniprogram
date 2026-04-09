<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + tClass"
    aria-role="radiogroup"
  >
    <slot />
    <t-radio
      v-for="(item, index) in radioOptions"
      :key="index"
      :ref="prefix + '-radio-option'"
      :class="prefix + '-radio-option'"
      :data-index="index"
      :data-value="item.value"
      :data-allow-uncheck="item.allowUncheck || allowUncheck"
      :block="item.block || true"
      :label="item.label || ''"
      :value="item.value"
      :checked="item.checked || false"
      :content="item.content || ''"
      :allow-uncheck="item.allowUncheck || allowUncheck"
      :content-disabled="item.contentDisabled || false"
      :readonly="item.readonly || false"
      :disabled="item.disabled || false"
      :icon="item.icon || icon"
      :placement="item.placement || placement"
      :max-content-row="item.maxContentRow || 5"
      :max-label-row="item.maxLabelRow || 3"
      :name="item.name || ''"
      :borderless="borderless"
      :relation-key="relationKey"
      @change="handleRadioChange($event, { index, value: item.value, allowUncheck: item.allowUncheck || allowUncheck })"
    />
  </view>
</template>
<script>
import TRadio from '../radio/radio';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import { uniComponent } from '../common/src/index';
import props from './props';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-radio-group`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
  ],
  inject: {
    [RELATION_MAP.FormKey]: {
      default: null,
    },
  },
  mixins: [ParentMixin(RELATION_MAP.Radio)],
  components: {
    TRadio,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      radioOptions: [],
      tools,

      dataValue: coalesce(this.value, this.defaultValue),
    };
  },
  watch: {
    value: {
      handler(v) {
        this.dataValue = v;
      },
      immediate: true,
      deep: true,
    },
    dataValue: {
      handler(v) {
        this.getChildren()?.forEach((item) => {
          item.dataChecked = v === item.value;
        });
      },
      immediate: true,
      deep: true,
    },
    options: {
      handler() {
        this.initWithOptions();
      },
      immediate: true,
      deep: true,
    },
    disabled: {
      handler(v) {
        if (this.options?.length) {
          this.initWithOptions();
          return;
        }
        this.getChildren()?.forEach((item) => {
          item.setDisabled(v);
        });
      },
      immediate: true,
    },
  },
  mounted() {
    setTimeout(() => {
      this.getChildren()?.forEach((item) => {
        item.dataChecked = this.dataValue === item.value;
        item.setDisabled(this.disabled);
      });
    }, 33);
  },
  methods: {
    innerAfterLinked(target) {
      const { value, disabled, readonly } = this;
      target.dataChecked = value === target.value;

      target.setDisabled(disabled);
      target.setReadonly(readonly);
    },
    getChildren() {
      let items = this.children;

      if (!items?.length) {
        items = this.$refs[`.${prefix}-radio-option`];
      }

      return items;
    },

    updateValue(value) {
      this._trigger('change', { value });

      this.onChange(value);
    },

    handleRadioChange(tools, { value, index, allowUncheck, checked }) {
      this._trigger('change', checked === false && allowUncheck ? { value: null, index } : { value, index });
    },

    onChange(value) {
      if (this[RELATION_MAP.FormKey]
        && this[RELATION_MAP.FormKey].onValueChange) {
        this[RELATION_MAP.FormKey].onValueChange(value);
      }
    },

    // 支持自定义options
    initWithOptions() {
      const { options, value, keys, disabled, readonly } = this;
      // 数字数组｜字符串数组｜对像数组
      if (!options?.length || !Array.isArray(options)) {
        this.radioOptions = [];
        return;
      }
      const optionsValue = [];
      try {
        options.forEach((element) => {
          const typeName = typeof element;
          if (typeName === 'number' || typeName === 'string') {
            optionsValue.push({
              label: `${element}`,
              value: element,
              checked: value === element,
              disabled,
              readonly,
            });
          } else if (typeName === 'object') {
            optionsValue.push({
              ...element,
              label: element[coalesce(keys?.label, 'label')],
              value: element[coalesce(keys?.value, 'value')],
              checked: value === element[coalesce(keys?.value, 'value')],
              disabled: element.disabled || disabled,
              readonly: element.readonly || readonly,
            });
          }
        });
        this.radioOptions = optionsValue;
      } catch (error) {

      }
    },
  },
});
</script>
<style scoped>
</style>
