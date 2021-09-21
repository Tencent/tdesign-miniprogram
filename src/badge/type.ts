/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-21 20:02:12
 * */

export interface TdBadgeProps {
  /**
   * 颜色
   * @default ''
   */
  color?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 徽标内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 徽标右上角内容。如：3/99+
   * @default 0
   */
  count?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否为红点
   * @default false
   */
  dot?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否存在slot
   * @default false
   */
  hasSlot?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 封顶的数字值
   * @default 99
   */
  maxCount?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']
   * @default [0,0]
   */
  offset?: {
    type: ArrayConstructor;
    value?: Array<string | number>;
  };
  /**
   * 形状
   * @default circle
   */
  shape?: {
    type: StringConstructor;
    value?: 'circle' | 'round' | 'ribbon';
  };
  /**
   * 尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium';
  };
  /**
   * 当数值为 0 时，是否展示徽标
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
