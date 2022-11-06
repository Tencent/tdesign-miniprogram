/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { StickyProps } from '../sticky/index';

export interface TdTabsProps {
  /**
   * 动画效果设置。其中 duration 表示动画时长
   */
  animation?: {
    type: ObjectConstructor;
    value?: TabAnimation;
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
   * 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-item', 't-class-active', 't-class-track'];
  };
  /**
   * 选项卡位置
   * @default top
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'top';
  };
  /**
   * 是否展示底部激活线条
   * @default true
   */
  showBottomLine?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否开启粘性布局
   * @default false
   */
  sticky?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传至 Sticky 组件
   */
  stickyProps?: {
    type: ObjectConstructor;
    value?: StickyProps;
  };
  /**
   * 是否可以滑动切换
   * @default true
   */
  swipeable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标签的样式
   * @default 'line'
   */
  theme?: {
    type: StringConstructor;
    value?: 'line' | 'tag' | 'card';
  };
  /**
   * 激活的选项卡值
   */
  value?: {
    type: null;
    value?: TabValue;
  };
  /**
   * 激活的选项卡值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: TabValue;
  };
}

export interface TdTabPanelProps {
  /**
   * 透传至 Badge 组件
   * @default {}
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: object;
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
   * 选项卡内容隐藏时是否销毁
   * @default true
   */
  destroyOnHide?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用当前选项卡
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项卡名称
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 用于自定义选项卡面板内容
   */
  panel?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选项卡的值，唯一标识
   */
  value?: {
    type: null;
    value?: TabValue;
  };
}

export type TabAnimation = { duration: number } & Record<string, any>;

export type TabValue = string | number;
