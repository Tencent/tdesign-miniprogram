import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-stepper`;

@wxComponent()
export default class Stepper extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-input`, `${prefix}-class-minus`, `${prefix}-class-plus`];

  properties = { ...props };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value(v) {
      this.preValue = Number(v);
      this.updateCurrentValue(this.format(this.preValue));
    },
  };

  data = {
    currentValue: 0,
    classPrefix: name,
    prefix,
  };

  lifetimes = {
    attached() {
      const { value, min } = this.properties;
      this.updateCurrentValue(value ? Number(value) : min);
    },
  };

  methods = {
    isDisabled(type) {
      const { min, max, disabled } = this.properties;
      const { currentValue } = this.data as any;
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

    getLen(num: number) {
      const numStr = num.toString();
      return numStr.indexOf('.') === -1 ? 0 : numStr.split('.')[1].length;
    },

    add(a: number, b: number) {
      const maxLen = Math.max(this.getLen(a), this.getLen(b));
      const base = 10 ** maxLen;
      const result = Math.round(a * base + b * base) / base;
      // 保留运算涉及的最大小数位数，避免精度信息丢失
      return maxLen > 0 ? result.toFixed(maxLen) : result;
    },

    format(value) {
      const { min, max, step } = this.properties as any;
      // 使用字符串形式计算小数位数，避免数字隐式转换导致末尾0丢失
      const len = Math.max(this.getLen(step), this.getLen(String(value)));
      // 超过边界取边界值
      return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER).toFixed(len);
    },

    setValue(value) {
      const formattedStr = this.format(value);
      const newValue = Number(formattedStr);

      // 使用 format 返回的字符串更新显示值，避免 Number() 转换丢失末尾0
      this.updateCurrentValue(formattedStr);

      if (this.preValue === newValue) return;

      this.preValue = newValue;
      this._trigger('change', { value: newValue });
    },

    minusValue() {
      if (this.isDisabled('minus')) {
        this.triggerEvent('overlimit', { type: 'minus' });
        return false;
      }
      const { currentValue, step } = this.data as any;
      this.setValue(this.add(currentValue, -step));
    },

    plusValue() {
      if (this.isDisabled('plus')) {
        this.triggerEvent('overlimit', { type: 'plus' });
        return false;
      }
      const { currentValue, step } = this.data as any;
      this.setValue(this.add(currentValue, step));
    },

    filterIllegalChar(value: string | number) {
      const v = String(value).replace(/[^0-9.]/g, '');
      const indexOfDot = v.indexOf('.');
      if (this.properties.integer && indexOfDot !== -1) {
        return v.split('.')[0];
      }

      if (!this.properties.integer && indexOfDot !== -1 && indexOfDot !== v.lastIndexOf('.')) {
        return v.split('.', 2).join('.');
      }

      return v;
    },

    updateCurrentValue(value) {
      // 当字符串转数字不丢失信息时（如 "88" → 88），用数字类型，保持模板渲染一致性
      // 当会丢失信息时（如 "1.0" → 1），保留字符串以维持小数末尾0
      const numValue = Number(value);
      this.setData({
        currentValue: String(numValue) === String(value) ? numValue : value,
      });
    },

    handleFocus(e) {
      const { value } = e.detail;

      this.triggerEvent('focus', { value });
    },

    handleInput(e) {
      const { value } = e.detail;
      // 允许输入空值
      if (value === '') {
        return;
      }

      const formatted = this.filterIllegalChar(value);
      const newValue = this.format(formatted);

      this.updateCurrentValue(this.data.integer ? newValue : formatted);

      if (this.data.integer || /\.\d*[1-9]/.test(formatted)) {
        this.setValue(formatted);
      }
    },

    handleBlur(e) {
      const { value: rawValue } = e.detail;
      const formatted = this.filterIllegalChar(rawValue);
      const value = this.format(formatted);

      this.setValue(value);
      this.triggerEvent('blur', { value });
    },
  };
}
