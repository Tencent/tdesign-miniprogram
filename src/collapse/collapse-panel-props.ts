/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCollapsePanelProps } from './type';
const props: TdCollapsePanelProps = {
  /** 折叠面板内容 */
  content: {
    type: String,
  },
  /** 禁止当前面板展开，优先级大于 Collapse 的同名属性 */
  disabled: {
    type: null, // 要使用 undefined 的地方，不能用具体类型，不然会转成对应类型，导致无法识别undefined
    value: undefined,
  },
  /** 当前折叠面板展开图标，优先级大于 Collapse 的同名属性 */
  expandIcon: {
    type: Boolean,
    value: true,
  },
  /** 面板头内容 */
  header: {
    type: String,
  },
  /** 面板头的右侧区域，一般用于呈现面板操作 */
  headerRightContent: {
    type: String,
    optionalTypes: [Boolean],
  },
  /** 当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识 */
  value: {
    type: String,
    optionalTypes: [Number],
  },
};

export default props;
