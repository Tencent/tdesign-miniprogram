/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TreeOptionData, TreeKeysType } from '../common/common';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 父子节点选中状态不再关联，可各自选中或取消
   * @default false
   */
  checkStrictly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 关闭按钮
   * @default true
   */
  closeBtn?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   *  自定义过滤函数。返回 true 表示匹配，未设置时使用内置匹配规则：对路径中所有 label 拼接后做大小写不敏感的 includes 匹配
   */
  filter?: {
    type: undefined;
    value?: CascaderFilterFunction;
  };
  /**
   * 搜索框占位符描述文本
   * @default ''
   */
  filterPlaceholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否可搜索，开启后顶部会展示一个搜索框
   * @default false
   */
  filterable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: CascaderKeysType;
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
   * 未选中时的提示文案。组件内置默认值为：'选择选项'
   * @default ''
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

export type CascaderFilterFunction<CascaderOption extends TreeOptionData = TreeOptionData> = (
  keyword: string,
  option: CascaderOption,
  path: CascaderOption[],
) => boolean;

export type CascaderKeysType = TreeKeysType;
