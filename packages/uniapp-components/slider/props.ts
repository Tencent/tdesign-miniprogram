/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdSliderProps } from './type';
export default {
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值 */
  label: {
    type: [String, Boolean, Function],
    default: false as TdSliderProps['label'],
  },
  /** 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }` */
  marks: {
    type: [Object, Array],
    default: () => ({}) as TdSliderProps['marks'],
  },
  /** 滑块范围最大值 */
  max: {
    type: Number,
    default: 100,
  },
  /** 滑块范围最小值 */
  min: {
    type: Number,
    default: 0,
  },
  /** 双游标滑块 */
  range: Boolean,
  /** 是否边界值 */
  showExtremeValue: Boolean,
  /** 步长 */
  step: {
    type: Number,
    default: 1,
  },
  /** 滑块风格 */
  theme: {
    type: String,
    default: 'default' as TdSliderProps['theme'],
    validator(val: TdSliderProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'capsule'].includes(val);
    },
  },
  /** 滑块值 */
  value: {
    type: [Number, Array],
    default: 0 as TdSliderProps['value'],
  },
  /** 滑块值，非受控属性 */
  defaultValue: {
    type: [Number, Array],
    default: 0 as TdSliderProps['defaultValue'],
  },
  /** 是否是垂直的滑块（渲染垂直滑块时，默认高度为400rpx，可通过修改`--td-slider-bar-height`来自定义高度） */
  vertical: Boolean,
  /** 滑块值变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 结束拖动时触发 */
  onDragend: {
    type: Function,
    default: () => ({}),
  },
  /** 开始拖动时触发 */
  onDragstart: {
    type: Function,
    default: () => ({}),
  },
};
