import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;

@wxComponent()
export default class Stepper extends SuperComponent {
  externalClasses = [
    `${{ prefix }}-class`,
    `${{ prefix }}-class-input`,
    `${{ prefix }}-class-minus`,
    `${{ prefix }}-class-plus`,
  ];

  options = {
    addGlobalClass: true,
  };

  properties = props;

  observers = {
    value(v) {
      this.setData({
        currentValue: Number(v),
      });
    },
  };

  data: {
    currentValue: Number;
    classPrefix: String;
    prefix: String;
  } = {
    currentValue: 0,
    classPrefix: `${prefix}-stepper`,
    prefix,
  };

  attached() {
    const { value, min } = this.properties;
    this.setData({
      currentValue: value ? Number(value) : min,
    });
  }

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

  format(value) {
    const { min, max } = this.properties as any;
    // 超过边界取边界值
    return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER);
  }

  setValue(value) {
    this.setData({
      currentValue: value,
    });
    this.triggerEvent('change', { value });
  }

  minusValue() {
    if (this.isDisabled('minus')) {
      this.triggerEvent('overlimit', { type: 'minus' });
      return false;
    }
    const { currentValue, step } = this.data as any;
    this.setValue(this.format(currentValue - step));
  }

  plusValue() {
    if (this.isDisabled('plus')) {
      this.triggerEvent('overlimit', { type: 'plus' });
      return false;
    }
    const { currentValue, step } = this.data as any;
    this.setValue(this.format(currentValue + step));
  }

  changeValue(e) {
    const value =
      String(e.detail.value)
        .split('.')[0]
        .replace(/[^-0-9]/g, '') || 0;
    this.setValue(this.format(Number(value)));
    this.triggerEvent('blur', { value });
  }

  blurHandler(e) {
    this.changeValue(e);
  }
}
