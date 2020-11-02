import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
TComponent({
  properties: {
    modelValue: {
      type: [Boolean, String],
      value: 0,
      observer(newVal) {
        this.setData({
          currentValue: Number(newVal),
        });
      },
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    disableInput: {
      type: Boolean,
      value: false,
    },
    inputWidth: {
      type: Number,
      value: null,
    },
    label: {
      type: String,
      value: '',
    },
    max: {
      type: Number,
      value: 10000,
    },
    min: {
      type: Number,
      value: 0,
    },
    step: {
      type: Number,
      value: 1,
    },
  },
  data: {
    currentValue: 0,
    classPrefix: `${prefix}-stepper`,
  },
  attached() {
    this.setData({
      currentValue: Number(this.data.modelValue) || 0,
    });
  },
  methods: {
    isDisabled(type) {
      const { min, max, currentValue, disabled } = this.data;
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
    format(value) {
      const { min, max } = this.data;
      // 超过边界取边界值
      return Math.max(Math.min(max, value, Number.MAX_SAFE_INTEGER), min, Number.MIN_SAFE_INTEGER);
    },
    setValue(value) {
      this.setData(
        {
          currentValue: value,
        },
        this.triggerEvent('change', { value }),
      );
    },
    minusValue() {
      if (this.isDisabled('minus')) {
        return false;
      }
      const { currentValue, step } = this.data;
      this.setValue(this.format(currentValue - step));
    },
    plusValue() {
      if (this.isDisabled('plus')) {
        return false;
      }
      const { currentValue, step } = this.data;
      this.setValue(this.format(currentValue + step));
    },
    changeValue(e) {
      const value =
        String(e.detail.value)
          .split('.')[0]
          .replace(/[^-0-9]/g, '') || 0;
      this.setValue(this.format(Number(value)));
    },
    blurHandler(e) {
      this.changeValue(e);
    },
  },
});
