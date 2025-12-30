/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdImageViewerProps } from './type';
export default {
  /** 遮罩的背景颜色 */
  backgroundColor: {
    type: String,
    default: '',
  },
  /** 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `close`，值为 `Object` 类型，表示透传至 `icon` ，不传表示不显示图标 */
  closeBtn: {
    type: [String, Boolean, Object],
    default: false as TdImageViewerProps['closeBtn'],
  },
  /** 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `delete`，值为 `Object` 类型，表示透传至 `icon`，不传表示不显示图标 */
  deleteBtn: {
    type: [String, Boolean, Object],
    default: false as TdImageViewerProps['deleteBtn'],
  },
  /** 图片数组 */
  images: {
    type: Array,
    default: (): TdImageViewerProps['images'] => [],
  },
  /** 初始化页码 */
  initialIndex: {
    type: Number,
    default: 0,
  },
  /** 是否开启图片懒加载。开启后会预加载当前图片、相邻图片 */
  lazy: {
    type: Boolean,
    default: true,
  },
  /** 是否显示页码 */
  showIndex: Boolean,
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 隐藏/显示预览 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /** 隐藏/显示预览，非受控属性 */
  defaultVisible: Boolean,
  /** 翻页时回调 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击操作按钮button或者overlay时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 点击删除操作按钮时触发 */
  onDelete: {
    type: Function,
    default: () => ({}),
  },
};
