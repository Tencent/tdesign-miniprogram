import TComponent from '../common/component';

TComponent({
  // 组件的对外属性
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
    mode: {
      type: Boolean,
      value: 'modal', // 'modal' | 'half-screen'
    },
    theme: {
      type: String,
      value: 'primary', // 'primary' | 'warning' | 'success' | 'error'
    },
    className: {
      type: String,
      value: '',
    },
    customStyle: {
      type: String,
      value: '',
    },
    width: {
      type: String,
      value: '',
    },
    header: {
      type: String,
      value: '',
    },
    body: {
      type: String,
      value: '',
    },
    footer: {
      type: Boolean,
      value: true,
    },
    showCancel: {
      type: Boolean,
      value: false,
    },
    confirmContent: {
      type: String,
      value: '确定',
    },
    cancelContent: {
      type: String,
      value: '取消',
    },
    showOverlay: {
      type: Boolean,
      value: true,
    },
    preventScrollThrough: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 2500,
    },
  },
  // 组件的内部数据
  data: {

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

  /* Methods */
  methods: {
    // preventScrollThrough
    catchtouchmove() { },
    // 点击笼罩层
    clickOverlay(event) {
      this.triggerEvent('clickOverlay', {
        ...event.detail,
      });
    },
    // 点击关闭按钮
    clickCloseBtn(event) {
      this.triggerEvent('clickCloseBtn', {
        ...event.detail,
      });
    },
    // 点击确定按钮
    clickConfirmBtn(event) {
      this.triggerEvent('clickConfirmBtn', {
        ...event.detail,
      });
    },
  },
});
