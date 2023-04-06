/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdGridProps } from './type';
const props: TdGridProps = {
  /** 内容对齐方式 */
  align: {
    type: String,
    value: 'center',
  },
  /** 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式 */
  border: {
    type: null,
    value: false,
  },
  /** 每一行的列数量；为 0 时等于固定大小 */
  column: {
    type: Number,
    value: 4,
  },
  /** 组件类名，用于设置组件外层元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 间隔大小 */
  gutter: {
    type: Number,
  },
  /** 是否开启点击反馈 */
  hover: {
    type: Boolean,
    value: false,
  },
  /** 宫格的风格 */
  theme: {
    type: String,
    value: 'default',
  },
};

export default props;
