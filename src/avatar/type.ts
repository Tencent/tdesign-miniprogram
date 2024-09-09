/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';
import { ImageProps } from '../image/index';

export interface TdAvatarProps {
  /**
   * 头像替换文本，仅当图片加载失败时有效
   * @default ''
   */
  alt?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
  };
  /**
   * 已废弃。是否显示外边框
   * @default false
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载失败时隐藏图片
   * @default false
   */
  hideOnLoadFailed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 图标。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 图片地址
   * @default ''
   */
  image?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 透传至 Image 组件
   */
  imageProps?: {
    type: ObjectConstructor;
    value?: ImageProps;
  };
  /**
   * 形状
   * @default circle
   */
  shape?: {
    type: StringConstructor;
    value?: ShapeEnum;
  };
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件存在 AvatarGroup，默认值便由 AvatarGroup.size 决定
   * @default ''
   */
  size?: {
    type: StringConstructor;
    value?: string;
  };
}

export type ShapeEnum = 'circle' | 'round';
