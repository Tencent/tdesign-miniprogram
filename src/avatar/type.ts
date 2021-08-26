/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-26 15:50:48
 * */

import { TdBadgeProps } from '../badge/type';

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
   * 头像右上角提示信息
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: TdBadgeProps;
    required?: boolean;
  };
  /**
   * 图标
   * @default ''
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
   * 尺寸
   * @default l
   */
  size?: {
    type: StringConstructor;
    value?: AvatarSizeEnum;
    required?: boolean;
  };
}

export type ShapeEnum = 'circle' | 'round';

export type AvatarSizeEnum = 'xl' | 'l' | 'm' | 's' | 'xs';
