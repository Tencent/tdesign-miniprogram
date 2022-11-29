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
  /** 评分的数量 */
  count: {
    type: Number,
    value: 5,
  },
  /** 自定义组件样式 */
  style: {
    type: String,
    value: '',
  },
  /** 是否禁用评分 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，分别用于设置 组件外层类名、评分图标类名、辅助文字类名。 */
  externalClasses: {
    type: Array,
  },
  /** 评分图标的间距，默认单位为 `px`, 示例：`8` */
  gap: {
    type: Number,
    value: 8,
  },
  /** 是否显示对应的辅助文字 */
  showText: {
    type: Boolean,
    value: false,
  },
  /** 评分图标的大小，默认单位为 `px`，示例：`20` */
  size: {
    type: String,
    value: '20',
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
  /** 形状类型，有描边类型和填充类型两种 */
  variant: {
    type: String,
    value: 'outline',
  },
};

export default props;
