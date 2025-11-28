/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdTreeSelectProps } from './type';
export default {
  /** 自定义选中值，优先级高于 `value` */
  customValue: {
    type: [String, Number, Array],
  },
  /** 高度，默认单位为 px */
  height: {
    type: [String, Number],
    default: 336 as TdTreeSelectProps['height'],
  },
  /** 用来定义 `value / label / disabled / children` 在 `options` 数据中对应的字段别名，示例：`{ value: 'key', label: 'name', children: 'list' }` */
  keys: {
    type: Object,
  },
  /** 是否允许多选 */
  multiple: Boolean,
  /** 选项 */
  options: {
    type: Array,
    default: (): TdTreeSelectProps['options'] => [],
  },
  /** 选中值 */
  value: {
    type: [String, Number, Array],
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: [String, Number, Array],
  },
  /** 点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
