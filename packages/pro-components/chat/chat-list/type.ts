/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatItemMeta {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  name?: string;
  /**
   * 角色
   */
  role?: string;
  /**
   * 时间
   */
  datetime?: string;
  /**
   * 内容
   */
  content?: string;
}

export interface TdChatProps {
  /**
   * 自定义操作按钮的插槽
   * @default -
   */
  actionbar?: {
    type: null;
    value?: any;
  };
  /**
   * 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种
   * @default skeleton
   */
  animation?: {
    type: StringConstructor;
    value?: 'skeleton' | 'moving' | 'gradient';
  };
  /**
   * 对话列表的数据
   * @default -
   */
  data?: {
    type: ArrayConstructor;
    value?: TdChatItemMeta[];
  };
  /**
   * 对话布局形式，支持两侧对齐与左对齐
   * @default both
   */
  layout?: {
    type: StringConstructor;
    value?: 'both' | 'single';
  };
  /**
   * 是否表现为倒序
   * @default true
   */
  reverse?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 滚动事件的回调
   * @default -
   */
  onScroll?: {
    type: FunctionConstructor;
    value?: (context: { e: MouseEvent }) => void;
  };
}
