/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ImageProps } from '../image/index';

export interface TdUploadProps {
  /**
   * 添加按钮内容。值为空，使用默认图标渲染；值为 slot 则表示使用插槽渲染；其他值无效。
   */
  addContent?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否允许重复上传相同文件名的文件
   * @default false
   */
  allowUploadDuplicateFile?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)
   */
  config?: {
    type: ObjectConstructor;
    value?: UploadMpConfig;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
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
   * 已上传文件列表
   */
  files?: {
    type: ArrayConstructor;
    value?: Array<UploadFile>;
  };
  /**
   * 已上传文件列表，非受控属性
   */
  defaultFiles?: {
    type: ArrayConstructor;
    value?: Array<UploadFile>;
  };
  /**
   * upload组件每行上传图片列数以及图片的宽度和高度
   */
  gridConfig?: {
    type: ObjectConstructor;
    value?: { column?: number; width?: number; height?: number };
  };
  /**
   * 预览窗格的 `gutter` 大小，单位 rpx
   * @default 16
   */
  gutter?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 透传 Image 组件全部属性
   */
  imageProps?: {
    type: ObjectConstructor;
    value?: ImageProps;
  };
  /**
   * 用于控制文件上传数量，值为 0 则不限制
   * @default 0
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 支持上传的文件类型，图片或视频
   * @default ['image', 'video']
   */
  mediaType?: {
    type: ArrayConstructor;
    value?: Array<MediaType>;
  };
  /**
   * 自定义上传方法
   */
  requestMethod?: {
    type: null;
    value?: null;
  };
  /**
   * 图片文件大小限制，单位 KB。可选单位有：`'B' | 'KB' | 'MB' | 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }`
   */
  sizeLimit?: {
    type: null;
    value?: number | SizeLimitObj;
  };
  /**
   * 来源
   * @default media
   */
  source?: {
    type: StringConstructor;
    value?: 'media' | 'messageFile';
  };
  /**
   * 是否支持拖拽排序
   */
  draggable?: {
    type: null;
    value?: boolean | Draggable;
  };

  /**
   * 过渡参数
   */
  transition?: {
    type: ObjectConstructor;
    value: Transition;
  };
}

export type UploadMpConfig = ImageConfig | VideoConfig;

export interface ImageConfig {
  count?: number;
  sizeType?: Array<SizeTypeValues>;
  sourceType?: Array<SourceTypeValues>;
}

export type SizeTypeValues = 'original' | 'compressed';

export type SourceTypeValues = 'album' | 'camera';

export interface VideoConfig {
  sourceType?: Array<SourceTypeValues>;
  compressed?: boolean;
  maxDuration?: number;
  camera?: 'back' | 'front';
}

export interface UploadDisplayDragEvents {
  onDrop?: (event: DragEvent) => void;
  onDragenter?: (event: DragEvent) => void;
  onDragover?: (event: DragEvent) => void;
  onDragleave?: (event: DragEvent) => void;
}

export interface UploadFile {
  url: string;
  name?: string;
  size?: number;
  type?: 'image' | 'video';
  percent?: number;
  status: 'loading' | 'reload' | 'failed' | 'done';
  thumb?: string;
}

export type MediaType = 'image' | 'video';

export interface SizeLimitObj {
  size: number;
  unit: SizeUnit;
  message?: string;
}

export type SizeUnitArray = ['B', 'KB', 'MB', 'GB'];

export type SizeUnit = SizeUnitArray[number];

export interface Draggable {
  vibrate?: boolean;
  collisionVibrate?: boolean;
}

export interface Transition {
  backTransition?: boolean;
  duration?: number;
  timingFunction?: string;
}
