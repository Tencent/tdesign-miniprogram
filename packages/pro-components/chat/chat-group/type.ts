/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatItemMeta } from '../chat-list/type';

export interface TdChatGroupProps {
  /**
   * 自定义组件样式
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式（用于外部覆盖）
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 分组数据，包含一问一答的消息对
   */
  groupData?: {
    type: ArrayConstructor;
    value?: TdChatItemMeta[];
  };
  /**
   * 分组索引
   */
  groupIndex?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 对话布局形式
   * @default both
   */
  layout?: {
    type: StringConstructor;
    value?: 'both' | 'single';
  };
  /**
   * 动画效果
   * @default skeleton
   */
  animation?: {
    type: StringConstructor;
    value?: 'skeleton' | 'moving' | 'gradient' | 'dot';
  };
  /**
   * 是否是最新的分组（用于置顶交互）
   */
  isLatest?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 锚点高度，用于占位
   */
  anchorHeight?: {
    type: NumberConstructor;
    value?: number;
  };
}
