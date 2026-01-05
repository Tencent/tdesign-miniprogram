/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdCollapsePanelProps } from './type';
export default {
  /** 折叠面板内容 */
  content: {
    type: String,
  },
  /** 禁止当前面板展开，优先级大于 Collapse 的同名属性 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 当前折叠面板展开图标，优先级大于 Collapse 的同名属性 */
  expandIcon: {
    type: Boolean,
    default: undefined as TdCollapsePanelProps['expandIcon'],
  },
  /** 面板头内容 */
  header: {
    type: String,
  },
  /** 面板头左侧图标 */
  headerLeftIcon: {
    type: String,
  },
  /** 面板头的右侧区域，一般用于呈现面板操作 */
  headerRightContent: {
    type: String,
  },
  /** 选项卡内容的位置 */
  placement: {
    type: String,
    default: 'bottom' as TdCollapsePanelProps['placement'],
    validator(val: TdCollapsePanelProps['placement']): boolean {
      if (!val) return true;
      return ['bottom', 'top'].includes(val);
    },
  },
  /** 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识 */
  value: {
    type: [String, Number],
  },
};
