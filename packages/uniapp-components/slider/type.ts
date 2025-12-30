/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSliderProps {
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 滑块当前值文本。<br />值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br />值为 `${value}%` 则表示组件会根据占位符渲染文案；<br />值类型为函数时，参数 `value` 标识滑块值，参数 `position=start` 表示范围滑块的起始值，参数 `position=end` 表示范围滑块的终点值
   * @default false
   */
  label?: string | boolean;
  /**
   * 刻度标记，示例：`[0, 10, 40, 200]` 或者 `{ 5:  '5¥', 10: '10%' }`
   * @default {}
   */
  marks?: Record<number, string> | Array<number>;
  /**
   * 滑块范围最大值
   * @default 100
   */
  max?: number;
  /**
   * 滑块范围最小值
   * @default 0
   */
  min?: number;
  /**
   * 双游标滑块
   * @default false
   */
  range?: boolean;
  /**
   * 是否边界值
   * @default false
   */
  showExtremeValue?: boolean;
  /**
   * 步长
   * @default 1
   */
  step?: number;
  /**
   * 滑块风格
   * @default default
   */
  theme?: 'default' | 'capsule';
  /**
   * 滑块值
   * @default 0
   */
  value?: SliderValue;
  /**
   * 滑块值，非受控属性
   * @default 0
   */
  defaultValue?: SliderValue;
  /**
   * 是否是垂直的滑块（渲染垂直滑块时，默认高度为400rpx，可通过修改`--td-slider-bar-height`来自定义高度）
   * @default false
   */
  vertical?: boolean;
  /**
   * 滑块值变化时触发
   */
  onChange?: (context: { value: SliderValue }) => void;
  /**
   * 结束拖动时触发
   */
  onDragend?: (context: { value: SliderValue; e: TouchEvent }) => void;
  /**
   * 开始拖动时触发
   */
  onDragstart?: (context: { e: TouchEvent }) => void;
}

export type SliderValue = number | Array<number>;
