/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdSwitchProps } from './type';
export default {
  /** 用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、['open', 'close'] */
  customValue: {
    type: Array,
    default: (): TdSwitchProps['customValue'] => [true, false],
  },
  /** 是否禁用组件。优先级：Switch.disabled > Form.disabled */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 开关的图标；[打开时的图标，关闭时的图标] */
  icon: {
    type: Array,
    default: (): TdSwitchProps['icon'] => [],
  },
  /** 开关内容，[开启时内容，关闭时内容]。示例：['开', '关']  */
  label: {
    type: Array,
    default: (): TdSwitchProps['label'] => [],
  },
  /** 是否处于加载中状态 */
  loading: Boolean,
  /** 开关尺寸 */
  size: {
    type: String,
    default: 'medium' as TdSwitchProps['size'],
    validator(val: TdSwitchProps['size']): boolean {
      if (!val) return true;
      return ['small', 'medium', 'large'].includes(val);
    },
  },
  /** 开关值 */
  value: {
    type: [String, Number, Boolean],
  },
  /** 开关值，非受控属性 */
  defaultValue: {
    type: [String, Number, Boolean],
  },
  /** 数据发生变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
