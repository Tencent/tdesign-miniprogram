/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBadgeProps as BadgeProps } from '../badge/type';
import type { TdImageProps as ImageProps } from '../image/type';
import type { ShapeEnum } from '../common/common';

export interface TdAvatarProps {
  /**
   * 头像替换文本，仅当图片加载失败时有效
   * @default ''
   */
  alt?: string;
  /**
   * 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字
   * @default {}
   */
  badgeProps?: BadgeProps;
  /**
   * 已废弃。是否显示外边框
   * @default false
   */
  bordered?: boolean;
  /**
   * 加载失败时隐藏图片
   * @default false
   */
  hideOnLoadFailed?: boolean;
  /**
   * 图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`
   */
  icon?: string | object;
  /**
   * 图片地址
   * @default ''
   */
  image?: string;
  /**
   * 透传至 Image 组件
   */
  imageProps?: ImageProps;
  /**
   * 形状。优先级高于 AvatarGroup.shape 。Avatar 单独存在时，默认值为 circle。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.shape 决定
   */
  shape?: ShapeEnum;
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.size 决定
   * @default ''
   */
  size?: string;
  /**
   * 图片加载失败时触发
   */
  onError?: (e: Event) => void;
}
