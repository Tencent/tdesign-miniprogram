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

  controlledProps = [
    {
      key: 'current',
      event: 'change',
    },
  ];

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
      const rect = await step.element().catch(() => null);
      if (!rect) return;
      const highlightPadding = step.highlightPadding ?? this.data.highlightPadding;
      const referenceTop = Math.max(rect.top - highlightPadding, 1);
      const referenceRight = Math.max(systemInfo.windowWidth - rect.right - highlightPadding, 1);
      const referenceBottom = Math.max(systemInfo.windowHeight - rect.bottom - highlightPadding, 1);
      const referenceLeft = Math.max(rect.left - highlightPadding, 1);
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
        desc: step.body ?? '',
        ...this.buttonProps(step),
      });
      await this.nextTick();
      const popoverStyle = await this.placementOffset(step.placement, style);
      this.setData({ popoverStyle });
    },
    async placementOffset(placement, offset) {
      const rect = await getRect(this, `.${name}__popover`);
      // eslint-disable-next-line no-console
      console.log(rect, placement, offset);
      return '';
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
      return `${button.content}${hideCounter ? '' : ` (${current + 1}/${steps.length})`}`;
    },
    onTplButtonTap(e) {
      const { type } = e.target.dataset;
      // eslint-disable-next-line no-console
      console.log(type);
    },
  };
}
