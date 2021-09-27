/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-27 16:32:51
 * */

export interface TdSkeletonProps {
  /**
   * 动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为空则表示没有动画
   */
  animation?: {
    type: StringConstructor;
    value?: 'gradient' | 'flashed';
    required?: boolean;
  };
  /**
   * 组件类名，分别用于设置组件外层元素、头像、图片、文本等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-avatar', 't-class-image', 't-class-text'];
    required?: boolean;
  };
  /**
   * 是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 文本行数，用于控制骨架图高度
   * @default 4
   */
  row?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 控制多个文本行的高度
   */
  rowHeight?: {
    type: ArrayConstructor;
    value?: Array<number>;
    required?: boolean;
  };
  /**
   * 控制多个文本行的宽度
   */
  rowWidth?: {
    type: ArrayConstructor;
    value?: Array<number>;
    required?: boolean;
  };
  /**
   * 骨架图风格，有基础、头像组合、图片组合等三种
   * @default text
   */
  theme?: {
    type: StringConstructor;
    value?: 'text' | 'avatar-text' | 'image-text-list';
    required?: boolean;
  };
}
