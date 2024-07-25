import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
import { TdGuideProps, GuideStep } from './type';
import { debounce, getRect, isNumber, rpx2px, styles, unitConvert } from '../common/utils';

export interface GuideProps extends TdGuideProps {}
export { GuideStep };

const { prefix } = config;
const name = `${prefix}-guide`;
const systemInfo = wx.getSystemInfoSync();

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
    _init: null,
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
      this.data._init();
    },
  };

  lifetimes = {
    created() {
      this.setData({ _init: debounce(() => this.init(), 20) });
    },
    attached() {
      this.data._init();
    },
  };

  methods = {
    nextTick() {
      return new Promise<void>((resolve) => {
        wx.nextTick(() => {
          resolve();
        });
      });
    },
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
      await this.nextTick();
      const rect: WechatMiniprogram.BoundingClientRectCallbackResult = await getRect(this, `.${name}__container`);
      let offsetLeft = offset?.[0];
      offsetLeft = unitConvert(isNumber(offsetLeft) ? `${offsetLeft}rpx` : offsetLeft || 0);
      let offsetTop = offset?.[1];
      offsetTop = unitConvert(isNumber(offsetTop) ? `${offsetTop}rpx` : offsetTop || 0);
      const bottom = parseFloat(place.bottom);
      const left = parseFloat(place.left);
      const right = parseFloat(place.right);
      const top = parseFloat(place.top);
      const height = systemInfo.windowHeight - bottom - top;
      const width = systemInfo.windowWidth - left - right;
      const space = rpx2px(32);
      const style: Partial<CSSStyleDeclaration> = { position: 'absolute' };
      switch (placement) {
        case 'center':
        case 'bottom':
          style.top = `${Math.max(height + top + space + offsetTop, 1)}px`;
          style.left = `${Math.max(width / 2 + left - rect.width / 2 + offsetLeft, 1)}px`;
          break;
        case 'bottom-left':
          style.top = `${Math.max(height + top + space + offsetTop, 1)}px`;
          style.left = `${Math.max(left + offsetLeft, 1)}px`;
          break;
        case 'bottom-right':
          style.top = `${Math.max(height + top + space + offsetTop, 1)}px`;
          style.right = `${Math.max(right - offsetLeft, 1)}px`;
          break;
        case 'left':
          style.top = `${Math.max(height / 2 + top - rect.height / 2 + offsetTop, 1)}px`;
          style.right = `${Math.max(width + right + space - offsetLeft, 1)}px`;
          break;
        case 'left-top':
          style.top = `${Math.max(top + offsetTop, 1)}px`;
          style.right = `${Math.max(width + right + space - offsetLeft, 1)}px`;
          break;
        case 'left-bottom':
          style.bottom = `${Math.max(bottom - offsetTop, 1)}px`;
          style.right = `${Math.max(width + right + space - offsetLeft, 1)}px`;
          break;
        case 'right':
          style.top = `${Math.max(height / 2 + top - rect.height / 2 + offsetTop, 1)}px`;
          style.left = `${Math.max(left + width + space + offsetLeft, 1)}px`;
          break;
        case 'right-top':
          style.top = `${Math.max(top + offsetTop, 1)}px`;
          style.left = `${Math.max(left + width + space + offsetLeft, 1)}px`;
          break;
        case 'right-bottom':
          style.bottom = `${Math.max(bottom - offsetTop, 1)}px`;
          style.left = `${Math.max(left + width + space + offsetLeft, 1)}px`;
          break;
        case 'top':
          style.bottom = `${Math.max(height + bottom + space - offsetTop, 1)}px`;
          style.left = `${Math.max(width / 2 + left - rect.width / 2 + offsetLeft, 1)}px`;
          break;
        case 'top-left':
          style.bottom = `${Math.max(height + bottom + space - offsetTop, 1)}px`;
          style.left = `${Math.max(left + offsetLeft, 1)}px`;
          break;
        case 'top-right':
          style.bottom = `${Math.max(height + bottom + space - offsetTop, 1)}px`;
          style.right = `${Math.max(right - offsetLeft, 1)}px`;
          break;
        default:
          break;
      }
      return styles(style);
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
  };
}
