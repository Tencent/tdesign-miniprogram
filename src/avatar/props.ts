/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdAvatarProps } from './type';
const props: TdAvatarProps = {
  /** 头像替换文本，仅当图片加载失败时有效 */
  alt: {
    type: String,
    value: '',
  },
  /** 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字 */
  badgeProps: {
    type: Object,
  },
  /** 是否显示外边框 */
  bordered: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，用于设置组件外层元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 加载失败时隐藏图片 */
  hideOnLoadFailed: {
    type: Boolean,
    value: false,
  },
  /** 图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 */
  icon: {
    type: null,
  },
  /** 图片地址 */
  image: {
    type: String,
    value: '',
  },
  /** 透传至 Image 组件 */
  imageProps: {
    type: Object,
  },
  /** 形状 */
  shape: {
    type: String,
    value: 'circle',
  },
  /** 尺寸，示例值：small/medium/large/24px/38px 等 */
  size: {
    type: String,
    value: 'medium',
  },
};

export default props;
