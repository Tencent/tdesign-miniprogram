/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdImageProps as ImageProps } from '../image/type';

export interface TdUploadProps {
  /**
   * 添加按钮
   * @default true
   */
  addBtn?: boolean;
  /**
   * 添加按钮内容
   */
  addContent?: string;
  /**
   * 是否允许重复上传相同文件名的文件
   * @default false
   */
  allowUploadDuplicateFile?: boolean;
  /**
   * 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)
   */
  config?: UploadMpConfig;
  /**
   * 是否禁用组件
   */
  disabled?: boolean;
  /**
   * 是否支持拖拽排序。长按时是否振动，碰撞时是否振动。示例一：`true`。示例二：`{ vibrate: true, collisionVibrate: true }`
   */
  draggable?: boolean | { vibrate?: boolean; collisionVibrate?: boolean };
  /**
   * 已上传文件列表
   */
  files?: Array<UploadFile>;
  /**
   * 已上传文件列表，非受控属性
   */
  defaultFiles?: Array<UploadFile>;
  /**
   * upload组件每行上传图片列数以及图片的宽度和高度
   */
  gridConfig?: { column?: number; width?: number; height?: number };
  /**
   * 预览窗格的 `gutter` 大小，单位 rpx
   * @default 16
   */
  gutter?: number;
  /**
   * 透传 Image 组件全部属性
   */
  imageProps?: ImageProps;
  /**
   * 用于控制文件上传数量，值为 0 则不限制
   * @default 0
   */
  max?: number;
  /**
   * 支持上传的文件类型，图片或视频
   * @default ['image', 'video']
   */
  mediaType?: Array<MediaType>;
  /**
   * 是否支持图片预览，文件没有预览
   * @default true
   */
  preview?: boolean;
  /**
   * 移除按钮
   * @default true
   */
  removeBtn?: boolean;
  /**
   * 自定义上传方法
   */
  requestMethod?: any;
  /**
   * 图片文件大小限制，默认单位 KB。可选单位有：`'B' | 'KB' | 'MB' | 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }`
   */
  sizeLimit?: number | SizeLimitObj;
  /**
   * 来源
   * @default media
   */
  source?: 'media' | 'messageFile';
  /**
   * 拖拽位置移动时的过渡参数,`duration`单位为ms
   * @default `{backTransition: true, duration: 300, timingFunction: 'ease'}`
   */
  transition?: Transition;
  /**
   * 选择后触发，仅包含本次选择的照片；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size`选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述
   */
  onAdd?: (context: { files: MediaContext }) => void;
  /**
   * 点击已选文件时触发；常用于重新上传
   */
  onClick?: (context: { index: number; file: VideoContext | ImageContext }) => void;
  /**
   * 上传成功或失败后触发
   */
  onComplete?: () => void;
  /**
   * 拖拽结束后触发，包含所有上传的文件（拖拽后的文件顺序）；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size` 选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述
   */
  onDrop?: (context: { files: MediaContext }) => void;
  /**
   * 上传失败后触发
   */
  onFail?: () => void;
  /**
   * 移除文件时触发
   */
  onRemove?: (context: { index: number; file: UploadFile }) => void;
  /**
   * 选择文件或图片之后，上传之前，触发该事件。<br />`files` 表示之前已经上传完成的文件列表。<br />`currentSelectedFiles` 表示本次上传选中的文件列表
   */
  onSelectChange?: (context: { files: MediaContext[]; currentSelectedFiles: MediaContext[] }) => void;
  /**
   * 上传成功后触发，包含所有上传的文件；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size`选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述
   */
  onSuccess?: (context: { files: MediaContext }) => void;
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

export interface UploadFile {
  url: string;
  name?: string;
  size?: number;
  type?: 'image' | 'video';
  percent?: number;
  status: 'loading' | 'reload' | 'failed' | 'done';
}

export type MediaType = 'image' | 'video';

export interface SizeLimitObj {
  size: number;
  unit: SizeUnit;
  message?: string;
}

export type SizeUnitArray = ['B', 'KB', 'MB', 'GB'];

export type SizeUnit = SizeUnitArray[number];

export interface Transition {
  backTransition?: boolean;
  duration?: number;
  timingFunction?: string;
}

export type MediaContext = VideoContext[] | ImageContext[];

export interface VideoContext {
  name?: string;
  type?: string;
  url?: string;
  duration?: number;
  size?: number;
  width?: number;
  height?: number;
  thumb: string;
  progress: number;
}

export interface ImageContext {
  name: string;
  type: string;
  url: string;
  size: number;
  width: number;
  height: number;
  progress: number;
}
