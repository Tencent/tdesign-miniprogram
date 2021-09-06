/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-06 16:09:14
 * */

import { TdRateProps } from './type';
const props: TdRateProps = {
  /** 是否允许半选 */
  allowHalf: {
    type: Boolean,
    value: false,
  },
  /** 评分图标的颜色 */
  color: {
    type: String,
    value: '#ED7B2F',
  },
  /** 评分的数量 */
  count: {
    type: Number,
    value: 5,
  },
  /** 是否禁用评分 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 禁用图标的颜色 */
  disabledColor: {
    type: String,
    value: '#999999',
  },
  /** 评分图标的间距 */
  gap: {
    type: Number,
    value: 6,
  },
  /** 是否为只读 */
  readonly: {
    type: Boolean,
    value: false,
  },
  /** 是否显示辅助文字 */
  showText: {
    type: Boolean,
    value: false,
  },
  /** 评分图标的大小 */
  size: {
    type: String,
    value: '48',
  },
  /** 自定义评分等级对应的辅助文字 */
  texts: {
    type: Array,
    value: ['极差', '失望', '一般', '满意', '惊喜'],
  },
  /** 选择评分的值 */
  value: {
    type: Number,
    required: true,
  },
  /** 形状类型，有描边类型和填充类型两种 */
  variant: {
    type: String,
    value: 'outline',
  },
};

export default props;
