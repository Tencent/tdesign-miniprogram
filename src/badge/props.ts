/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-13 20:35:53
 * */

import { TdBadgeProps } from './type';
const props: TdBadgeProps = {
  /** 颜色 */
  color: {
    type: String,
    value: '',
  },
  /** 徽标内容 */
  content: {
    type: String,
  },
  /** 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+ */
  count: {
    type: String,
    optionalTypes: [Number],
  },
  /** 是否为红点 */
  dot: {
    type: Boolean,
    value: false,
  },
  /** 封顶的数字值 */
  maxCount: {
    type: Number,
    value: 99,
  },
  /** 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem'] */
  offset: {
    type: Array,
  },
  /** 形状 */
  shape: {
    type: String,
    value: 'circle',
  },
  /** 当数值为 0 时，是否展示徽标数字 */
  showZero: {
    type: Boolean,
    value: false,
  },
  /** 尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
};

export default props;
