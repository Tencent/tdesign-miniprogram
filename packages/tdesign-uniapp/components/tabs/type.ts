/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdStickyProps as StickyProps } from '../sticky/type';

export interface TdTabsProps {
  /**
   * 动画效果设置。其中 duration 表示动画时长。（单位：秒）
   */
  animation?: TabAnimation;
  /**
   * 激活下划线的模式
   * @default fixed
   */
  bottomLineMode?: 'fixed' | 'auto' | 'full';
  /**
   * 是否展示底部激活线条
   * @default true
   */
  showBottomLine?: boolean;
  /**
   * 选项卡头部空间是否均分
   * @default true
   */
  spaceEvenly?: boolean;
  /**
   * `1.1.10`。是否展示分割线
   * @default true
   */
  split?: boolean;
  /**
   * 是否开启粘性布局
   * @default false
   */
  sticky?: boolean;
  /**
   * 透传至 Sticky 组件
   */
  stickyProps?: StickyProps;
  /**
   * 是否可以滑动切换
   * @default true
   */
  swipeable?: boolean;
  /**
   * 标签的样式
   * @default line
   */
  theme?: 'line' | 'tag' | 'card';
  /**
   * 激活的选项卡值
   */
  value?: TabValue;
  /**
   * 激活的选项卡值，非受控属性
   */
  defaultValue?: TabValue;
  /**
   * 激活的选项卡发生变化时触发
   */
  onChange?: (context: { value: TabValue; label: string }) => void;
  /**
   * 点击选项卡时触发
   */
  onClick?: (context: { value: TabValue; label: string }) => void;
  /**
   * 页面滚动时触发
   */
  onScroll?: (context: { scrollTop: number; isFixed: boolean }) => void;
}

export type TabAnimation = { duration: number } & Record<string, any>;

export type TabValue = string | number;
