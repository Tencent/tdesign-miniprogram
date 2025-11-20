/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdOverlayProps {
  /**
   * 遮罩层的背景色
   * @default ''
   */
  backgroundColor?: string;
  /**
   * 背景色过渡时间，单位毫秒
   * @default 300
   */
  duration?: number;
  /**
   * 防止滚动穿透，即不允许点击和滚动
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 是否展示
   * @default false
   */
  visible?: boolean;
  /**
   * 遮罩层级
   * @default 11000
   */
  zIndex?: number;
  /**
   * 点击遮罩时触发
   */
  onClick?: (context: { visible: boolean }) => void;
}
