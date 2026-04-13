<template>
  <view
    :style="'' + tools._style([customStyle])"
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
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce, nextTick } from '../common/utils';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-stepper`;


export default {
  components: {
    TIcon,
  },
  ...uniComponent({
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
        const result = Math.round(a * base + b * base) / base;
        // 保留运算涉及的最大小数位数，避免精度信息丢失
        return maxLen > 0 ? result.toFixed(maxLen) : result;
      },

      format(value) {
        const { min, max, step } = this;
        // 使用字符串形式计算小数位数，避免数字隐式转换导致末尾0丢失
        const len = Math.max(this.getLen(step), this.getLen(String(value)));
        // 超过边界取边界值
        return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER).toFixed(len);
      },

      setValue(value) {
        const formattedStr = this.format(value);
        const newValue = Number(formattedStr);

        nextTick().then(() => {
        // 使用 format 返回的字符串更新显示值，避免 Number() 转换丢失末尾0
          this.updateCurrentValue(formattedStr);
        });

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

        const displayValue = this.integer ? newValue : formatted;
        // 当过滤后的值与当前值相同时，需要先清空再回填，强制触发视图更新
        if (String(this.currentValue) === String(displayValue)) {
          this.updateCurrentValue('');
          nextTick().then(() => {
            this.updateCurrentValue(displayValue);
          });
        } else {
          this.updateCurrentValue(displayValue);
        }

        if (this.integer || /\.\d*[1-9]/.test(formatted)) {
          this.setValue(formatted);
        }
      },

      handleBlur(e) {
        const { value: rawValue } = e.detail;
        const formatted = this.filterIllegalChar(rawValue);
        const value = this.format(formatted);

        this.setValue(value);
        this.$emit('blur', { value });
      },
    },
  }),
};
</script>
<style scoped src="./stepper.css"></style>
