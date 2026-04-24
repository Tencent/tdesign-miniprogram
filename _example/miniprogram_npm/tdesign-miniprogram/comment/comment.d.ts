import { SuperComponent } from '../common/src/index';
import type { CommentFold, CommentActionItem } from './type';
import type { AvatarProps } from '../avatar/index';
export default class Comment extends SuperComponent {
    behaviors: string[];
    options: {
        multipleSlots: boolean;
        pureDataPattern: RegExp;
    };
    externalClasses: string[];
    properties: import("./type").TdCommentProps;
    controlledProps: {
        key: string;
        event: string;
    }[];
    data: {
        prefix: string;
        classPrefix: string;
        foldState: string;
        commentFolds: CommentFold;
        replyBodyHeight: string;
        avatarData: any;
        actionsData: any[];
        innerActive: boolean;
        _foldSteps: number;
        globalConfig: {
            collapsedText?: string;
            expandMoreText?: string;
            collapseText?: string;
        };
    };
    observers: {
        avatar(avatar: string | AvatarProps): void;
        actions(actions: CommentActionItem[]): void;
        'folds, globalConfig'(folds: CommentFold | null): void;
    };
    lifetimes: {
        attached(): void;
    };
    methods: {
        handleLongPress(): void;
        handlePressEnd(): void;
        handleClickActions(e: WechatMiniprogram.BaseEvent): void;
        handleClickFold(e: WechatMiniprogram.BaseEvent): void;
    };
    _syncFolds(folds: CommentFold | null): void;
    _syncAvatar(avatar: string | AvatarProps): void;
    _syncActions(actions: CommentActionItem[]): void;
    _emitFold(fold: CommentFold): void;
    _updateReplyHeight(): void;
}
