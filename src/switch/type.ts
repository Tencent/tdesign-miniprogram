/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSwitchProps {
  /**
   * 自定义颜色，[打开时的颜色，关闭时的颜色]。组件默认颜色为 ['#0052d9', 'rgba(0, 0, 0, .26']。示例：[blue, gray]
   */
  colors?: {
    type: ArrayConstructor;
    value?: string[];
  };
  /**
   * 开关内容，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]
   */
  customValue?: {
    type: ArrayConstructor;
    value?: Array<SwitchValue>;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 开关的标签
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否处于加载中状态
   * @default false
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 开关尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium' | 'large';
  };
  /**
   * 开关值
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | BooleanConstructor>;
    value?: SwitchValue;
  };
  /**
   * 开关值，非受控属性
   */
  defaultValue?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | BooleanConstructor>;
    value?: SwitchValue;
  };
}

export type SwitchValue = string | number | boolean;
