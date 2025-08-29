/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdBackTopProps {
  /**
   * 是否绝对定位固定到屏幕右下方
   * @default true
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'`
   * @default true
   */
  icon?: {
    type: null;
    value?: string | boolean | object;
  };
  /**
   * 页面滚动距离
   * @default 0
   */
  scrollTop?: {
    type: NumberConstructor;
    value?: number;
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
  /**
   * 滚动高度达到此参数值才出现
   * @default 200
   */
  visibilityHeight?: {
    type: NumberConstructor;
    value?: number;
  };
}
