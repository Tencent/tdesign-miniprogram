import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-toast`;

TComponent({
  data: {
    classPrefix: name,
    isLock: false,
  },
  properties: {
    // 是否展示
    show: {
      type: Boolean,
      value: false,
      observer: '_observeShow',
    },
    // 提示类型
    // 合法值：loading/success/fail
    type: {
      type: String,
      value: '',
    },
    // 展示位置
    // 合法值：top/middle/bottom
    position: {
      type: String,
      value: 'middle',
    },
    // 文本内容，支持通过\n换行
    message: {
      type: String,
      value: '',
    },
    // 自定义图标
    icon: {
      type: String,
      value: '',
    },
    // 显示背景遮罩，禁止背景点击和滚动
    showOverlay: {
      type: Boolean,
      value: false,
    },
    // 展示时长ms，值为0时不消失
    duration: {
      type: Number,
      value: 1000,
    },
  },

  /* 组件生命周期 */
  lifetimes: {
    // 组件实例被创建
    // created() {},
    // 组件实例进入页面节点树
    // attached() {},
    // 页面组件初始化完成
    // ready() { },
    // 组件实例被移动到节点树另一个位置
    // moved() {},
    // 组件实例被从页面节点树移除
    // detached() { },
  },

  methods: {
    _observeShow(v) {
      if (this.data.isLock) return;
      if (v) {
        this.data.isLock = true;
        setTimeout(() => {
          this.clear();
          this.data.isLock = false;
        }, this.data.duration);
      }
    },

    loading() {
      this.setData({
        show: true,
        type: 'loading',
      });
    },

    success() {
      this.setData({
        show: true,
        type: 'loading',
      });
    },

    fail() {
      this.setData({
        show: true,
        type: 'loading',
      });
    },

    clear() {
      this.setData({
        show: false,
        type: '',
        position: 'middle',
        message: '',
        icon: '',
        duration: 1000,
      });
    },
  },
});
