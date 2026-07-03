/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdTabBarItemProps } from './type';
export default {
  /** 图标右上角提示信息 */
  badgeProps: {
    type: Object,
    default: () => ({}),
  },
  /** 图标名称。传入对象时透传至 Icon 组件 */
  icon: {
    type: [String, Object],
  },
  /** 页面跳转类型 */
  linkType: {
    type: String,
    default: 'redirectTo' as TdTabBarItemProps['linkType'],
    validator(val: TdTabBarItemProps['linkType']): boolean {
      if (!val) return true;
      return ['redirectTo', 'switchTab', 'reLaunch', 'navigateTo'].includes(val);
    },
  },
  /** 二级菜单 */
  subTabBar: {
    type: Array,
  },
  /** 点击后跳转的页面路径, 需要以 `/` 开头 */
  url: {
    type: String,
    default: '',
  },
  /** 标识符 */
  value: {
    type: [String, Number],
  },
};
