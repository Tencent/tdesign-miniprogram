/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdRateProps } from './type';
export default {
  /** 是否允许半选 */
  allowHalf: Boolean,
  /** 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB'] */
  color: {
    type: [String, Array],
    default: '#ED7B2F' as TdRateProps['color'],
  },
  /** 评分的数量 */
  count: {
    type: Number,
    default: 5,
  },
  /** 是否禁用评分 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 评分图标的间距 */
  gap: {
    type: [String, Number],
    default: 8 as TdRateProps['gap'],
  },
  /** 自定义评分图标，[选中图标，未选中图标] */
  icon: {
    type: [String, Array],
  },
  /** 定义图标前缀 */
  iconPrefix: {
    type: String,
    default: undefined,
  },
  /** 选择评分弹框的位置，值为空字符表示不显示评分弹框 */
  placement: {
    type: String,
    default: 'top' as TdRateProps['placement'],
    validator(val: TdRateProps['placement']): boolean {
      if (!val) return true;
      return ['top', 'bottom', ''].includes(val);
    },
  },
  /** 是否显示对应的辅助文字 */
  showText: Boolean,
  /** 评分图标的大小 */
  size: {
    type: [String, Number],
    default: '24px' as TdRateProps['size'],
  },
  /** 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分'] */
  texts: {
    type: Array,
    default: (): TdRateProps['texts'] => [],
  },
  /** 选择评分的值 */
  value: {
    type: Number,
    default: 0,
  },
  /** 选择评分的值，非受控属性 */
  defaultValue: {
    type: Number,
    default: 0,
  },
  /** 已废弃。形状类型，有描边类型和填充类型两种 */
  variant: {
    type: String,
    default: 'outline' as TdRateProps['variant'],
    validator(val: TdRateProps['variant']): boolean {
      if (!val) return true;
      return ['outline', 'filled'].includes(val);
    },
  },
  /** 评分数改变时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
