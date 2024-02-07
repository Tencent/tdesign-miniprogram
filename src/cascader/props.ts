/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCascaderProps } from './type';
const props: TdCascaderProps = {
  /** 关闭按钮 */
  closeBtn: {
    type: Boolean,
    value: true,
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 可选项数据源 */
  options: {
    type: Array,
    value: [],
  },
  /** 未选中时的提示文案 */
  placeholder: {
    type: String,
    value: '选择选项',
  },
  /** 每级展示的次标题 */
  subTitles: {
    type: Array,
    value: [],
  },
  /** 展示风格 */
  theme: {
    type: String,
    value: 'step',
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 选项值 */
  value: {
    type: null,
    value: null,
  },
  /** 选项值，非受控属性 */
  defaultValue: {
    type: null,
    value: null,
  },
  /** 是否展示 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
