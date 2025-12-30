/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatThinkingProps {
  /**
   * 内容区域最大高度，超出会自动滚动
   * @default moving
   */
  animation?: 'skeleton' | 'moving' | 'gradient' | 'dot';
  /**
   * 是否折叠
   * @default false
   */
  collapsed?: boolean;
  /**
   * 思考内容对象
   */
  content: { text?: string; title?: string };
  /**
   * 布局方式
   * @default block
   */
  layout?: 'block' | 'border';
  /**
   * 内容区域最大高度，超出会自动滚动
   */
  maxHeight?: number;
  /**
   * 思考状态
   * @default pending
   */
  status: 'complete' | 'stop' | 'error' | 'pending';
  /**
   * 切换折叠面板时触发
   */
  onCollapsedChange?: (value: Boolean) => void;
}
