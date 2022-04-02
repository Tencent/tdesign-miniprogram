/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCollapseProps } from './type';
const props: TdCollapseProps = {
  /** 默认是否展开全部 */
  defaultExpandAll: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用面板展开/收起操作 */
  disabled: {
    type: Boolean,
  },
  /** 展开图标。值为 undefined 或 false 则不显示展开图标；值为 true 显示默认图标；值类型为函数，则表示完全自定义展开图标 */
  expandIcon: {
    type: Boolean,
    value: true,
  },
  /** 每个面板互斥展开，每次只展开一个面板 */
  expandMutex: {
    type: Boolean,
    value: false,
  },
  /** 展开的面板集合 */
  value: {
    type: Array,
  },
  /** 展开的面板集合，非受控属性 */
  defaultValue: {
    type: null,
    value: undefined,
  },
};

export default props;
