/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';

export interface TdTabBarProps {
  /**
   * 是否显示外边框
   * @default true
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置外层元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
  };
  /**
   * 是否固定在底部
   * @default true
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否为 iPhoneX 留出底部安全距离
   * @default true
   */
  safeAreaInsetBottom?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标签栏的形状
   * @default normal
   */
  shape?: {
    type: StringConstructor;
    value?: 'normal' | 'round';
  };
  /**
   * 是否需要分割线
   * @default true
   */
  split?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项风格
   * @default normal
   */
  theme?: {
    type: StringConstructor;
    value?: 'normal' | 'tag';
  };
  /**
   * 当前选中标签的索引
   * @default null
   */
  value?: {
    type: null;
    value?: string | number | Array<string | number>;
  };
  /**
   * 当前选中标签的索引，非受控属性
   * @default null
   */
  defaultValue?: {
    type: null;
    value?: string | number | Array<string | number>;
  };
}

export interface TdTabBarItemProps {
  /**
   * 图标右上角提示信息
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
  };
  /**
   * 图标名称
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 二级菜单
   */
  subTabBar?: {
    type: ArrayConstructor;
    value?: SubTabBarItem[];
  };
  /**
   * 标识符
   */
  value?: {
    type: null;
    value?: string | number;
  };
}

export interface SubTabBarItem {
  value: string;
  label: string;
}
