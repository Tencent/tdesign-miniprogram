/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPopupProps as PopupProps } from '../popup/type';
import type { TreeOptionData, TreeKeysType } from '../common/common';

export interface TdCascaderProps<CascaderOption extends TreeOptionData = TreeOptionData> {
  /**
   * 父子节点选中状态不再关联，可各自选中或取消
   * @default false
   */
  checkStrictly?: boolean;
  /**
   * 关闭按钮
   * @default true
   */
  closeBtn?: boolean;
  /**
   *  自定义过滤函数。返回 true 表示匹配，未设置时使用内置匹配规则：对路径中所有 label 拼接后做大小写不敏感的 includes 匹配
   */
  filter?: CascaderFilterFunction;
  /**
   * 搜索框占位符描述文本
   * @default ''
   */
  filterPlaceholder?: string;
  /**
   * 是否可搜索，开启后顶部会展示一个搜索框
   * @default false
   */
  filterable?: boolean;
  /**
   * 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名
   */
  keys?: CascaderKeysType;
  /**
   * 可选项数据源
   * @default []
   */
  options?: Array<CascaderOption>;
  /**
   * 未选中时的提示文案。组件内置默认值为：'选择选项'
   * @default ''
   */
  placeholder?: string;
  /**
   * 透传 Popup 组件全部属性
   * @default {}
   */
  popupProps?: PopupProps;
  /**
   * 每级展示的次标题
   * @default []
   */
  subTitles?: Array<string>;
  /**
   * 展示风格
   * @default step
   */
  theme?: 'step' | 'tab';
  /**
   * 标题
   */
  title?: string;
  /**
   * 选项值
   */
  value?: string | number;
  /**
   * 选项值，非受控属性
   */
  defaultValue?: string | number;
  /**
   * 是否展示
   * @default false
   */
  visible?: boolean;
  /**
   * 值发生变更时触发
   */
  onChange?: (context: { value: string | number; selectedOptions: string[] }) => void;
  /**
   * 关闭时触发
   */
  onClose?: (context: { trigger: CascaderTriggerSource }) => void;
  /**
   * 选择后触发
   */
  onPick?: (context: { value: string | number; label: string; index: number; level: number }) => void;
}

export type CascaderFilterFunction<CascaderOption extends TreeOptionData = TreeOptionData> = (
  keyword: string,
  option: CascaderOption,
  path: CascaderOption[],
) => boolean;

export type CascaderKeysType = TreeKeysType;

export type CascaderTriggerSource = 'overlay' | 'close-btn' | 'finish';
