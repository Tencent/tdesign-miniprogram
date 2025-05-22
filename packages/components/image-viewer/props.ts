/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdImageViewerProps } from './type';
const props: TdImageViewerProps = {
  /** 遮罩的背景颜色 */
  backgroundColor: {
    type: String,
    value: 'rgba(0, 0, 0, 1)',
  },
  /** 是否显示关闭操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `close`，值为 `Object` 类型，表示透传至 `icon` ，不传表示不显示图标 */
  closeBtn: {
    type: null,
    value: false,
  },
  /** 是否显示删除操作，前提需要开启页码。值为字符串表示图标名称，值为 `true` 表示使用默认图标 `delete`，值为 `Object` 类型，表示透传至 `icon`，不传表示不显示图标 */
  deleteBtn: {
    type: null,
    value: false,
  },
  /** 图片数组 */
  images: {
    type: Array,
    value: [],
  },
  /** 初始化页码 */
  initialIndex: {
    type: Number,
    value: 0,
  },
  /** 是否显示页码 */
  showIndex: {
    type: Boolean,
    value: false,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: {
    type: Boolean,
    value: false,
  },
  /** 隐藏/显示预览 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 隐藏/显示预览，非受控属性 */
  defaultVisible: {
    type: Boolean,
    value: false,
  },
};

export default props;
