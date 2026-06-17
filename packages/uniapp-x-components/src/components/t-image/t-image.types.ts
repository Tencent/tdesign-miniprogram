/**
 * Image 组件类型契约
 */

export type ImageShape = 'circle' | 'round' | 'square';

export type ImageMode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'widthFix'
  | 'heightFix'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

export interface ImageProps {
  /** 加载失败时显示的内容。'default'=默认风格；其他=普通文本 */
  error?: string;
  /** 高度，默认单位 px */
  height?: string | number;
  /** 是否开启图片懒加载 */
  lazy?: boolean;
  /** 加载态内容。'default'=默认风格；其他=普通文本 */
  loading?: string;
  /** 图片裁剪、缩放的模式 */
  mode?: ImageMode;
  /** 图片圆角类型 */
  shape?: ImageShape;
  /** 是否长按显示菜单 */
  showMenuByLongpress?: boolean;
  /** 图片链接 */
  src?: string;
  /** 是否解析 webP */
  webp?: boolean;
  /** 宽度，默认单位 px */
  width?: string | number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface ImageEmits {
  (e: 'error', event: UniEvent): void;
  (e: 'load', event: UniEvent): void;
}
