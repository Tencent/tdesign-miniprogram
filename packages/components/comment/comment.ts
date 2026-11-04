import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import commentProps from './props';
import type { CommentFold, CommentFoldState } from './type';
import type { AvatarProps } from '../avatar/index';
import usingConfig from '../mixins/using-config';

const { prefix } = config;
const componentName = 'comment';
const name = `${prefix}-${componentName}`;

const DEFAULT_STEP = 3;

const DEFAULT_FOLDS: CommentFold = {
  state: 'collapsed',
  total: 0,
  step: DEFAULT_STEP,
};

@wxComponent()
export default class Comment extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  options = {
    multipleSlots: true,
    // 以 _ 开头的 data 字段为纯数据字段，仅在逻辑层使用，不参与视图渲染
    pureDataPattern: /^_/,
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-avatar`,
    `${prefix}-class-author`,
    `${prefix}-class-content`,
    `${prefix}-class-datetime`,
    `${prefix}-class-actions`,
  ];

  properties = commentProps;

  controlledProps = [
    {
      key: 'folds',
      event: 'folds',
    },
  ];

  data = {
    prefix,
    classPrefix: name,
    foldState: 'collapsed',
    commentFolds: DEFAULT_FOLDS,
    replyBodyHeight: '',
    avatarData: null,
    // 纯数据字段：仅记录当前展开步数，不参与视图渲染
    _foldSteps: 0,
    globalConfig: {} as { collapsedText?: string; expandMoreText?: string; collapseText?: string },
  };

  observers = {
    avatar(avatar: string | AvatarProps) {
      this._syncAvatar(avatar);
    },

    folds(folds: CommentFold | null) {
      this._syncFolds(folds);
    },

    globalConfig() {
      this._syncFolds(this.data.folds);
    },
  };

  lifetimes = {
    attached() {
      this._syncFolds(this.data.folds);
    },
  };

  methods = {
    handleClickActions(e: WechatMiniprogram.BaseEvent) {
      const { action } = e.currentTarget.dataset;
      if (action?.disabled) return;
      this.triggerEvent('actions', { action });
    },

    handleClickFold(e: WechatMiniprogram.BaseEvent) {
      const { expand } = e.currentTarget.dataset;
      const { commentFolds } = this.data;

      // 收起：直接回到初始折叠态
      if (expand !== true && expand !== 'true') {
        this.setData({ _foldSteps: 0 });
        this._emitFold({ ...commentFolds, state: 'collapsed' });
        return;
      }

      // 展开：每点一次前进一步，达到 step 后进入完全展开态
      const foldSteps = this.data._foldSteps + 1;
      const step = commentFolds.step || DEFAULT_STEP;
      const nextState: CommentFoldState = foldSteps >= step - 1 ? 'expanded' : 'partial';
      this.setData({ _foldSteps: foldSteps });
      this._emitFold({ ...commentFolds, state: nextState });
    },
  };

  /** 由 folds 派生折叠状态与文案 */
  _syncFolds(folds: CommentFold | null) {
    const commentFolds = folds || DEFAULT_FOLDS;
    const userContent = commentFolds.content || {};
    const { globalConfig } = this.data;
    // 文案优先取业务传入的 content，缺省回退到全局国际化配置
    const content = {
      collapsed: userContent.collapsed ?? globalConfig.collapsedText,
      partial: userContent.partial ?? [globalConfig.expandMoreText, globalConfig.collapseText],
      expanded: userContent.expanded ?? globalConfig.collapseText,
    };
    const foldState: CommentFoldState = commentFolds.state || 'collapsed';
    const step = commentFolds.step || DEFAULT_STEP;
    let foldSteps = this.data._foldSteps;
    if (foldState === 'expanded') foldSteps = step - 1;
    else if (foldState === 'collapsed') foldSteps = 0;

    this.setData(
      {
        foldState,
        _foldSteps: foldSteps,
        commentFolds: { ...commentFolds, content },
      },
      () => this._updateReplyHeight(),
    );
  }

  /** 归一化头像：字符串作为图片地址，对象作为 AvatarProps 透传 */
  _syncAvatar(avatar: string | AvatarProps) {
    if (typeof avatar === 'string') {
      this.setData({ avatarData: { image: avatar } });
    } else {
      this.setData({ avatarData: avatar && typeof avatar === 'object' ? avatar : null });
    }
  }

  /** 触发 folds 事件，受控场景下同步内部值 */
  _emitFold(fold: CommentFold) {
    if (this._selfControlled) {
      this.setData({ folds: fold });
    }
    this.triggerEvent('folds', { fold });
  }

  /** 测量回复区内容高度，驱动展开/收起的高度过渡动画 */
  _updateReplyHeight() {
    this.createSelectorQuery()
      .select(`.${name}__reply-inner`)
      .fields({ size: true })
      .exec((res: any[]) => {
        if (res?.[0]) {
          this.setData({ replyBodyHeight: `${res[0].height}px` });
        }
      });
  }
}
