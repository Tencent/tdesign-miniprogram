/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdAttachmentsProps {
  /**
   * 【讨论中】是否显示添加按钮
   * @default true
   */
  addable?: boolean;
  /**
   * 是否启用图片预览功能
   * @default true
   */
  imageViewer?: boolean;
  /**
   * 附件列表
   * @default []
   */
  items: FileItem[];
  /**
   * 是否显示删除按钮
   * @default true
   */
  removable?: boolean;
  /**
   * 点击添加按钮时触发
   * @default ''
   */
  onAdd?: () => void;
  /**
   * 点击文件时触发
   * @default ''
   */
  onFileClick?: (item: FileItem) => void;
  /**
   * 点击删除按钮时触发
   * @default ''
   */
  onRemove?: (item: FileItem, index: number) => void;
}

export interface FileItem {
  fileType: 'image' | 'video' | 'audio' | 'pdf' | 'doc' | 'ppt' | 'txt';
  name: string;
  url: string;
  size: number;
  status?: 'success' | 'fail' | 'pending' | 'error';
  progress?: number;
  errorMessage?: string;
  fileIcon?: string;
  width?: number;
  height?: number;
  mode?: 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'scaleToFill';
}
