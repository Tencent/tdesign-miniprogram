/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-06 16:09:14
 * */

export interface TdRateProps {
  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 评分图标的颜色
   * @default #ED7B2F
   */
  color?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 评分的数量
   * @default 5
   */
  count?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 是否禁用评分
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 禁用图标的颜色
   * @default #999999
   */
  disabledColor?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 评分图标的间距
   * @default 6
   */
  gap?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 是否为只读
   * @default false
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 是否显示辅助文字
   * @default false
   */
  showText?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 评分图标的大小
   * @default 48
   */
  size?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 自定义评分等级对应的辅助文字
   * @default ['极差', '失望', '一般', '满意', '惊喜'],
   */
  texts?: {
    type: ArrayConstructor;
    value?: Array<string>;
    required?: boolean;
  };
  /**
   * 选择评分的值
   */
  value: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 形状类型，有描边类型和填充类型两种
   * @default outline
   */
  variant?: {
    type: StringConstructor;
    value?: 'outline' | 'filled';
    required?: boolean;
  };
}
