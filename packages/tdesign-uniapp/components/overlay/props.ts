/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export default {
  /** 遮罩层的背景色 */
  backgroundColor: {
    type: String,
    default: '',
  },
  /** 背景色过渡时间，单位毫秒 */
  duration: {
    type: Number,
    default: 300,
  },
  /** 防止滚动穿透，即不允许点击和滚动 */
  preventScrollThrough: {
    type: Boolean,
    default: true,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 是否展示 */
  visible: Boolean,
  /** 遮罩层级 */
  zIndex: {
    type: Number,
    default: 11000,
  },
  /** 点击遮罩时触发 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
};
