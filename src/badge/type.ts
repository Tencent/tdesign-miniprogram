/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-13 20:35:53
 * */

export interface TdBadgeProps {
  /**
   * 颜色
   * @default ''
   */
  color?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 徽标内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+
   */
  count?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
    required?: boolean;
  };
  /**
   * 是否为红点
   * @default false
   */
  dot?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 封顶的数字值
   * @default 99
   */
  maxCount?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']
   */
  offset?: {
    type: ArrayConstructor;
    value?: Array<string | number>;
    required?: boolean;
  };
  /**
   * 形状
   * @default circle
   */
  shape?: {
    type: StringConstructor;
    value?: 'circle' | 'round';
    required?: boolean;
  };
  /**
   * 当数值为 0 时，是否展示徽标数字
   * @default false
   */
  showZero?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium';
    required?: boolean;
  };
}
