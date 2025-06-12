/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdUploadProps } from './type';
const props: TdUploadProps = {
  /** 添加按钮 */
  addBtn: {
    type: Boolean,
    value: true,
  },
  /** 添加按钮内容 */
  addContent: {
    type: String,
  },
  /** 是否允许重复上传相同文件名的文件 */
  allowUploadDuplicateFile: {
    type: Boolean,
    value: false,
  },
  /** 图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。[图片上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)。[视频上传](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html) */
  config: {
    type: Object,
  },
  /** 是否禁用组件 */
  disabled: {
    type: null,
    value: undefined,
  },
  /** 是否支持拖拽排序。长按时是否振动，碰撞时是否振动。示例一：`true`。示例二：`{ vibrate: true, collisionVibrate: true }` */
  draggable: {
    type: null,
  },
  /** 已上传文件列表 */
  files: {
    type: Array,
    value: null,
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
    value: 16,
  },
  /** 透传 Image 组件全部属性 */
  imageProps: {
    type: Object,
  },
  /** 用于控制文件上传数量，值为 0 则不限制 */
  max: {
    type: Number,
    value: 0,
  },
  /** 支持上传的文件类型，图片或视频 */
  mediaType: {
    type: Array,
    value: ['image', 'video'],
  },
  /** 是否支持图片预览，文件没有预览 */
  preview: {
    type: Boolean,
    value: true,
  },
  /** 移除按钮 */
  removeBtn: {
    type: Boolean,
    value: true,
  },
  /** 自定义上传方法 */
  requestMethod: {
    type: null,
  },
  /** 图片文件大小限制，默认单位 KB。可选单位有：`'B' | 'KB' | 'MB' | 'GB'`。示例一：`1000`。示例二：`{ size: 2, unit: 'MB', message: '图片大小不超过 {sizeLimit} MB' }` */
  sizeLimit: {
    type: null,
  },
  /** 来源 */
  source: {
    type: String,
    value: 'media',
  },
  /** 拖拽位置移动时的过渡参数,`duration`单位为ms */
  transition: {
    type: Object,
    value: { backTransition: true, duration: 300, timingFunction: 'ease' },
  },
};

export default props;
