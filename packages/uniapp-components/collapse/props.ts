/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCollapseProps } from './type';
export default {
  /** 默认是否展开全部 */
  defaultExpandAll: Boolean,
  /** 是否禁用面板展开/收起操作 */
  disabled: Boolean,
  /** 展开图标 */
  expandIcon: {
    type: Boolean,
    default: true,
  },
  /** 每个面板互斥展开，每次只展开一个面板 */
  expandMutex: Boolean,
  /** 折叠面板风格 */
  theme: {
    type: String,
    default: 'default' as TdCollapseProps['theme'],
    validator(val: TdCollapseProps['theme']): boolean {
      if (!val) return true;
      return ['default', 'card'].includes(val);
    },
  },
  /** 展开的面板集合 */
  value: {
    type: Array,
  },
  /** 展开的面板集合，非受控属性 */
  defaultValue: {
    type: Array,
  },
  /** 切换面板时触发，返回变化的值 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
};
