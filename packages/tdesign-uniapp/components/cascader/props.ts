/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCascaderProps } from './type';
export default {
  /** 父子节点选中状态不再关联，可各自选中或取消 */
  checkStrictly: Boolean,
  /** 关闭按钮 */
  closeBtn: {
    type: Boolean,
    default: true as TdCascaderProps['closeBtn'],
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 可选项数据源 */
  options: {
    type: Array,
    default: (): TdCascaderProps['options'] => [],
  },
  /** 未选中时的提示文案 */
  placeholder: {
    type: String,
    default: '选择选项',
  },
  /** 每级展示的次标题 */
  subTitles: {
    type: Array,
    default: (): TdCascaderProps['subTitles'] => [],
  },
  /** 展示风格 */
  theme: {
    type: String,
    default: 'step' as TdCascaderProps['theme'],
    validator(val: TdCascaderProps['theme']): boolean {
      if (!val) return true;
      return ['step', 'tab'].includes(val);
    },
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 选项值 */
  value: {
    type: [String, Number],
  },
  /** 选项值，非受控属性 */
  defaultValue: {
    type: [String, Number],
  },
  /** 是否展示 */
  visible: Boolean,
  /** 值发生变更时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 选择后触发 */
  onPick: {
    type: Function,
    default: () => ({}),
  },
};
