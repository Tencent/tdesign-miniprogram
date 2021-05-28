import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-switch`;

TComponent({
  properties: {
    label: {
      type: String,
      value: '',
    },
    // size默认medium，还有small和large
    size: {
      type: String,
      value: 'medium',
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
      value: '#0252d9',
    },
    inactivedColor: {
      type: String,
      value: '#dcdfe6',
    },
    dotColor: {
      type: String,
      value: '#fff',
    },
    activeText: {
      type: String,
      value: null,
    },
    inactiveText: {
      type: String,
      value: null,
    },
  },
  // 组件的内部数据
  data: {
    classPrefix: name,
    height: {
      small: 20,
      medium: 25,
      large: 30,
    },
    isActive: false,
  },
  lifetimes: {
    attached() {
      const { value, activeValue } = this.data;
      this.setData({
        isActive: value === activeValue,
      });
    },
  },
  methods: {
    switchChange(e) {
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
    onTapDot(e) {
      this.switchChange();
    },
  },
});
