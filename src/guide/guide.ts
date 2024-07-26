import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
import { TdGuideProps, GuideStep } from './type';
import { systemInfo, debounce, getRect, isNumber, rpx2px, styles, unitConvert, nextTick } from '../common/utils';

export interface GuideProps extends TdGuideProps {}
export { GuideStep };

const { prefix } = config;
const name = `${prefix}-guide`;

@wxComponent()
export default class Guide extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-reference`,
    `${prefix}-class-popover`,
    `${prefix}-class-tooltip`,
    `${prefix}-class-title`,
    `${prefix}-class-body`,
    `${prefix}-class-footer`,
    `${prefix}-class-skip`,
    `${prefix}-class-next`,
    `${prefix}-class-back`,
    `${prefix}-class-finish`,
  ];

  properties = props;

  options: WechatMiniprogram.Component.ComponentOptions = {
    pureDataPattern: /^_/,
    multipleSlots: true,
  };

  data = {
    prefix,
    classPrefix: name,
    visible: false,
    _current: -1,
    _steps: [],
    buttonProps: {},
    referenceStyle: '',
    popoverStyle: '',
    title: '',
    body: '',
    nonOverlay: false,
    modeType: '',
  };

  observers = {
    async 'steps, current, showOverlay'() {
      this._init();
    },
  };

  lifetimes = {
    created() {
      this._init = debounce(() => this.init(), 20);
      this._getPlacement = this.getPlacement();
    },
    attached() {
      this._init();
    },
  };

  methods = {
    async init() {
      const { steps, current } = this.properties;
      const { _steps, _current } = this.data;
      const step: GuideStep = steps[current];
      if (!step) {
        return this.setData({ visible: false });
      }
      const modeType = (step.mode ?? this.data.mode) === 'dialog' ? 'dialog' : 'popover';
      const showOverlay = step.showOverlay ?? this.data.showOverlay;
      this.setData({ nonOverlay: !showOverlay, modeType });
      if (steps === _steps && current === _current) return;
      if (modeType === 'popover') {
        const rect = await step.element();
        if (!rect) return;
        const highlightPadding = rpx2px(step.highlightPadding ?? this.data.highlightPadding);
        const referenceTop = rect.top - highlightPadding;
        const referenceRight = systemInfo.windowWidth - rect.right - highlightPadding;
        const referenceBottom = systemInfo.windowHeight - rect.bottom - highlightPadding;
        const referenceLeft = rect.left - highlightPadding;
        const style = {
          top: `${referenceTop}px`,
          right: `${referenceRight}px`,
          bottom: `${referenceBottom}px`,
          left: `${referenceLeft}px`,
        };
        this.setData({
          _steps: this.data.steps,
          _current: this.data.current,
          visible: true,
          referenceStyle: styles(style),
          title: step.title ?? '',
          body: step.body ?? '',
          buttonProps: this.buttonProps(step, 'popover'),
        });
        const popoverStyle = await this.placementOffset(step, style);
        this.setData({ popoverStyle });
      } else {
        this.setData({
          _steps: this.data.steps,
          _current: this.data.current,
          visible: true,
          title: step.title ?? '',
          body: step.body ?? '',
          buttonProps: this.buttonProps(step, 'dialog'),
        });
      }
    },
    async placementOffset({ placement, offset }: GuideStep, place: CSSStyleDeclaration) {
      await nextTick();
      const rect = await getRect(this, `.${name}__container`);
      const style = this._getPlacement[placement]?.(rect, place, offset);
      return styles({ position: 'absolute', ...style });
    },
    buttonProps(step, mode) {
      let skipButton = step.skipButtonProps ?? this.data.skipButtonProps;
      const size = mode === 'popover' ? 'extra-small' : 'medium';
      skipButton = {
        theme: 'light',
        content: '跳过',
        size,
        ...skipButton,
        class: `${prefix}-class-skip ${name}__button ${step.hideSkip ? `${name}__button--hidden` : ''} ${
          skipButton?.class || ''
        }`,
        type: 'skip',
      };
      let nextButton = step.nextButtonProps ?? this.data.nextButtonProps;
      nextButton = {
        theme: 'primary',
        content: '下一步',
        size,
        ...nextButton,
        class: `${prefix}-class-next ${name}__button ${nextButton?.class || ''}`,
        type: 'next',
      };
      nextButton = { ...nextButton, content: this.buttonContent(nextButton) };
      let backButton = step.backButtonProps ?? this.data.backButtonProps;
      backButton = {
        theme: 'light',
        content: '返回',
        size,
        ...backButton,
        class: `${prefix}-class-back ${name}__button ${backButton?.class || ''}`,
        type: 'back',
      };
      let finishButton = step.finishButtonProps ?? this.data.finishButtonProps;
      finishButton = {
        theme: 'primary',
        content: '完成',
        size,
        ...finishButton,
        class: `${prefix}-class-finish ${name}__button ${finishButton?.class || ''}`,
        type: 'finish',
      };
      finishButton = { ...finishButton, content: this.buttonContent(finishButton) };
      return {
        skipButton,
        nextButton,
        backButton,
        finishButton,
      };
    },
    buttonContent(button) {
      const { steps, current, hideCounter } = this.data;
      return `${button.content.replace(/ \(.*?\)/, '')}${hideCounter ? '' : ` (${current + 1}/${steps.length})`}`;
    },
    onTplButtonTap(e) {
      const { type } = e.target.dataset;
      const parmas = { e, current: this.data.current, total: this.data.steps.length };
      switch (type) {
        case 'next':
          this.triggerEvent('next-step-click', { next: this.data.current + 1, ...parmas });
          this.setData({ current: this.data.current + 1 });
          break;
        case 'skip':
          this.triggerEvent('skip', parmas);
          this.setData({ current: -1 });
          break;
        case 'back':
          this.triggerEvent('back', parmas);
          this.setData({ current: 0 });
          break;
        case 'finish':
          this.triggerEvent('finish', parmas);
          this.setData({ current: -1 });
          break;
        default:
          break;
      }
      this.triggerEvent('change', { current: this.data.current });
    },
    getPlacement() {
      const space = rpx2px(32);
      const offsetLeft = (offset) => unitConvert(isNumber(offset?.[0]) ? `${offset?.[0]}rpx` : offset?.[0] || 0);
      const offsetTop = (offset) => unitConvert(isNumber(offset?.[1]) ? `${offset?.[1]}rpx` : offset?.[1] || 0);
      const bottom = (place) => parseFloat(place.bottom);
      const left = (place) => parseFloat(place.left);
      const right = (place) => parseFloat(place.right);
      const top = (place) => parseFloat(place.top);
      const height = (place) => systemInfo.windowHeight - bottom(place) - top(place);
      const width = (place) => systemInfo.windowWidth - left(place) - right(place);
      return {
        center: (rect, place, offset) => ({
          top: `${Math.max(height(place) + top(place) + space + offsetTop(offset), 1)}px`,
          left: `${Math.max(width(place) / 2 + left(place) - rect.width / 2 + offsetLeft(offset), 1)}px`,
        }),
        bottom: (rect, place, offset) => ({
          top: `${Math.max(height(place) + top(place) + space + offsetTop(offset), 1)}px`,
          left: `${Math.max(width(place) / 2 + left(place) - rect.width / 2 + offsetLeft(offset), 1)}px`,
        }),
        'bottom-left': (rect, place, offset) => ({
          top: `${Math.max(height(place) + top(place) + space + offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + offsetLeft(offset), 1)}px`,
        }),
        'bottom-right': (rect, place, offset) => ({
          top: `${Math.max(height(place) + top(place) + space + offsetTop(offset), 1)}px`,
          right: `${Math.max(right(place) - offsetLeft(offset), 1)}px`,
        }),
        left: (rect, place, offset) => ({
          top: `${Math.max(height(place) / 2 + top(place) - rect.height / 2 + offsetTop(offset), 1)}px`,
          right: `${Math.max(width(place) + right(place) + space - offsetLeft(offset), 1)}px`,
        }),
        'left-top': (rect, place, offset) => ({
          top: `${Math.max(top(place) + offsetTop(offset), 1)}px`,
          right: `${Math.max(width(place) + right(place) + space - offsetLeft(offset), 1)}px`,
        }),
        'left-bottom': (rect, place, offset) => ({
          bottom: `${Math.max(bottom(place) - offsetTop(offset), 1)}px`,
          right: `${Math.max(width(place) + right(place) + space - offsetLeft(offset), 1)}px`,
        }),
        right: (rect, place, offset) => ({
          top: `${Math.max(height(place) / 2 + top(place) - rect.height / 2 + offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + width(place) + space + offsetLeft(offset), 1)}px`,
        }),
        'right-top': (rect, place, offset) => ({
          top: `${Math.max(top(place) + offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + width(place) + space + offsetLeft(offset), 1)}px`,
        }),
        'right-bottom': (rect, place, offset) => ({
          bottom: `${Math.max(bottom(place) - offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + width(place) + space + offsetLeft(offset), 1)}px`,
        }),
        top: (rect, place, offset) => ({
          bottom: `${Math.max(height(place) + bottom(place) + space - offsetTop(offset), 1)}px`,
          left: `${Math.max(width(place) / 2 + left(place) - rect.width / 2 + offsetLeft(offset), 1)}px`,
        }),
        'top-left': (rect, place, offset) => ({
          bottom: `${Math.max(height(place) + bottom(place) + space - offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + offsetLeft(offset), 1)}px`,
        }),
        'top-right': (rect, place, offset) => ({
          bottom: `${Math.max(height(place) + bottom(place) + space - offsetTop(offset), 1)}px`,
          right: `${Math.max(right(place) - offsetLeft(offset), 1)}px`,
        }),
      };
    },
  };
}
