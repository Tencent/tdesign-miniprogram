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
  /** 如果触发元素为 `fixed` 场景，需要显示指定 `fixed` 属性为 `true`，同时需在触发元素层添加 `t-popover-wrapper--fixed` 类，用于定位触发元素  */
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
