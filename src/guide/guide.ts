import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
import { TdGuideProps, GuideStep } from './type';
import { debounce, getRect, styles } from '../common/utils';

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
    `${prefix}-class-desc`,
    `${prefix}-class-footer`,
    `${prefix}-class-skip`,
    `${prefix}-class-next`,
    `${prefix}-class-back`,
    `${prefix}-class-finish`,
  ];

  properties = props;

  options: WechatMiniprogram.Component.ComponentOptions = {
    pureDataPattern: /^_/,
  };

  data = {
    prefix,
    classPrefix: name,
    visible: false,

    _current: -1,
    _steps: [],
    _init: null,

    skipButton: {
      theme: 'light',
      size: 'small',
      content: '跳过',
    },
    nextButton: {
      theme: 'primary',
      size: 'small',
      content: '下一步',
    },
    backButton: {
      theme: 'light',
      size: 'small',
      content: '返回',
    },
    finishButton: {
      theme: 'primary',
      size: 'small',
      content: '完成',
    },
    referenceStyle: '',
    popoverStyle: '',
    title: '',
    desc: '',
    nonOverlay: false,
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
      const { steps, _steps, current, _current } = this.data;
      const step: GuideStep = steps[current];
      if (!step) {
        return this.setData({ visible: false });
      }
      const showOverlay = step.showOverlay ?? this.data.showOverlay;
      this.setData({ nonOverlay: !showOverlay });
      if (steps === _steps && current === _current) return;
      const rect = await step.element();
      const highlightPadding = step.highlightPadding ?? this.data.highlightPadding;
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
      });
      await this.nextTick();
      const popoverStyle = await this.placementOffset(step, style);
      this.setData({
        popoverStyle,
        title: step.title ?? '',
        desc: step.body ?? '',
        ...this.buttonProps(step),
      });
    },
    async placementOffset({ placement }: GuideStep, offset: CSSStyleDeclaration) {
      const rect: WechatMiniprogram.BoundingClientRectCallbackResult = await getRect(this, `.${name}__popover`);
      const bottom = parseFloat(offset.bottom);
      const left = parseFloat(offset.left);
      const right = parseFloat(offset.right);
      const top = parseFloat(offset.top);
      const height = systemInfo.windowHeight - bottom - top;
      const width = systemInfo.windowWidth - left - right;
      const style: Partial<CSSStyleDeclaration> = {};
      switch (placement) {
        case 'center':
        case 'bottom':
          style.top = `${Math.max(height + top + 16, 1)}px`;
          style.left = `${Math.max(width / 2 + left - rect.width / 2, 1)}px`;
          break;
        case 'bottom-left':
          style.top = `${Math.max(height + top + 16, 1)}px`;
          style.left = `${Math.max(left, 1)}px`;
          break;
        case 'bottom-right':
          style.top = `${height + top + 16}px`;
          style.right = `${Math.max(right, 1)}px`;
          break;
        case 'left':
          style.top = `${Math.max(height / 2 + top - rect.height / 2, 1)}px`;
          style.right = `${Math.max(width + right + 16, 1)}px`;
          break;
        case 'left-top':
          style.top = `${Math.max(top, 1)}px`;
          style.right = `${Math.max(width + right + 16, 1)}px`;
          break;
        case 'left-bottom':
          style.bottom = `${Math.max(bottom, 1)}px`;
          style.right = `${Math.max(width + right + 16, 1)}px`;
          break;
        case 'right':
          style.top = `${Math.max(height / 2 + top - rect.height / 2, 1)}px`;
          style.left = `${Math.max(left + width + 16, 1)}px`;
          break;
        case 'right-top':
          style.top = `${Math.max(top, 1)}px`;
          style.left = `${Math.max(left + width + 16, 1)}px`;
          break;
        case 'right-bottom':
          style.bottom = `${Math.max(bottom, 1)}px`;
          style.left = `${Math.max(left + width + 16, 1)}px`;
          break;
        case 'top':
          style.bottom = `${Math.max(height + bottom + 16, 1)}px`;
          style.left = `${Math.max(width / 2 + left - rect.width / 2, 1)}px`;
          break;
        case 'top-left':
          style.bottom = `${Math.max(height + bottom + 16, 1)}px`;
          style.left = `${Math.max(left, 1)}px`;
          break;
        case 'top-right':
          style.bottom = `${Math.max(height + bottom + 16, 1)}px`;
          style.right = `${Math.max(right, 1)}px`;
          break;
        default:
          break;
      }
      return styles(style);
    },
    buttonProps(step) {
      let skipButton = step.skipButtonProps ?? this.data.skipButtonProps;
      skipButton = {
        ...this.data.skipButton,
        ...skipButton,
        class: `${prefix}-class-skip ${skipButton?.class || ''}`,
        type: 'skip',
      };
      let nextButton = step.nextButtonProps ?? this.data.nextButtonProps;
      nextButton = {
        ...this.data.nextButton,
        ...nextButton,
        class: `${prefix}-class-next ${nextButton?.class || ''}`,
        type: 'next',
      };
      nextButton = { ...nextButton, content: this.buttonContent(nextButton) };
      let backButton = step.backButtonProps ?? this.data.backButtonProps;
      backButton = {
        ...this.data.backButton,
        ...backButton,
        class: `${prefix}-class-back ${backButton?.class || ''}`,
        type: 'back',
      };
      let finishButton = step.finishButtonProps ?? this.data.finishButtonProps;
      finishButton = {
        ...this.data.finishButton,
        ...finishButton,
        class: `${prefix}-class-finish ${finishButton?.class || ''}`,
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
