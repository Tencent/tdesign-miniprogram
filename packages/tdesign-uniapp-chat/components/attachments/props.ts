/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdAttachmentsProps } from './type';
export default {
  /** 【讨论中】是否显示添加按钮 */
  addable: {
    type: Boolean,
    default: true,
  },
  /** 是否启用图片预览功能 */
  imageViewer: {
    type: Boolean,
    default: true,
  },
  /** 附件列表 */
  items: {
    type: Array,
    default: (): TdAttachmentsProps['items'] => [],
    required: true,
  },
  /** 是否显示删除按钮 */
  removable: {
    type: Boolean,
    default: true,
  },
  /** 点击添加按钮时触发 */
  onAdd: {
    type: Function,
    default: () => ({}),
  },
  /** 点击文件时触发 */
  onFileClick: {
    type: Function,
    default: () => ({}),
  },
  /** 点击删除按钮时触发 */
  onRemove: {
    type: Function,
    default: () => ({}),
  },
};
