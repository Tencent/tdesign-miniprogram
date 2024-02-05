/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSliderProps } from './type';
const props: TdSliderProps = {
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，分别用于设置 组件外层元素、滑道底部、滑道激活态、滑道禁用态、游标 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值 */
  label: {
    type: null,
    value: false,
  },
  /** 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }` */
  marks: {
    type: null,
    value: {},
  },
  /** 滑块范围最大值 */
  max: {
    type: Number,
    value: 100,
  },
  /** 滑块范围最小值 */
  min: {
    type: Number,
    value: 0,
  },
  /** 双游标滑块 */
  range: {
    type: Boolean,
    value: false,
  },
  /** 是否边界值 */
  showExtremeValue: {
    type: Boolean,
    value: false,
  },
  /** 步长 */
  step: {
    type: Number,
    value: 1,
  },
  /** 滑块风格 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 滑块值 */
  value: {
    type: null,
    value: null,
  },
  /** 滑块值，非受控属性 */
  defaultValue: {
    type: null,
    value: 0,
  },
  /** 是否是垂直滑块 */
  vertical: {
    type: Boolean,
    value: false,
  },
};

export default props;
