/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdIconProps } from './type';
export default {
  /** 图标颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 图标名称或图片链接 */
  name: {
    type: String,
    default: '',
    required: true,
  },
  /** 自定义图标前缀 */
  prefix: {
    type: String,
    default: '',
  },
  /** 图标大小, 如 `20`, `20px`, `48rpx`, 默认单位是 `px` */
  size: {
    type: [String, Number],
    default: '' as TdIconProps['size'],
  },
  /** 点击图标时触发 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
};
