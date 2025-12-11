/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPopoverProps } from './type';
const props: TdPopoverProps = {
  /** 是否在点击外部元素后关闭菜单  */
  closeOnClickOutside: {
    type: Boolean,
    value: true,
  },
  /** 确认框内容 */
  content: {
    type: String,
  },
  /** 如果 popover 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true */
  fixed: {
    type: Boolean,
    value: false,
  },
  /** 浮层出现位置 */
  placement: {
    type: String,
    value: 'top',
  },
  /** 是否显示浮层箭头 */
  showArrow: {
    type: Boolean,
    value: true,
  },
  /** 弹出气泡主题 */
  theme: {
    type: String,
    value: 'dark',
  },
  /** 是否显示气泡确认框 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 是否显示气泡确认框，非受控属性 */
  defaultVisible: {
    type: Boolean,
  },
};

export default props;
