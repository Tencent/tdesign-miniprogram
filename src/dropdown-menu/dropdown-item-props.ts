/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDropdownItemProps } from './type';
const props: TdDropdownItemProps = {
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，分别用于设置 组件外层类名、菜单列、菜单列选项、菜单列选项标签、树形菜单、树形菜单列等类名 */
  externalClasses: {
    type: Array,
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 标题 */
  label: {
    type: String,
    value: '',
  },
  /** 是否多选 */
  multiple: {
    type: Boolean,
    value: false,
  },
  /** 选项数据 */
  options: {
    type: Array,
    value: [],
  },
  /** 选项分栏（1-3） */
  optionsColumns: {
    type: null,
    value: 1,
  },
  /** 已废弃。选项排列；不再支持 tree 布局，可与 treeSelect 配合使用 */
  optionsLayout: {
    type: String,
    value: 'columns',
  },
  /** 选中值 */
  value: {
    type: null,
    value: undefined,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: null,
    value: undefined,
  },
};

export default props;
