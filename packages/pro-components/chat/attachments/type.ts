/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface FileItem {
  /**
   * 文件类型
   */
  fileType: 'image' | 'pdf' | 'doc' | 'ppt' | 'txt';
  /**
   * 文件名
   */
  name: string;
  /**
   * 文件URL
   */
  url: string;
  /**
   * 文件大小(KB)
   */
  size: number;
  /**
   * 上传状态
   */
  status?: 'success' | 'fail' | 'pending' | 'error';
  /**
   * 上传进度(0-100)
   */
  progress?: number;
  /**
   * 错误信息
   */
  errorMessage?: string;
  /**
   * 自定义文件图标URL
   */
  fileIcon?: string;
  /**
   * 图片宽度
   */
  width?: number;
  /**
   * 图片高度
   */
  height?: number;
  /**
   * 图片缩放模式
   */
  mode?: 'aspectFit' | 'aspectFill' | 'widthFix' | 'heightFix' | 'scaleToFill';
}
export interface TdChatAttachmentsProps {
  /**
   * 文件列表数据，每个元素需包含fileType/name/url/size等属性
   * @default []
   */
  items?: {
    type: ArrayConstructor;
    value?: FileItem[];
  };
  /**
   * 是否显示删除按钮
   * @default true
   */
  removable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否启用图片预览功能
   * @default true
   */
  imageViewer?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示添加按钮
   * @default true
   */
  addable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
