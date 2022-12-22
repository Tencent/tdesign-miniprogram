/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { KeysType } from '../common/common';

export interface TdDropdownMenuProps {
  /**
   * 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 动画时长
   * @default 200
   */
  duration?: {
    type: null;
    value?: string | number;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、菜单标签、菜单图标类名 等
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-item', 't-class-label', 't-class-icon'];
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 菜单栏 z-index 层级
   * @default 11600
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

export interface TdDropdownItemProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、菜单列、菜单列选项、菜单列选项标签、树形菜单、树形菜单列等类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: [
      't-class',
      't-class-content',
      't-class-column',
      't-class-column-item',
      't-class-column-item-label',
      't-class-footer',
    ];
  };
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * 标题
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
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
   * 选项数据
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<DropdownOption>;
  };
  /**
   * 选项分栏（1-3）
   * @default 1
   */
  optionsColumns?: {
    type: null;
    value?: string | number;
  };
  /**
   * 选项排列；不再支持 tree 布局，可与 treeSelect 配合使用
   * @default columns
   * @deprecated
   */
  optionsLayout?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选中值
   */
  value?: {
    type: null;
    value?: DropdownValue;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: DropdownValue;
  };
}

export interface DropdownOption {
  label: string;
  disabled: boolean;
  value: DropdownValue;
}

export type DropdownValue = string | number | Array<DropdownValue>;
