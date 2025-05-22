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
  /** 已废弃。是否显示外边框 */
  bordered: {
    type: Boolean,
    value: false,
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
  /** 形状。优先级高于 AvatarGroup.shape 。Avatar 单独存在时，默认值为 circle。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.shape 决定 */
  shape: {
    type: String,
  },
  /** 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.size 决定 */
  size: {
    type: String,
    value: '',
  },
};

export default props;
