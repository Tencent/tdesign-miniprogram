/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTabsProps } from './type';
const props: TdTabsProps = {
  /** 动画效果设置。其中 duration 表示动画时长。（单位：秒） */
  animation: {
    type: Object,
  },
  /** 激活下划线的模式 */
  bottomLineMode: {
    type: String,
    value: 'fixed',
  },
  /** 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名 */
  externalClasses: {
    type: Array,
  },
  /** 是否展示底部激活线条 */
  showBottomLine: {
    type: Boolean,
    value: true,
  },
  /** 选项卡头部空间是否均分 */
  spaceEvenly: {
    type: Boolean,
    value: true,
  },
  /** `1.1.10`。是否展示分割线 */
  split: {
    type: Boolean,
    value: true,
  },
  /** 是否开启粘性布局 */
  sticky: {
    type: Boolean,
    value: false,
  },
  /** 透传至 Sticky 组件 */
  stickyProps: {
    type: Object,
  },
  /** 是否可以滑动切换 */
  swipeable: {
    type: Boolean,
    value: true,
  },
  /** 标签的样式 */
  theme: {
    type: String,
    value: 'line',
  },
  /** 激活的选项卡值 */
  value: {
    type: null,
    value: null,
  },
  /** 激活的选项卡值，非受控属性 */
  defaultValue: {
    type: null,
  },
};

export default props;
