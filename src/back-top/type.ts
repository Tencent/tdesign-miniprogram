/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdBackTopProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置外层元素、图标、文本内容等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-icon', 't-class-text'];
  };
  /**
   * 是否绝对定位固定到屏幕右下方
   * @default true
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图标
   * @default 'backtop'
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文案
   * @default ''
   */
  text?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 预设的样式类型
   * @default round
   */
  theme?: {
    type: StringConstructor;
    value?: 'round' | 'half-round' | 'round-dark' | 'half-round-dark';
  };
}
