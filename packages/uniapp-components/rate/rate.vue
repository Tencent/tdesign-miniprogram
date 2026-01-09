<template>
  <view
    :class="classPrefix"
    :style="tools._style([customStyle])"
  >
    <view
      :class="classPrefix + '__wrapper ' + tClass"
      :style="'font-size:' + utils.regSize(size)"
      aria-role="slider"
      :aria-valuemax="count"
      :aria-valuemin="0"
      :aria-valuenow="dataValue"
      :aria-valuetext="utils.getText(texts, dataValue, defaultTexts)"
      @touchstart="parseEventDynamicCode($event, !disabled ? 'onTouchStart' : '')"
      @touchmove="parseEventDynamicCode($event, !disabled ? 'onTouchMove' : '')"
      @click="onTap"
      @touchend="parseEventDynamicCode($event, !disabled ? 'onTouchEnd' : '')"
      @touchcancel="parseEventDynamicCode($event, !disabled ? 'onTouchEnd' : '')"
    >
      <t-icon
        v-for="(item, index) in count"
        :key="index"
        :t-class="classPrefix + '__icon ' + utils.getIconClass(classPrefix + '__icon', defaultValue, dataValue, index, allowHalf, disabled, scaleIndex) + ' ' + tClassIcon"
        :custom-style="'margin-right: ' + (count - index > 1 ? tools.addUnit(gap) : 0) + '; ' + utils.getColor(color)"
        :name="utils.getIconName(defaultValue, dataValue, index, icon)"
        :size="size"
        :prefix="iconPrefix"
      />
    </view>
    <text
      v-if="showText"
      :class="tools.cls(classPrefix + '__text', [['active', dataValue > 0]]) + ' ' + tClassText"
      :aria-hidden="true"
    >
      {{ utils.getText(texts, dataValue, defaultTexts) }}
    </text>
    <text
      v-if="isVisibleToScreenReader"
      :class="
        tools.cls(classPrefix + '__text', [
          ['active', dataValue > 0],
          ['sr-only', isVisibleToScreenReader]
        ]) +
          ' ' +
          tClassText
      "
      aria-role="alert"
      aria-live="assertive"
    >
      {{ dataValue + '星' }} {{ utils.getText(texts, dataValue, defaultTexts) }}
    </text>
    <!-- TODO -->
    <view
      v-if="tipsVisible && placement"
      :class="tools.cls(classPrefix + '__tips', [placement])"
      :style="'left: ' + tipsLeft + 'px'"
      :aria-hidden="true"
    >
      <block v-if="actionType == 'tap'">
        <view
          v-if="allowHalf"
          :class="tools.cls(classPrefix + '__tips-item', [['active', utils.ceil(dataValue) - 0.5 == dataValue]])"
          :data-value="utils.ceil(dataValue) - 0.5"
          @click="onSelect"
        >
          <t-icon
            :t-class="classPrefix + '__icon ' + classPrefix + '__icon--selected-half'"
            :name="utils.getIconName(defaultValue, dataValue, 0, icon)"
            :size="size"
            :custom-style="utils.getColor(color)"
          />
          <view :class="classPrefix + '__tips-text'">
            {{ utils.ceil(dataValue) - 0.5 }}
          </view>
        </view>
        <view
          :class="tools.cls(classPrefix + '__tips-item', [['active', utils.ceil(dataValue) == dataValue]])"
          :data-value="utils.ceil(dataValue)"
          @click="onSelect"
        >
          <t-icon
            :t-class="tools.cls(classPrefix + '__icon', ['selected'])"
            :name="utils.getIconName(defaultValue, 0, 0, icon)"
            :size="size"
            :custom-style="utils.getColor(color)"
          />
          <view :class="classPrefix + '__tips-text'">
            {{ utils.ceil(dataValue) }}
          </view>
        </view>
      </block>
      <view
        v-else
        :class="tools.cls(classPrefix + '__tips-item', [['active', utils.ceil(dataValue) == dataValue && actionType == 'tap']])"
        :data-value="utils.ceil(dataValue)"
        @click="onSelect"
      >
        <t-icon
          :t-class="
            tools.cls(classPrefix + '__icon', [
              ['selected', utils.ceil(dataValue) == dataValue],
              ['selected-half', utils.ceil(dataValue) != dataValue]
            ])
          "
          :name="utils.getIconName(defaultValue, 0, 0, icon)"
          :size="size"
          :custom-style="utils.getColor(color)"
        />
        <view :class="classPrefix + '__tips-text'">
          {{ dataValue }}
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { unitConvert, getRect, coalesce } from '../common/utils';
import tools from '../common/utils.wxs';
import utils from './computed.js';
import { parseEventDynamicCode } from '../common/event/dynamic';


const name = `${prefix}-rate`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-icon`,
    `${prefix}-class-text`,
  ],
  components: {
    tIcon,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      defaultTexts: ['极差', '失望', '一般', '满意', '惊喜'],
      tipsVisible: false,
      tipsLeft: 0,
      actionType: '',
      scaleIndex: -1,
      isVisibleToScreenReader: false,

      tools,
      utils,
      dataValue: coalesce(this.value, this.defaultValue),
    };
  },
  watch: {
    value: {
      handler(v) {
        this.dataValue = v;
      },
      immediate: true,
    },
  },
  mounted() {

  },
  methods: {
    parseEventDynamicCode,
    onTouch(e, eventType) {
      const { count, allowHalf, gap, dataValue: currentValue, size } = this;
      let touch = e.changedTouches?.[0];
      // #ifdef MP-ALIPAY
      if (eventType === 'tap') {
        touch = e.target;
      }
      // #endif
      const margin = unitConvert(gap);
      getRect(this, `.${name}__wrapper`).then((rect) => {
        const { width, left } = rect;
        const starWidth = (width - (count - 1) * margin) / count;
        const offsetX = touch.pageX - left;
        const num = (offsetX + margin) / (starWidth + margin);
        const remainder = num % 1;
        const integral = num - remainder;
        let value = remainder <= 0.5 && allowHalf ? integral + 0.5 : integral + 1;

        if (value > count) {
          value = count;
        } else if (value < 0) {
          value = 0;
        }

        const tipsLeft = Math.ceil(value - 1) * (unitConvert(gap) + unitConvert(size)) + unitConvert(size) * 0.5;
        this.tipsVisible = true;
        this.actionType = eventType;
        this.scaleIndex = Math.ceil(value);
        this.tipsLeft = Math.max(tipsLeft, 0);

        if (value !== currentValue) {
          this.innerTrigger(value);
        }

        if (this.touchEnd) {
          this.hideTips();
        }
      });
    },
    innerTrigger(value) {
      this._trigger('change', { value });
      if (this._selfControlled) {
        this.currentValue = value;
      }
    },
    onTap(e) {
      const { disabled } = this;
      if (disabled) return;
      this.onTouch(e, 'tap');
    },
    onTouchStart() {
      this.touchEnd = false;
    },
    onTouchMove(e) {
      this.onTouch(e, 'move');
      this.showAlertText();
    },
    onTouchEnd() {
      this.touchEnd = true;
      this.hideTips();
    },
    hideTips() {
      if (this.actionType === 'move') {
        this.tipsVisible = false;
        this.scaleIndex = -1;
      }
    },
    onSelect(e) {
      const { value } = e.currentTarget.dataset;
      const { actionType } = this;

      if (actionType === 'move') return;

      this.innerTrigger(value);

      setTimeout(() => {
        this.tipsVisible = false;
        this.scaleIndex = -1;
      }, 300);
    },
    // 旁白模式: 变更数值时显示告警文案
    showAlertText() {
      if (this.isVisibleToScreenReader === true) return;
      this.isVisibleToScreenReader = true;

      setTimeout(() => {
        this.isVisibleToScreenReader = false;
      }, 2e3);
    },
  },
});

</script>
<style scoped>
@import './rate.css';
</style>
