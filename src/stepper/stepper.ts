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
      this.setData({
        currentValue: this.format(Number(v)),
      });
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
      this.setData({
        currentValue: value ? Number(value) : min,
      });
    },
  };

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
  }

  getLen(num: number) {
    const numStr = num.toString();
    return numStr.indexOf('.') === -1 ? 0 : numStr.split('.')[1].length;
  }

  add(a: number, b: number) {
    const maxLen = Math.max(this.getLen(a), this.getLen(b));
    const base = 10 ** maxLen;
    return Math.round(a * base + b * base) / base;
  }

  format(value) {
    const { min, max, step } = this.properties as any;
    const len = Math.max(this.getLen(step), this.getLen(value));
    // 超过边界取边界值
    return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER).toFixed(len);
  }

  setValue(value) {
    value = this.format(value);
    if (this.preValue === value) return;
    this.preValue = value;
    this._trigger('change', { value: Number(value) });
  }

  minusValue() {
    if (this.isDisabled('minus')) {
      this.triggerEvent('overlimit', { type: 'minus' });
      return false;
    }
    const { currentValue, step } = this.data as any;
    this.setValue(this.add(currentValue, -step));
  }

  plusValue() {
    if (this.isDisabled('plus')) {
      this.triggerEvent('overlimit', { type: 'plus' });
      return false;
    }
    const { currentValue, step } = this.data as any;
    this.setValue(this.add(currentValue, step));
  }

  methods = {
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

      this.triggerEvent('input', { value });
    },

    handleBlur(e) {
      const { value: rawValue } = e.detail;
      const value = this.format(rawValue);

      this.setValue(value);
      this.triggerEvent('blur', { value });
    },
  };
}
