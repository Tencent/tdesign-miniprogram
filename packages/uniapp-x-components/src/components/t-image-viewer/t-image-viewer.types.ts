/**
 * ImageViewer 组件类型契约
 *
 * uts 端简化：
 *  - closeBtn / deleteBtn 仅支持 boolean | string（图片 URL）；不支持 Object 透传
 *  - lazy / maxZoom 暂不实际生效（仅类型保留）
 */

export interface ImageViewerProps {
  /** 遮罩的背景颜色 */
  backgroundColor?: string;
  /** 关闭按钮：true=显示默认；string=自定义图片 URL；false=不显示 */
  closeBtn?: boolean | string;
  /** 删除按钮：true=显示默认；string=自定义图片 URL；false=不显示 */
  deleteBtn?: boolean | string;
  /** 图片数组 */
  images?: string[];
  /** 初始页码 */
  initialIndex?: number;
  /** 是否懒加载 */
  lazy?: boolean;
  /** 图片最大放大比例（uts 端暂不生效） */
  maxZoom?: number;
  /** 是否显示页码 */
  showIndex?: boolean;
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar?: boolean;
  /** 隐藏/显示预览 */
  visible?: boolean | null;
  /** 隐藏/显示预览，非受控属性 */
  defaultVisible?: boolean;
  /** 透传额外类名 */
  customClass?: string;
}

export interface ImageViewerEmits {
  (e: 'change', index: number): void;
  (e: 'close', payload: { index: number; visible: boolean; trigger: 'overlay' | 'close-btn' }): void;
  (e: 'delete', index: number): void;
  (e: 'update:visible', visible: boolean): void;
}
