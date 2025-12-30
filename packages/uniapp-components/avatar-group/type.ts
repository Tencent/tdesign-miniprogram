/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { ShapeEnum } from '../common/common';

export interface TdAvatarGroupProps {
  /**
   * 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上
   * @default 'left-up'
   */
  cascading?: CascadingValue;
  /**
   * 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 `+N`。示例：`+5`，`...`, `更多`
   */
  collapseAvatar?: string;
  /**
   * 能够同时显示的最多头像数量
   */
  max?: number;
  /**
   * 形状。优先级低于 Avatar.shape
   */
  shape?: ShapeEnum;
  /**
   * 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size
   * @default ''
   */
  size?: string;
  /**
   * 点击头像折叠元素触发
   */
  onCollapsedItemClick?: (e: MouseEvent) => void;
}

export type CascadingValue = 'left-up' | 'right-up';
