/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdRadioProps<T = RadioValue> {
  /**
   * 是否允许取消选中
   * @default false
   */
  allowUncheck?: boolean;
  /**
   * 是否为块级元素
   * @default true
   */
  block?: boolean;
  /**
   * 是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * 是否选中，非受控属性
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * 单选内容
   */
  content?: string;
  /**
   * 是否禁用组件内容（content）触发选中
   * @default false
   */
  contentDisabled?: boolean;
  /**
   * 是否为禁用态
   */
  disabled?: boolean;
  /**
   * 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽
   * @default 'circle'
   */
  icon?: 'circle' | 'line' | 'dot' | Array<string>;
  /**
   * 主文案
   */
  label?: string;
  /**
   * 内容最大行数限制
   * @default 5
   */
  maxContentRow?: number;
  /**
   * 主文案最大行数限制
   * @default 3
   */
  maxLabelRow?: number;
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: string;
  /**
   * 复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定
   */
  placement?: 'left' | 'right';
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * -1 时代表独立，不再寻找 parent，用于头条小程序
   * @default ''
   */
  relationKey?: string;
  /**
   * 单选按钮的值
   * @default false
   */
  value?: T;
  /**
   * 值变化时触发
   */
  onChange?: (context: { checked: boolean }) => void;
}

export type RadioValue = string | number | boolean;
