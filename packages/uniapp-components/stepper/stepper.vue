<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + classPrefix + '--' + size + ' ' + tClass"
  >
    <view
      :class="
        classPrefix +'__minus ' +
          classPrefix + '__minus--' + theme +
          ' ' + classPrefix + '__icon--' + size +
          ' ' + (disabled || disableMinus || currentValue <= min ? classPrefix + '--' + theme + '-disabled' : '') +
          ' ' + tClassMinus
      "
      :aria-label="'减少' + step"
      aria-role="button"
      :aria-disabled="disabled || disableMinus || currentValue <= min"
      @click.stop.prevent="minusValue"
    >
      <t-icon name="remove" />
    </view>
    <view :class="classPrefix + '__input--' + theme + ' ' + (disabled || disableInput ? classPrefix + '--' + theme + '-disabled' : '')">
      <input
        :style="inputWidth ? 'width:' + inputWidth + 'px;' : ''"
        :class="classPrefix + '__input ' + classPrefix + '__input--' + size + ' ' + tClassInput"
        :disabled="disabled || disableInput"
        :type="integer ? 'number' : 'digit'"
        :value="currentValue"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
    </view>
    <view
      :class="
        classPrefix + '__plus ' +
          classPrefix + '__plus--' + theme +
          ' ' + classPrefix + '__icon--' + size +
          ' ' + (disabled || disablePlus || currentValue >= max ? classPrefix + '--' + theme + '-disabled' : '') +
          ' ' + tClassPlus
      "
      :aria-label="'增加' + step"
      aria-role="button"
      :aria-disabled="disabled || disablePlus || currentValue >= max"
      @click.stop.prevent="plusValue"
    >
      <t-icon name="add" />
    </view>
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-stepper`;


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
    `${prefix}-class-input`,
    `${prefix}-class-minus`,
    `${prefix}-class-plus`,
  ],
  components: {
    tIcon,
  },
  props: {
    ...props,
  },
  data() {
    return {
      currentValue: 0,
      classPrefix: name,
      prefix,
      tools,
      disablePlus: false,
      disableMinus: false,
    };
  },
  watch: {
    value(v) {
      this.preValue = Number(v);
      this.updateCurrentValue(this.format(this.preValue));
    },
  },
  mounted() {
    const { value, defaultValue, min } = this;
    const cur = coalesce(value, defaultValue);

    this.updateCurrentValue(cur ? Number(cur) : min);
  },
  methods: {
    isDisabled(type) {
      const { min, max, disabled } = this;
      const { currentValue } = this;
      if (disabled) {
        return true;
      }
      if (type === 'minus' && currentValue <= min) {
        return true;
      }
      if (type === 'plus' && currentValue >= max) {
        return true;
      }
      return false;
    },

    getLen(num) {
      const numStr = num.toString();
      return numStr.indexOf('.') === -1 ? 0 : numStr.split('.')[1].length;
    },

    add(a, b) {
      const maxLen = Math.max(this.getLen(a), this.getLen(b));
      const base = 10 ** maxLen;
      return Math.round(a * base + b * base) / base;
    },

    format(value) {
      const { min, max, step } = this;
      const len = Math.max(this.getLen(step), this.getLen(value));
      // 超过边界取边界值
      return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER).toFixed(len);
    },

    setValue(value) {
      const newValue = Number(this.format(value));

      this.updateCurrentValue(newValue);

      if (this.preValue === newValue) return;

      this.preValue = newValue;
      this._trigger('change', { value: newValue });
    },

    minusValue() {
      if (this.isDisabled('minus')) {
        this.$emit('overlimit', { type: 'minus' });
        return false;
      }
      const { currentValue, step } = this;
      this.setValue(this.add(currentValue, -step));
    },

    plusValue() {
      if (this.isDisabled('plus')) {
        this.$emit('overlimit', { type: 'plus' });
        return false;
      }
      const { currentValue, step } = this;
      this.setValue(this.add(currentValue, step));
    },

    filterIllegalChar(value) {
      const v = String(value).replace(/[^0-9.]/g, '');
      const indexOfDot = v.indexOf('.');
      if (this.integer && indexOfDot !== -1) {
        return v.split('.')[0];
      }

      if (!this.integer && indexOfDot !== -1 && indexOfDot !== v.lastIndexOf('.')) {
        return v.split('.', 2).join('.');
      }

      return v;
    },

    updateCurrentValue(value) {
      this.currentValue = value;
    },

    handleFocus(e) {
      const { value } = e.detail;

      this.$emit('focus', { value });
    },

    handleInput(e) {
      const { value } = e.detail;
      // 允许输入空值
      if (value === '') {
        return;
      }

      const formatted = this.filterIllegalChar(value);
      const newValue = this.format(formatted);

      this.updateCurrentValue(this.integer ? newValue : formatted);

      if (this.integer || /\.\d+/.test(formatted)) {
        this.setValue(formatted);
      }
    },

    handleBlur(e) {
      const { value: rawValue } = e.detail;
      const value = this.format(rawValue);

      this.setValue(value);
      this.$emit('blur', { value });
    },
  },
});
</script>
<style scoped>
@import './stepper.css';
</style>
