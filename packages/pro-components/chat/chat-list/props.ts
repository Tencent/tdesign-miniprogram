/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatProps } from './type';
const props: TdChatProps = {
  /** 自定义操作按钮的插槽 */
  actionbar: {
    type: null,
  },
  /** 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种 */
  animation: {
    type: String,
    value: 'skeleton',
  },
  /** 对话列表的数据 */
  data: {
    type: Array,
  },
  /** 对话布局形式，支持两侧对齐与左对齐 */
  layout: {
    type: String,
    value: 'both',
  },
  /** 是否表现为倒序 */
  reverse: {
    type: Boolean,
    value: true,
  },
  /** 滚动事件的回调 */
  onScroll: {
    type: Function,
  },
};

export default props;
