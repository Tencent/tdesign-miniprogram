/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRateProps } from './type';
const props: TdRateProps = {
  /** 是否允许半选 */
  allowHalf: {
    type: Boolean,
    value: false,
  },
  /** 评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：['#ED7B2F', '#E3E6EB'] */
  color: {
    type: null,
    value: '#ED7B2F',
  },
  /** 评分的数量 */
  count: {
    type: Number,
    value: 5,
  },
  /** 是否禁用评分 */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 评分图标的间距 */
  gap: {
    type: null,
    value: 8,
  },
  /** 自定义评分图标，[选中图标，未选中图标] */
  icon: {
    type: null,
  },
  /** 定义图标前缀 */
  iconPrefix: {
    type: String,
    value: undefined,
  },
  /** 选择评分弹框的位置，值为空字符表示不显示评分弹窗 */
  placement: {
    type: String,
    value: 'top',
  },
  /** 是否显示对应的辅助文字 */
  showText: {
    type: Boolean,
    value: false,
  },
  /** 评分图标的大小 */
  size: {
    type: String,
    value: '24px',
  },
  /** 评分等级对应的辅助文字。组件内置默认值为：['极差', '失望', '一般', '满意', '惊喜']。自定义值示例：['1分', '2分', '3分', '4分', '5分'] */
  texts: {
    type: Array,
    value: [],
  },
  /** 选择评分的值 */
  value: {
    type: Number,
    value: null,
  },
  /** 选择评分的值，非受控属性 */
  defaultValue: {
    type: Number,
    value: 0,
  },
  /** 已废弃。形状类型，有描边类型和填充类型两种 */
  variant: {
    type: String,
    value: 'outline',
  },
};

export default props;
