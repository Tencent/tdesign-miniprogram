/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCellGroupProps } from './type';
export default {
  /** 是否显示组边框 */
  bordered: Boolean,
  /** 单元格组风格 */
  theme: {
    type: String,
    default: 'default' as TdCellGroupProps['theme'],
    validator(val: TdCellGroupProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'card'].includes(val);
    },
  },
  /** 单元格组标题 */
  title: {
    type: String,
    default: '',
  },
};
