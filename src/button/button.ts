import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-button`;

TComponent({
  behaviors: ['wx://form-field-button'],
  // 组件的对外属性
  properties: {
    // 样式相关 START ===
    theme: {
      type: String,
      value: 'default',
    },
    size: {
      type: String,
      value: 'medium',
    },
    icon: String,
    plain: {
      type: Boolean,
      value: false,
    },
    block: {
      type: Boolean,
      value: false,
    },
    shape: {
      type: String,
      value: 'square',
    },
    loading: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    // === END 样式相关
    // === 小程序功能相关 START
    formType: {
      type: String,
      value: '',
    },
    openType: {
      type: String,
      value: '',
    },
    lang: {
      type: String,
      value: 'en',
    },
    sessionFrom: {
      type: String,
      value: '',
    },
    sendMessageTitle: {
      type: String,
      value: '',
    },
    sendMessagePath: {
      type: String,
      value: '',
    },
    sendMessageImg: {
      type: String,
      value: '',
    },
    appParameter: {
      type: String,
      value: '',
    },
    showMessageCard: {
      type: Boolean,
      value: false,
    },
    // === END 小程序功能相关
  },
  // 组件的内部数据
  data: {
    // 按钮样式列表
    className: '',
  },

  observers: {
    'theme, size, plain, block, shape, disabled, loading'() {
      this.setClass();
    },
  },

  /* 组件生命周期 */
  lifetimes: {
    // 组件实例被创建
    // created() {},
    // 组件实例进入页面节点树
    attached() {
      this.setClass();
    },
    // 页面组件初始化完成
    // ready() { },
    // 组件实例被移动到节点树另一个位置
    // moved() {},
    // 组件实例被从页面节点树移除
    // detached() { },
  },

  /* Methods */
  methods: {
    setClass() {
      const classList = [
        `${name}`,
        `${name}--${this.data.theme}`,
        `${name}--size-${this.data.size}`,
      ];
      if (this.data.shape === 'square') {
        classList.push(`${name}--square`);
      } else if (this.data.shape === 'circle') {
        classList.push(`${name}--circle`);
      }
      if (this.data.block) {
        classList.push(`${prefix}-is-block`);
      }
      if (this.data.disabled) {
        classList.push(`${prefix}-is-disabled`);
      }
      if (this.data.loading) {
        classList.push(`${prefix}-is-loading`);
      }
      if (this.data.plain) {
        classList.push(`${prefix}-is-plain`);
      }
      this.setData({
        className: classList.join(' '),
      });
    },
    getuserinfo(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },
    contact(e) {
      this.triggerEvent('contact', e.detail);
    },
    getphonenumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
    error(e) {
      this.triggerEvent('error', e.detail);
    },
    opensetting(e) {
      this.triggerEvent('opensetting', e.detail);
    },
    launchapp(e) {
      this.triggerEvent('launchapp', e.detail);
    },
  },
});
