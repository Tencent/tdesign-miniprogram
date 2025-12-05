/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdUploadProps } from './type';
export default {
  /** 添加按钮 */
  addBtn: {
    type: Boolean,
    default: true,
  },
  /** 添加按钮内容 */
  addContent: {
    type: String,
  },
  /** 是否允许重复上传相同文件名的文件 */
  allowUploadDuplicateFile: Boolean,
  /** 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html) */
  config: {
    type: Object,
  },
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 是否支持拖拽排序。长按时是否振动，碰撞时是否振动。示例一：`true`。示例二：`{ vibrate: true, collisionVibrate: true }` */
  draggable: {
    type: [Boolean, Object],
  },
  /** 已上传文件列表 */
  files: {
    type: Array,
  },
  /** 已上传文件列表，非受控属性 */
  defaultFiles: {
    type: Array,
  },
  /** upload组件每行上传图片列数以及图片的宽度和高度 */
  gridConfig: {
    type: Object,
  },
  /** 预览窗格的 `gutter` 大小，单位 rpx */
  gutter: {
    type: Number,
    default: 16,
  },
  /** 透传 Image 组件全部属性 */
  imageProps: {
    type: Object,
  },
  /** 用于控制文件上传数量，值为 0 则不限制 */
  max: {
    type: Number,
    default: 0,
  },
  /** 支持上传的文件类型，图片或视频 */
  mediaType: {
    type: Array,
    default: ['image', 'video'],
  },
  /** 是否支持图片预览，文件没有预览 */
  preview: {
    type: Boolean,
    default: true,
  },
  /** 移除按钮 */
  removeBtn: {
    type: Boolean,
    default: true,
  },
  /** 自定义上传方法 */
  requestMethod: {
    type: Function,
  },
  /** 图片文件大小限制，默认单位 KB。可选单位有：`'B' | 'KB' | 'MB' | 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }` */
  sizeLimit: {
    type: [Number, Object],
  },
  /** 来源 */
  source: {
    type: String,
    default: 'media' as TdUploadProps['source'],
    validator(val: TdUploadProps['source']): boolean {
      if (!val) return true;
      return ['media', 'messageFile'].includes(val);
    },
  },
  /** 拖拽位置移动时的过渡参数,`duration`单位为ms */
  transition: {
    type: Object,
    default: () => ({ backTransition: true, duration: 300, timingFunction: 'ease' }),
  },
  /** 选择后触发，仅包含本次选择的照片；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size`选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述 */
  onAdd: {
    type: Function,
    default: () => ({}),
  },
  /** 点击已选文件时触发；常用于重新上传 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
  /** 上传成功或失败后触发 */
  onComplete: {
    type: Function,
    default: () => ({}),
  },
  /** 拖拽结束后触发，包含所有上传的文件（拖拽后的文件顺序）；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size` 选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述 */
  onDrop: {
    type: Function,
    default: () => ({}),
  },
  /** 上传失败后触发 */
  onFail: {
    type: Function,
    default: () => ({}),
  },
  /** 移除文件时触发 */
  onRemove: {
    type: Function,
    default: () => ({}),
  },
  /** 选择文件或图片之后，上传之前，触发该事件。<br />`files` 表示之前已经上传完成的文件列表。<br />`currentSelectedFiles` 表示本次上传选中的文件列表 */
  onSelectChange: {
    type: Function,
    default: () => ({}),
  },
  /** 上传成功后触发，包含所有上传的文件；`url` 表示选定视频的临时文件路径 (本地路径)。`duration` 表示选定视频的时间长度。`size`选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述 */
  onSuccess: {
    type: Function,
    default: () => ({}),
  },
};
