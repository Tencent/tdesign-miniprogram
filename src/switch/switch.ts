import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-switch`;

TComponent({
  properties: {
    label: {
      type: String,
      value: '是否打开',
    },
    // size默认default，还有small和large
    size: {
      type: String,
      value: 'default',
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
      type: [Boolean, String, Number],
      value: true,
    },
    activeValue: {
      type: [Boolean, String, Number],
      value: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
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
      default: 25,
      large: 30,
    },
  },
  lifetimes: {
    attached() {
      console.log(this.data.inactiveText);
      // debugger
    },
  },
  methods: {
    switchChange(e) {
      const { disabled, value, activeValue, inactiveValue } = this.data;
      if (disabled) return;

      this.setData({
        value: value === activeValue ? inactiveValue : activeValue,
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
