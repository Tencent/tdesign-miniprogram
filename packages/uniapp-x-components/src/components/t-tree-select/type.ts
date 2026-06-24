/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TreeOptionData, TreeKeysType } from '../common/common';

export interface TdTreeSelectProps<DataOption extends TreeOptionData = TreeOptionData> {
  /**
   * 自定义选中值，优先级高于 `value`
   */
  customValue?: TreeSelectValue;
  /**
   * 高度，默认单位为 px
   * @default 336
   */
  height?: string | number;
  /**
   * 用来定义 `value / label / disabled / children` 在 `options` 数据中对应的字段别名，示例：`{ value: 'key', label: 'name', children: 'list' }`
   */
  keys?: TreeKeysType;
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 选项
   * @default []
   */
  options?: Array<DataOption>;
  /**
   * 选中值
   */
  value?: TreeSelectValue;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: TreeSelectValue;
  /**
   * 点击任何节点均会触发；level 代表当前点击的层级，0 代表最左侧，依次递进
   */
  onChange?: (context: { value: TreeSelectValue; level: TreeLevel }) => void;
}

export type TreeSelectValue = string | number | Array<TreeSelectValue>;

export type TreeLevel = 0 | 1 | 2;
