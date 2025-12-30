<template>
  <view>
    <t-overlay
      v-if="modeType === 'popover'"
      :visible="visible"
      :using-custom-navbar="usingCustomNavbar"
      :custom-navbar-height="customNavbarHeight"
      background-color="transparent"
      :z-index="zIndex"
    >
      <view :class="tClass + ' ' + classPrefix">
        <view
          :class="tClassReference + ' ' + classPrefix + '__reference ' + (nonOverlay ? classPrefix + '__reference--nonoverlay' : '')"
          :style="referenceStyle"
        />
        <view
          :class="tClassPopover + ' ' + classPrefix + '__container ' + (title || body ? classPrefix + '__container--' + modeType : '')"
          :style="popoverStyle"
        >
          <ContentComp
            :title="title"
            :body="body"
            :current="_current"
            :class-prefix="classPrefix"
            :prefix="prefix"
            :skip-button="skipButton"
            :back-button="backButton"
            :next-button="nextButton"
            :finish-button="finishButton"
            :mode-type="modeType"
            :hide-skip="hideSkip"
            :hide-back="hideBack"
            :steps="steps"
            :t-class-tooltip="tClassTooltip"
            :t-class-body="tClassBody"
            :t-class-title="tClassTitle"
            :t-class-footer="tClassFooter"
            @onTplButtonTap="onTplButtonTap"
          >
            <template #content-0>
              <slot name="content-0" />
            </template>
            <template #content-1>
              <slot name="content-1" />
            </template>
            <template #content-2>
              <slot name="content-2" />
            </template>
            <template #content-3>
              <slot name="content-3" />
            </template>
            <template #content-4>
              <slot name="content-4" />
            </template>
            <template #content-5>
              <slot name="content-5" />
            </template>
            <template #content-6>
              <slot name="content-6" />
            </template>

            <template #title-0>
              <slot name="title-0" />
            </template>
            <template #title-1>
              <slot name="title-1" />
            </template>
            <template #title-2>
              <slot name="title-2" />
            </template>
            <template #title-3>
              <slot name="title-3" />
            </template>
            <template #title-4>
              <slot name="title-4" />
            </template>
            <template #title-5>
              <slot name="title-5" />
            </template>
            <template #title-6>
              <slot name="title-6" />
            </template>

            <template #body-0>
              <slot name="body-0" />
            </template>
            <template #body-1>
              <slot name="body-1" />
            </template>
            <template #body-2>
              <slot name="body-2" />
            </template>
            <template #body-3>
              <slot name="body-3" />
            </template>
            <template #body-4>
              <slot name="body-4" />
            </template>
            <template #body-5>
              <slot name="body-5" />
            </template>
            <template #body-6>
              <slot name="body-6" />
            </template>
          </ContentComp>
        </view>
      </view>
    </t-overlay>
    <t-popup
      v-else-if="modeType === 'dialog'"
      :visible="visible"
      :show-overlay="!nonOverlay"
      :using-custom-navbar="usingCustomNavbar"
      :custom-navbar-height="customNavbarHeight"
      :z-index="zIndex"
      placement="center"
    >
      <view :class="tClass + ' ' + classPrefix">
        <view :class="tClassPopover + ' ' + classPrefix + '__container ' + (title || body ? classPrefix + '__container--' + modeType : '')">
          <ContentComp
            :title="title"
            :body="body"
            :current="_current"
            :class-prefix="classPrefix"
            :prefix="prefix"
            :skip-button="skipButton"
            :back-button="backButton"
            :next-button="nextButton"
            :finish-button="finishButton"
            :mode-type="modeType"
            :hide-skip="hideSkip"
            :hide-back="hideBack"
            :steps="steps"
            :t-class-tooltip="tClassTooltip"
            :t-class-body="tClassBody"
            :t-class-title="tClassTitle"
            :t-class-footer="tClassFooter"
            @onTplButtonTap="onTplButtonTap"
          >
            <template #content-0>
              <slot name="content-0" />
            </template>
            <template #content-1>
              <slot name="content-1" />
            </template>
            <template #content-2>
              <slot name="content-2" />
            </template>
            <template #content-3>
              <slot name="content-3" />
            </template>
            <template #content-4>
              <slot name="content-4" />
            </template>
            <template #content-5>
              <slot name="content-5" />
            </template>
            <template #content-6>
              <slot name="content-6" />
            </template>

            <template #title-0>
              <slot name="title-0" />
            </template>
            <template #title-1>
              <slot name="title-1" />
            </template>
            <template #title-2>
              <slot name="title-2" />
            </template>
            <template #title-3>
              <slot name="title-3" />
            </template>
            <template #title-4>
              <slot name="title-4" />
            </template>
            <template #title-5>
              <slot name="title-5" />
            </template>
            <template #title-6>
              <slot name="title-6" />
            </template>

            <template #body-0>
              <slot name="body-0" />
            </template>
            <template #body-1>
              <slot name="body-1" />
            </template>
            <template #body-2>
              <slot name="body-2" />
            </template>
            <template #body-3>
              <slot name="body-3" />
            </template>
            <template #body-4>
              <slot name="body-4" />
            </template>
            <template #body-5>
              <slot name="body-5" />
            </template>
            <template #body-6>
              <slot name="body-6" />
            </template>
          </ContentComp>
        </view>
      </view>
    </t-popup>
  </view>
</template>

<script>
import tOverlay from '../overlay/overlay';
import tButton from '../button/button';
import tPopup from '../popup/popup';
import { uniComponent } from '../common/src/index';
import props from './props';
import { prefix } from '../common/config';
import { isFunction, isNumber } from '../common/validator';
import { debounce, getRect, rpx2px, styles, unitConvert, nextTick, systemInfo, coalesce } from '../common/utils';
import ContentComp from './content.vue';

import useCustomNavbar from '../mixins/using-custom-navbar';

const name = `${prefix}-guide`;

let that;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'current',
      event: 'change',
    },
  ],
  externalClasses: [
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
  ],
  mixins: [
    useCustomNavbar,
  ],
  components: {
    tOverlay,
    tButton,
    tPopup,
    ContentComp,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      visible: false,
      _current: -1,
      _steps: [],
      referenceStyle: '',
      popoverStyle: '',
      title: '',
      body: '',
      nonOverlay: false,
      modeType: '',

      skipButton: {},
      backButton: {},
      nextButton: {},
      finishButton: {},
    };
  },
  watch: {
    steps: {
      handler() {
        this._init();
      },
      deep: true,
    },
    current: {
      handler(v) {
        this._current = v;
      },
    },
    _current: '_init',
    showOverlay: '_init',
  },
  created() {
    that = this;
    // this._init =
    this._getPlacement = this.getPlacement();
  },
  mounted() {
    this._init();
  },
  methods: {
    _init: debounce(() => that.init(), 20),
    async init() {
      console.log('doing init');
      const { steps } = this;
      const { _current } = this;
      const step = steps[_current];
      if (!step) {
        this.visible = false;
        return;
      }

      const modeType = (coalesce(step.mode, this.mode)) === 'dialog' ? 'dialog' : 'popover';
      const showOverlay = coalesce(step.showOverlay, this.showOverlay);
      this.nonOverlay = !showOverlay;
      this.modeType = modeType;


      // if (current === _current) return;
      if (modeType === 'popover') {
        const rect = await step.element();
        console.log('rect', rect);
        if (!rect) return;
        const highlightPadding = rpx2px(coalesce(step.highlightPadding, this.highlightPadding));
        const referenceTop = rect.top - highlightPadding;
        const referenceRight = systemInfo.windowWidth - rect.right - highlightPadding;
        const referenceLeft = rect.left - highlightPadding;
        const referenceWidth = rect.width + 2 * highlightPadding;
        const referenceHeight = rect.height + 2 * highlightPadding;

        const style = {
          top: `${referenceTop}px`,
          right: `${referenceRight}px`,
          left: `${referenceLeft}px`,
          width: `${referenceWidth}px`,
          height: `${referenceHeight}px`,
        };
        this._steps = this.steps;
        // this._current = this.current;
        this.visible = true;
        this.referenceStyle = styles(style);
        this.title = coalesce(step.title, '');
        this.body = coalesce(step.body, '');
        this.makeButtonProps(step, 'popover');

        const popoverStyle = await this.placementOffset(step, style);
        this.popoverStyle = popoverStyle;
      } else {
        this._steps = this.steps;
        // this._current = this.current;
        this.visible = true;
        this.title = coalesce(step.title, '');
        this.body = coalesce(step.body, '');
        this.makeButtonProps(step, 'dialog');
      }
    },
    async placementOffset({ placement, offset }, place) {
      await nextTick();
      const rect = await getRect(this, `.${name}__container`);
      const style = this._getPlacement[placement]?.(rect, place, offset);
      return styles({ position: 'absolute', ...style });
    },
    makeButtonProps(step, mode) {
      const {
        tClassSkip,
        tClassNext,
        tClassBack,
        tClassFinish,
      } = this;
      let skipButton = coalesce(step.skipButtonProps, this.skipButtonProps);
      const size = mode === 'popover' ? 'extra-small' : 'medium';
      skipButton = {
        theme: 'light',
        content: '跳过',
        size,
        ...skipButton,
        tClass: `${tClassSkip} ${name}__button ${skipButton?.class || ''}`,
        type: 'skip',
      };
      let nextButton = coalesce(step.nextButtonProps, this.nextButtonProps);
      nextButton = {
        theme: 'primary',
        content: '下一步',
        size,
        ...nextButton,
        tClass: `${tClassNext} ${name}__button ${nextButton?.class || ''}`,
        type: 'next',
      };
      nextButton = { ...nextButton, content: this.buttonContent(nextButton) };
      let backButton = coalesce(step.backButtonProps, this.backButtonProps);
      backButton = {
        theme: 'light',
        content: '返回',
        size,
        ...backButton,
        tClass: `${tClassBack} ${name}__button ${backButton?.class || ''}`,
        type: 'back',
      };
      let finishButton = coalesce(step.finishButtonProps, this.finishButtonProps);
      finishButton = {
        theme: 'primary',
        content: '完成',
        size,
        ...finishButton,
        tClass: `${tClassFinish} ${name}__button ${finishButton?.class || ''}`,
        type: 'finish',
      };
      finishButton = { ...finishButton, content: this.buttonContent(finishButton) };

      this.skipButton = skipButton;
      this.nextButton = nextButton;
      this.backButton = backButton;
      this.finishButton = finishButton;
    },
    renderCounter() {
      const { steps, _current, counter } = this;
      const stepsTotal = steps.length;
      const innerCurrent = _current + 1;
      const popupSlotCounter = isFunction(counter) ? counter({ total: stepsTotal, current: innerCurrent }) : counter;
      return counter ? popupSlotCounter : `(${innerCurrent}/${stepsTotal})`;
    },
    buttonContent(button) {
      const { hideCounter } = this;
      return `${button.content.replace(/ \(.*?\)/, '')} ${hideCounter ? '' : this.renderCounter()}`;
    },
    onTplButtonTap(e, { type }) {
      console.log('onTplButtonTap.type', type);
      const params = { e, current: this._current, total: this.steps.length };
      switch (type) {
        case 'next':
          this.$emit('next-step-click', { next: this._current + 1, ...params });
          // this.setData({ current: this..current + 1 });
          this._current = this._current + 1;
          break;
        case 'skip':
          this.$emit('skip', params);
          // this.setData({ current: -1 });
          this._current = -1;
          break;
        case 'back':
          this.$emit('back', params);
          // this.setData({ current: 0 });
          this._current = 0;
          break;
        case 'finish':
          this.$emit('finish', params);
          // this.setData({ current: -1 });
          this._current = -1;
          break;
        default:
          break;
      }
      console.log('_current', this._current);
      this.$emit('change', { current: this._current });
    },
    getPlacement() {
      const space = rpx2px(32);
      const offsetLeft = offset => unitConvert(isNumber(offset?.[0]) ? `${offset?.[0]}rpx` : offset?.[0] || 0);
      const offsetTop = offset => unitConvert(isNumber(offset?.[1]) ? `${offset?.[1]}rpx` : offset?.[1] || 0);
      const left = place => parseFloat(place.left);
      const right = place => parseFloat(place.right);
      const top = place => parseFloat(place.top);
      const height = place => parseFloat(place.height);
      const width = place => parseFloat(place.width);
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
          top: `${Math.max(top(place) + height(place) - rect.height - offsetTop(offset), 1)}px`,
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
          top: `${Math.max(top(place) + height(place) - rect.height - offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + width(place) + space + offsetLeft(offset), 1)}px`,
        }),
        top: (rect, place, offset) => ({
          top: `${Math.max(top(place) - rect.height - space + offsetTop(offset), 1)}px`,
          left: `${Math.max(width(place) / 2 + left(place) - rect.width / 2 + offsetLeft(offset), 1)}px`,
        }),
        'top-left': (rect, place, offset) => ({
          top: `${Math.max(top(place) - rect.height - space + offsetTop(offset), 1)}px`,
          left: `${Math.max(left(place) + offsetLeft(offset), 1)}px`,
        }),
        'top-right': (rect, place, offset) => ({
          top: `${Math.max(top(place) - rect.height - space + offsetTop(offset), 1)}px`,
          right: `${Math.max(right(place) - offsetLeft(offset), 1)}px`,
        }),
      };
    },
  },
});

</script>
<style scoped>
@import './guide.css';

</style>
