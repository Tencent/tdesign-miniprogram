/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { StickyProps } from '../sticky/index';

export interface TdTabsProps {
  /**
   * 动画效果设置。其中 duration 表示动画时长。（单位：秒）
   */
  animation?: {
    type: ObjectConstructor;
    value?: TabAnimation;
  };
  /**
   * 激活下划线的模式
   * @default fixed
   */
  bottomLineMode?: {
    type: StringConstructor;
    value?: 'fixed' | 'auto' | 'full';
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-item', 't-class-active', 't-class-track'];
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
   * 选项卡头部空间是否均分
   * @default true
   */
  spaceEvenly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * `1.1.10`。是否展示分割线
   * @default true
   */
  split?: {
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
   * @default line
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

export type TabAnimation = { duration: number } & Record<string, any>;

export type TabValue = string | number;
