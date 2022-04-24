/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdImageViewerProps } from './type';
const props: TdImageViewerProps = {
  /** 遮罩的背景颜色 */
  backgroundColor: {
    type: String,
    optionalTypes: [Number],
    value: 'rgba(0, 0, 0, 1)',
  },
  /** 图片数组 */
  images: {
    type: Array,
    value: [],
  },
  /** 默认展示第几项 */
  initialIndex: {
    type: Number,
    value: 0,
  },
  /** 是否显示页码 */
  showIndex: {
    type: Boolean,
    value: false,
  },
  /** 是否显示删除操作 */
  deleteBtn: {
    type: Boolean,
    value: false,
  },
  /** 是否显示关闭操作 */
  closeBtn: {
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
