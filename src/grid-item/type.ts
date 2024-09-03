/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';
import { ImageProps } from '../image/index';

export interface TdGridItemProps {
  /**
   * 透传至 Badge 属性
   * @default null
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
  };
  /**
   * 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点
   */
  description?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽
   */
  image?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 透传至 Image 组件
   */
  imageProps?: {
    type: ObjectConstructor;
    value?: ImageProps;
  };
  /**
   * 链接跳转类型
   * @default navigate-to
   */
  jumpType?: {
    type: StringConstructor;
    value?: 'redirect-to' | 'switch-tab' | 'relaunch' | 'navigate-to';
  };
  /**
   * 内容布局方式
   * @default vertical
   */
  layout?: {
    type: StringConstructor;
    value?: 'vertical' | 'horizontal';
  };
  /**
   * 文本，可以通过 Props 传入文本，也可以自定义标题节点
   */
  text?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 点击后的跳转链接
   * @default ''
   */
  url?: {
    type: StringConstructor;
    value?: string;
  };
}
