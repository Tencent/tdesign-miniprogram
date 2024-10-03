/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdNavbarProps } from './type';
const props: TdNavbarProps = {
  /** 是否添加动画效果 */
  animation: {
    type: Boolean,
    value: true,
  },
  /** 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack */
  delta: {
    type: Number,
    value: 1,
  },
  /** 是否固定在顶部 */
  fixed: {
    type: Boolean,
    value: true,
  },
  /** 是否展示左侧箭头 */
  leftArrow: {
    type: Boolean,
    value: false,
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
    value: true,
  },
};

export default props;
