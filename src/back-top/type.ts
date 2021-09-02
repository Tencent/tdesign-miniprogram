/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-02 13:25:59
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
   * 图标
   * @default 'backtop'
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示组件
   * @default false
   */
  show?: {
    type: BooleanConstructor;
    value?: boolean;
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
  type?: {
    type: StringConstructor;
    value?: 'round' | 'half-round' | 'round-dark' | 'half-round-dark';
  };
}
