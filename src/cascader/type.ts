/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TreeOptionData, KeysType } from '../common/common';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 关闭按钮
   * @default true
   */
  closeBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * 可选项数据源
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<CascaderOption>;
  };
  /**
   * 未选中时的提示文案
   * @default 选择选项
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 每级展示的次标题
   * @default []
   */
  subTitles?: {
    type: ArrayConstructor;
    value?: Array<string>;
  };
  /**
   * 展示风格
   * @default step
   */
  theme?: {
    type: StringConstructor;
    value?: 'step' | 'tab';
  };
  /**
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选项值
   * @default null
   */
  value?: {
    type: null;
    value?: string | number;
  };
  /**
   * 选项值，非受控属性
   * @default null
   */
  defaultValue?: {
    type: null;
    value?: string | number;
  };
  /**
   * 是否展示
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
