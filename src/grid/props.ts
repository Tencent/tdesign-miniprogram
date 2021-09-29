/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-28 11:59:09
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
    type: Boolean,
    optionalTypes: [Object],
    value: false,
  },
  /** 组件类名，用于设置组件外层元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 间隔大小，`justify-content` 值为 `flex-start/center/flex-end` 时有效 */
  gutter: {
    type: String,
    optionalTypes: [Number],
  },
  /** 是否开启点击反馈 */
  hover: {
    type: Boolean,
    value: false,
  },
  /** 间隔分布模式 */
  justifyContent: {
    type: String,
    value: 'space-around',
  },
};

export default props;
