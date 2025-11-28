/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdButtonProps as ButtonProps } from '../button/type';

export interface TdFabProps {
  /**
   * 透传至 Button 组件
   */
  buttonProps?: ButtonProps;
  /**
   * 是否可拖拽。`true` / `'all'`可拖动<br>`'vertical'`可垂直拖动<br>`'horizontal'`可水平拖动<br>`false`禁止拖动
   * @default false
   */
  draggable?: boolean | FabDirectionEnum;
  /**
   * 图标
   * @default ''
   */
  icon?: string;
  /**
   * 悬浮按钮的样式，常用于调整位置（即将废弃，建议使用 `style`）
   * @default right: 16px; bottom: 32px;
   */
  style?: string;
  /**
   * 文本内容
   * @default ''
   */
  text?: string;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 设置垂直方向边界限制，示例：[48, 48] 或 ['96px', 80]
   */
  yBounds?: Array<string | number>;
  /**
   * 悬浮按钮点击事件
   */
  onClick?: (context: { e: Event }) => void;
  /**
   * 结束拖拽时触发
   */
  onDragEnd?: (context: { e: TouchEvent }) => void;
  /**
   * 开始拖拽时触发
   */
  onDragStart?: (context: { e: TouchEvent }) => void;
}

export type FabDirectionEnum = 'all' | 'vertical' | 'horizontal';
