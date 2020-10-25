import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-message`;

TComponent({
  // 组件的对外属性
  properties: {
    /**
     * @description 显示与隐藏
     * @attribute visible
     */
    visible: {
      type: Boolean,
      value: false,
    },
    /**
     * @description 消息内容
     * @attribute content
     */
    content: {
      type: String,
      value: '',
    },
    /**
     * @description 消息类型
     * @attribute theme
     */
    theme: {
      type: String,
      value: 'primary', // 'primary' | 'warning' | 'success' | 'error'
    },
    /**
     * @description 显示时间，毫秒
     * @attribute duration
     */
    duration: {
      type: Number,
      default: 2000,
    },
    /**
     * @description 文本对齐方式
     * @attribute align
     */
    align: {
      type: String,
      value: 'left', // 'left' | 'center'
    },
    /**
     * @description 自定义层级
     * @attribute zIndex
     */
    zIndex: {
      type: Number,
      value: 6000,
    },
  },
  // 组件的内部数据
  data: {
    rootClasses: '',
    rootStyles: '',
  },

  observers: {
    'theme, align'() {
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
      const rootClassList = [`${name}`, `${name}--${this.properties.theme}`];

      if (!!this.properties.align) {
        rootClassList.push(`${name}--size-${this.properties.align}`);
      }

      const messageClassList = [`${name}--txt`];

      this.setData({
        rootClasses: rootClassList.join(' '),
        messageClasses: messageClassList.join(' '),
      });
    },
    durationEnd(event) {
      this.triggerEvent('durationEnd', {
        ...event.detail,
      });
    },
  },
});
