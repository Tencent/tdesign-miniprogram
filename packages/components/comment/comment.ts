import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import commentProps from './props';

const { prefix } = config;
const name = `${prefix}-comment`;

const DEFAULT_FOLDS = {
  state: 'collapsed',
  total: 0,
  step: 3,
  content: {
    collapsed: '展开回复',
    partial: ['展开更多回复', '收起'],
    expanded: '收起',
  },
};

@wxComponent()
export default class Comment extends SuperComponent {
  options = {
    multipleSlots: true,
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

  data = {
    prefix,
    classPrefix: name,
    _foldState: 'collapsed',
    _foldSteps: 0,
    _isControlled: false,
    _commentFolds: DEFAULT_FOLDS,
    _replyBodyHeight: '',
  };

  observers = {
    'folds, defaultFolds'(folds, defaultFolds) {
      this._syncFolds(folds, defaultFolds);
    },
  };

  lifetimes = {
    attached() {
      this._syncFolds(this.properties.folds, this.properties.defaultFolds);
    },
  };

  methods = {
    handleClickActions(e: WechatMiniprogram.BaseEvent) {
      const { action } = e.currentTarget.dataset;
      this.triggerEvent('actions', { action, e });
    },

    handleClickFold(e: WechatMiniprogram.BaseEvent) {
      const { expand } = e.currentTarget.dataset;
      const isExpand = expand === true || expand === 'true';
      const { folds, defaultFolds } = this.properties;
      const commentFolds = folds || defaultFolds || DEFAULT_FOLDS;

      if (!isExpand) {
        this._setFoldState('collapsed', 0);
        this.triggerEvent('folds', { fold: { ...commentFolds, state: 'collapsed' }, e });
        return;
      }

      const foldSteps = this.data._foldSteps + 1;
      const nextState = foldSteps >= (commentFolds.step || 3) - 1 ? 'expanded' : 'partial';
      this._setFoldState(nextState, foldSteps);
      this.triggerEvent('folds', { fold: { ...commentFolds, state: nextState }, e });
    },
  };

  /** 统一解析 folds 并同步到 data */
  _syncFolds(folds, defaultFolds) {
    const commentFolds = folds || defaultFolds || DEFAULT_FOLDS;
    const isControlled = folds !== null;
    const foldState = isControlled ? folds.state || 'collapsed' : defaultFolds?.state || this.data._foldState;
    let foldSteps = this.data._foldSteps;
    if (foldState === 'expanded') {
      foldSteps = (commentFolds.step || 3) - 1;
    } else if (foldState === 'collapsed') {
      foldSteps = 0;
    }

    this.setData(
      {
        _isControlled: isControlled,
        _foldState: foldState,
        _foldSteps: foldSteps,
        _commentFolds: commentFolds,
      },
      () => this._updateReplyHeight(),
    );
  }

  /** 设置折叠状态：_foldSteps 始终更新，_foldState 仅非受控时更新 */
  _setFoldState(state: string, steps: number) {
    const data: Record<string, unknown> = { _foldSteps: steps };
    if (!this.data._isControlled) {
      data._foldState = state;
    }
    this.setData(data, () => this._updateReplyHeight());
  }

  _updateReplyHeight() {
    this.createSelectorQuery()
      .select(`.${name}__reply-inner`)
      .fields({ size: true })
      .exec((res) => {
        if (res?.[0]) {
          this.setData({ _replyBodyHeight: `${res[0].height}px` });
        }
      });
  }
}
