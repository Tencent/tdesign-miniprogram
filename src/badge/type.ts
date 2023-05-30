/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
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
   * 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义
   * @default ''
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染
   * @default 0
   */
  count?: {
    type: null;
    value?: string | number;
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
   * 组件类名，分别用于设置外层元素、默认内容、右上角内容等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-count'];
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
    value?: 'circle' | 'square' | 'bubble' | 'ribbon';
  };
  /**
   * 当数值为 0 时，是否展示徽标
   * @default false
   */
  showZero?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: 'medium' | 'large';
  };
}
