/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdResultProps } from './type';
export default {
  /** 描述文字 */
  description: {
    type: String,
  },
  /** 图标名称。值为字符串表示图标名称，值为 `false` 表示不显示图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标 */
  icon: {
    type: [String, Boolean, Object],
    default: true as TdResultProps['icon'],
  },
  /** 图片地址 */
  image: {
    type: String,
  },
  /** 内置主题 */
  theme: {
    type: String,
    default: 'default' as TdResultProps['theme'],
    validator(val: TdResultProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'success', 'warning', 'error'].includes(val);
    },
  },
  /** 标题 */
  title: {
    type: String,
    default: '' as TdResultProps['title'],
  },
};
