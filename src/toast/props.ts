/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */

import { TdToastProps } from './type';
const props: TdToastProps = {
  /** 图标排列方式 */
  direction: {
    type: String,
    value: 'row',
  },
  /** 弹窗显示毫秒数 */
  duration: {
    type: Number,
    value: 2000,
  },
  /** 组件类名 */
  externalClasses: {
    type: Array,
  },
  /** 自定义图标 */
  icon: {
    type: String,
    value: '',
  },
  /** 弹窗显示文字 */
  message: {
    type: String,
  },
  /** 弹窗展示位置 */
  placement: {
    type: String,
    value: 'middle',
  },
  /** 防止滚动穿透，即不允许点击和滚动 */
  preventScrollThrough: {
    type: Boolean,
    value: false,
  },
  /** 提示类型 */
  theme: {
    type: String,
  },
};

export default props;
