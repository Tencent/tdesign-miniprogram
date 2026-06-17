/**
 * AvatarGroup 组件类型契约
 *
 * 行为契约对齐 uniapp-components/avatar-group。
 */

export type AvatarGroupCascading = 'left-up' | 'right-up';

export type AvatarGroupShape = 'circle' | 'round';

export interface AvatarGroupProps {
  /** 图片之间的层叠关系：left-up=左侧图片在上；right-up=右侧图片在上 */
  cascading?: AvatarGroupCascading;
  /** 头像数量超出时折叠元素的内容（默认显示 +N） */
  collapseAvatar?: string;
  /** 能够同时显示的最多头像数量；为 0 / 不传表示不限制 */
  max?: number;
  /** 形状（优先级低于子 Avatar.shape） */
  shape?: AvatarGroupShape;
  /** 尺寸（优先级低于子 Avatar.size） */
  size?: string;
  /** 透传额外类名 */
  customClass?: string;
}

export interface AvatarGroupEmits {
  (e: 'collapsed-item-click', event: UniMouseEvent): void;
}
