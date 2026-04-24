import { AvatarProps } from '../avatar/index';
export interface TdCommentProps {
    actions?: {
        type: ArrayConstructor;
        value?: Array<CommentActionItem>;
    };
    author?: {
        type: StringConstructor;
        value?: string;
    };
    avatar?: {
        type: null;
        value?: string | AvatarProps;
    };
    content?: {
        type: StringConstructor;
        value?: string;
    };
    datetime?: {
        type: StringConstructor;
        value?: string;
    };
    folds?: {
        type: ObjectConstructor;
        value?: CommentFold;
    };
    defaultFolds?: {
        type: ObjectConstructor;
        value?: CommentFold;
    };
    reply?: {
        type: StringConstructor;
        value?: string;
    };
}
export declare type ActionPlacement = 'start' | 'end';
export interface CommentActionItem {
    key: string;
    content?: string;
    icon?: string | object;
    placement?: ActionPlacement;
    disabled?: boolean;
}
export declare type CommentFoldState = 'collapsed' | 'partial' | 'expanded';
export interface CommentFold {
    state: CommentFoldState;
    total?: number;
    step?: number;
    content?: Partial<Record<CommentFoldState, string | [string, string]>>;
}
