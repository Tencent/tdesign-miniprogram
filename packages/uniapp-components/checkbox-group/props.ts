/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCheckboxGroupProps } from './type';
export default {
  /** 是否开启无边框模式。优先级低于 Checkbox.borderless */
  borderless: Boolean,
  /** 是否禁用组件。优先级：Form.disabled < CheckboxGroup.disabled < Checkbox.disabled */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 用来定义 value / label / disabled 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 支持最多选中的数量 */
  max: {
    type: Number,
    default: undefined,
  },
  /** 统一设置内部复选框 HTML 属性 */
  name: {
    type: String,
    default: '',
  },
  /** 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」 */
  options: {
    type: Array,
    default: (): TdCheckboxGroupProps['options'] => [],
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: undefined,
  },
  /** -1 时代表独立，不再寻找 parent，用于头条小程序 */
  relationKey: {
    type: String,
    default: '',
  },
  /** 选中值 */
  value: {
    type: Array,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: Array,
  },
  /** 值变化时触发。`context` 表示当前点击项内容 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
