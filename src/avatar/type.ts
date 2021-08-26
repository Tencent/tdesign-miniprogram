/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-26 11:34:32
 * */

import { TdBadgeProps } from '../badge/type';
import { SizeEnum } from '../common/common';

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
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
    required?: boolean;
  };
}

export type ShapeEnum = 'circle' | 'round';

export type SizeEnum = 'xl' | 'l' | 'm' | 's' | 'xs';
