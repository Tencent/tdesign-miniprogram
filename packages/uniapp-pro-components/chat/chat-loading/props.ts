/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatLoadingProps } from './type';
export default {
  /** 加载的状态形式 */
  animation: {
    type: String,
    default: 'moving' as TdChatLoadingProps['animation'],
    validator(val: TdChatLoadingProps['animation']): boolean {
      if (!val) return true;
      return ['skeleton', 'moving', 'gradient', 'dots'].includes(val);
    },
  },
  /** 加载过程展示的文字内容 */
  text: {
    type: String,
    default: '',
  },
};
