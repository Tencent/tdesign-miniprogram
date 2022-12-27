/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TreeOptionData, KeysType } from '../common/common';

export interface TdTreeSelectProps<DataOption extends TreeOptionData = TreeOptionData> {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 高度，默认单位为 px
   * @default 336
   */
  height?: {
    type: null;
    value?: string | number;
  };
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * 是否多选
   * @default false
   */
  multiple?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<DataOption>;
  };
  /**
   * 选中值
   */
  value?: {
    type: null;
    value?: TreeSelectValue;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: TreeSelectValue;
  };
}

export type TreeSelectValue = string | number | Array<TreeSelectValue>;
