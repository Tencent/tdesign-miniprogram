/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdAvatarProps as AvatarProps } from '../avatar/type';

export interface TdCommentProps {
  /**
   * 操作
   */
  actions?: Array<CommentActionItem>;
  /**
   * 作者
   */
  author?: string;
  /**
   * 头像
   */
  avatar?: string | AvatarProps;
  /**
   * 子元素内容，同 reply
   */
  children?: string;
  /**
   * 内容
   */
  content?: string;
  /**
   * 时间
   */
  datetime?: string;
  /**
   * 折叠/展开配置项
   */
  folds?: CommentFold;
  /**
   * 折叠/展开配置项，非受控属性
   */
  defaultFolds?: CommentFold;
  /**
   * 回复
   */
  reply?: string;
  /**
   * 点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项
   */
  onActions?: (context: { action: CommentActionItem; e: Event }) => void;
  /**
   * 用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置
   */
  onFolds?: (context: { fold: CommentFold; e: Event }) => void;
}

export type ActionPlacement = 'start' | 'end';

export interface CommentActionItem {
  key: string;
  content?: string;
  placement?: ActionPlacement;
  disabled?: boolean;
}

export type CommentFoldState = 'collapsed' | 'partial' | 'expanded';

export interface CommentFold {
  state: CommentFoldState;
  total?: number;
  step?: number;
  content?: Partial<Record<CommentFoldState, string | [string, string]>>;
}
