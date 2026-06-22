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
  /**  自定义过滤函数。返回 true 表示匹配，未设置时使用内置匹配规则：对路径中所有 label 拼接后做大小写不敏感的 includes 匹配 */
  filter: {
    type: Function,
  },
  /** 搜索框占位符描述文本 */
  filterPlaceholder: {
    type: String,
    default: '',
  },
  /** 是否可搜索，开启后顶部会展示一个搜索框  */
  filterable: Boolean,
  /** 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 可选项数据源 */
  options: {
    type: Array,
    default: (): TdCascaderProps['options'] => [],
  },
  /** 未选中时的提示文案。组件内置默认值为：'选择选项' */
  placeholder: {
    type: String,
    default: '',
  },
  /** 透传 Popup 组件全部属性 */
  popupProps: {
    type: Object,
    default: () => ({}),
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
