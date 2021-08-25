/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-25 20:01:39
 * */

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
   * 形状
   * @default circle
   */
  shape?: {
    type: StringConstructor;
    value?: SizeEnum;
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
