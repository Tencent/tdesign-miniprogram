/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBadgeProps as BadgeProps } from '../badge/type';
import type { TdImageProps as ImageProps } from '../image/type';

export interface TdGridItemProps {
  /**
   * 透传至 Badge 属性
   * @default {}
   */
  badgeProps?: BadgeProps;
  /**
   * 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点
   */
  description?: string;
  /**
   * 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`
   */
  icon?: string | object;
  /**
   * 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽
   */
  image?: string;
  /**
   * 透传至 Image 组件
   * @default {}
   */
  imageProps?: ImageProps;
  /**
   * 链接跳转类型
   * @default navigate-to
   */
  jumpType?: 'redirect-to' | 'switch-tab' | 'relaunch' | 'navigate-to';
  /**
   * 内容布局方式
   * @default vertical
   */
  layout?: 'vertical' | 'horizontal';
  /**
   * 文本，可以通过 Props 传入文本，也可以自定义标题节点
   */
  text?: string;
  /**
   * 点击后的跳转链接
   * @default ''
   */
  url?: string;
  /**
   * 点击子项后触发
   */
  onClick?: () => void;
}
