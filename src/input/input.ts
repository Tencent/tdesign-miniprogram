import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-input`;

TComponent({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    label: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
    password: {
      type: Boolean,
      value: false,
    },
    error: {
      type: Boolean,
      value: false,
    },
    errorMessage: {
      type: String,
      value: '',
    },
    rightIcon: {
      type: String,
      value: '',
    },
    suffix: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: '',
    },
    maxlength: {
      type: Number,
      value: 500,
    },
    rows: {
      type: Number,
      value: 4,
    },
    maxRows: {
      type: Number,
      value: 12,
    },
    clearable: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
    },
    // todo 事件是这样写的？
    bindinput: {
      type: Function,
    },
    bindclear: {
      type: Function,
    },
  },

  data: {
    inputValue: '',
    classPrefix: name,
  },
  /* 组件生命周期 */
  lifetimes: {
    // 组件实例被创建
    // created() {},
    // 组件实例进入页面节点树
    // attached() {},
    // 页面组件初始化完成
    ready() {
      this.setData({ inputValue: this.data.value });
    },
    // 组件实例被移动到节点树另一个位置
    // moved() {},
    // 组件实例被从页面节点树移除
    // detached() { },
  },
  methods: {
    onInput(event) {
      const { value } = event.detail;
      this.setData({ inputValue: value });

      this.triggerEvent('input', {
        ...event.detail,
      });
    },
    clearInput(event) {
      this.setData({ inputValue: '' });
      this.triggerEvent('clear', {
        ...event.detail,
      });
    },
  },
});
