/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { AvatarProps } from '../avatar/index';

export interface TdCommentProps {
  /**
   * 操作
   */
  actions?: {
    type: null;
    value?: Array<CommentActionItem> | string;
  };
  /**
   * 作者
   */
  author?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 头像
   */
  avatar?: {
    type: null;
    value?: string | AvatarProps;
  };
  /**
   * 子元素内容，同 reply
   */
  children?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 时间
   */
  datetime?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 折叠/展开配置项
   */
  folds?: {
    type: ObjectConstructor;
    value?: CommentFold;
  };
  /**
   * 折叠/展开配置项，非受控属性
   */
  defaultFolds?: {
    type: ObjectConstructor;
    value?: CommentFold;
  };
  /**
   * 回复
   */
  reply?: {
    type: StringConstructor;
    value?: string;
  };
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
