/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export default {
  /** 是否添加动画效果 */
  animation: {
    type: Boolean,
    default: true,
  },
  /** 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack */
  delta: {
    type: Number,
    default: 1,
  },
  /** 是否固定在顶部 */
  fixed: {
    type: Boolean,
    default: true,
  },
  /** 是否展示左侧箭头 */
  leftArrow: Boolean,
  /** 固定在顶部时是否开启占位 */
  placeholder: Boolean,
  /** 是否开启顶部安全区适配 */
  safeAreaInsetTop: {
    type: Boolean,
    default: true,
  },
  /** 页面标题 */
  title: {
    type: String,
  },
  /** 标题文字最大长度，超出的范围使用 `...` 表示 */
  titleMaxLength: {
    type: Number,
  },
  /** 是否显示 */
  visible: {
    type: Boolean,
    default: true,
  },
  /** 导航栏栏层级 */
  zIndex: {
    type: Number,
    default: 1,
  },
  /** navigateBack 执行完成后触发（失败或成功均会触发） */
  onComplete: {
    type: Function,
    default: () => ({}),
  },
  /** navigateBack 执行失败后触发 */
  onFail: {
    type: Function,
    default: () => ({}),
  },
  /** 点击左侧箭头时触发 */
  onGoBack: {
    type: Function,
    default: () => ({}),
  },
  /** 点击右侧图标时触发 */
  onRightClick: {
    type: Function,
    default: () => ({}),
  },
  /** navigateBack 执行成功后触发 */
  onSuccess: {
    type: Function,
    default: () => ({}),
  },
};
