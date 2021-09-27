/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-26 20:59:31
 * */

import { BadgeProps } from '../badge/type';

export interface TdAvatarProps {
  /**
   * 头像替换文本
   * @default ''
   */
  alt?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
    required?: boolean;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
    required?: boolean;
  };
  /**
   * 加载失败时隐藏图片
   * @default false
   */
  hideOnLoadFailed?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 图标
   */
  icon?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 图片地址
   * @default ''
   */
  image?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * 形状
   * @default circle
   */
  shape?: {
    type: StringConstructor;
    value?: ShapeEnum;
    required?: boolean;
  };
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等
   * @default ''
   */
  size?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
}

export interface TdAvatarGroupProps {
  /**
   * 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上
   * @default 'right-up'
   */
  cascading?: {
    type: StringConstructor;
    value?: CascadingValue;
    required?: boolean;
  };
  /**
   * 组件类名，用于设置组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
    required?: boolean;
  };
  /**
   * 能够同时显示的最多头像数量
   */
  max?: {
    type: NumberConstructor;
    value?: number;
    required?: boolean;
  };
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size
   * @default ''
   */
  size?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
}

export type ShapeEnum = 'circle' | 'round';

export type CascadingValue = 'left-up' | 'right-up';
