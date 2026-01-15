/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatListProps {
  /**
   * 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种
   * @default skeleton
   */
  animation?: 'skeleton' | 'moving' | 'gradient' | 'dot';
  /**
   * 对话列表的数据
   */
  data?: Array<TdChatItemMeta>;
  /**
   * 对话布局形式，支持两侧对齐与左对齐。使用插槽自定义对话内容时不生效，得用`t-chat-message`的`placement`属性
   * @default both
   */
  layout?: 'both' | 'single';
  /**
   * 是否表现为倒序
   * @default true
   */
  reverse?: boolean;
  /**
   * 滚动事件的回调
   */
  onScroll?: (context: { scrollLeft; scrollTop; scrollHeight; scrollWidth; deltaX; deltaY }) => void;
}

export interface TdChatItemMeta {
  avatar?: string;
  name?: string;
  role?: string;
  datetime?: string;
  content?: string;
  status?: string;
}
