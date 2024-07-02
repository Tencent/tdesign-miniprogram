/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdOverlayProps {
  /**
   * 遮罩层的背景色
   * @default ''
   */
  backgroundColor?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 背景色过渡时间，单位毫秒
   * @default 300
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 防止滚动穿透，即不允许点击和滚动
   * @default true
   */
  preventScrollThrough?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否展示
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 遮罩层级
   * @default 11000
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}
