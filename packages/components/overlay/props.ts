/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdOverlayProps } from './type';
const props: TdOverlayProps = {
  /** 遮罩层的背景色 */
  backgroundColor: {
    type: String,
    value: '',
  },
  /** 背景色过渡时间，单位毫秒 */
  duration: {
    type: Number,
    value: 300,
  },
  /** 防止滚动穿透，即不允许点击和滚动 */
  preventScrollThrough: {
    type: Boolean,
    value: true,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: {
    type: Boolean,
    value: false,
  },
  /** 是否展示 */
  visible: {
    type: Boolean,
    value: false,
  },
  /** 遮罩层级 */
  zIndex: {
    type: Number,
    value: 11000,
  },
};

export default props;
