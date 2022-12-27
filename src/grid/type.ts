/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';

export interface TdGridProps {
  /**
   * 内容对齐方式
   * @default center
   */
  align?: {
    type: StringConstructor;
    value?: 'left' | 'center';
  };
  /**
   * 边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式
   * @default false
   */
  border?: {
    type: null;
    value?:
      | boolean
      | {
          color?: string;
          width?: string;
          style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset';
        };
  };
  /**
   * 每一行的列数量；为 0 时等于固定大小
   * @default 4
   */
  column?: {
    type: NumberConstructor;
    value?: number;
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
   * 组件类名，用于设置组件外层元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
  };
  /**
   * 间隔大小
   */
  gutter?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否开启点击反馈
   * @default false
   */
  hover?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 宫格的风格
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'card';
  };
}

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
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点
   */
  description?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-image', 't-class-text', 't-class-description'];
  };
  /**
   * 图标名称
   * @default ''
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 图片，可以是图片地址，也可以自定义图片节点
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
    value?: object;
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
