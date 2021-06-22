import { wxComponent, SuperComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-switch`;
@wxComponent()
export default class Switch extends SuperComponent {
  properties = {
    label: {
      type: String,
      value: '',
    },
    labelWidth: {
      type: Number,
      value: 100,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    value: {
      type: Boolean,
      optionalTypes: [String, Number],
      value: false,
    },
    activeValue: {
      type: Boolean,
      optionalTypes: [String, Number],
      value: true,
    },
    inactiveValue: {
      type: Boolean,
      optionalTypes: [String, Number],
      value: false,
    },
    activedColor: {
      type: String,
      value: '#0052d9',
    },
    inactivedColor: {
      type: String,
      value: 'rgba(0, 0, 0, .26)',
    },
  };
  // 组件的内部数据
  data = {
    classPrefix: name,
    isActive: false,
    bodyStyle: '',
  };
  lifetimes = {
    attached() {
      const { value, activeValue, disabled, activedColor, inactivedColor } = this.data;
      this.setData({
        isActive: value === activeValue,
      });
      if (!disabled) {
        this.setData({
          bodyStyle: `background-color: ${this.data.isActive ? activedColor : inactivedColor}`,
        });
      }
    },
  };
  methods = {
    switchChange() {
      const { disabled, value, activeValue, inactiveValue, isActive } = this.data;
      if (disabled) return;

      this.setData({
        value: value === activeValue ? inactiveValue : activeValue,
        isActive: !isActive,
      });

      this.triggerEvent('change', {
        value: this.data.value,
      });
    },
    onTapBackground() {
      this.switchChange();
    },
    onTapDot() {
      this.switchChange();
    },
  };
}
