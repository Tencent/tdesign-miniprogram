<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix"
  >
    <view
      v-if="theme === PRO_THEME.LINE"
      :class="[
        classPrefix + '--thin ' + classPrefix + '--status--' + (status || computedStatus),
        tClass
      ]"
    >
      <view
        aria-role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="computedProgress"
        :aria-label="ariaLabel || (isIOS ? getIOSAriaLabel(status) : getAndroidAriaLabel(status))"
        aria-live="polite"
        :class="classPrefix + '__bar'"
        :style="'height: ' + heightBar + 'px;border-radius: ' + heightBar + 'px;background-color: ' + bgColorBar"
      >
        <view
          :class="[
            classPrefix + '__inner ',
            tClassBar
          ]"
          :style="'background: ' + colorBar + '; width: ' + (computedProgress + '%')"
        />
      </view>
      <view
        v-if="label"
        :class="classPrefix + '__info ' + tClassLabel"
        :aria-hidden="true"
      >
        <block
          v-if="tools.includes(STATUS, status)"
          name="icon"
        >
          <t-icon
            :t-class="classPrefix + '__icon ' + classPrefix + '__icon--'"
            :name="LINE_STATUS_ICON[status]"
            :size="22 || ''"
          />
        </block>
        <text v-else>
          {{ tools.isString(label) ? label : computedProgress + '%' }}
        </text>
      </view>
      <slot name="label" />
    </view>
    <view
      v-if="theme === PRO_THEME.PLUMP"
      aria-role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="computedProgress"
      :aria-label="ariaLabel || (isIOS ? getIOSAriaLabel(status) : getAndroidAriaLabel(status))"
      aria-live="polite"
      :class="
        classPrefix +
          '__bar ' +
          classPrefix +
          '--plump ' +
          (computedProgress > 10 ? classPrefix + '--over-ten' : classPrefix + '--under-ten') +
          ' ' +
          classPrefix +
          '--status--' +
          (status || computedStatus) +
          ' ' +
          tClass
      "
      :style="'height: ' + heightBar + 'px;border-radius: ' + heightBar + 'px;background-color: ' + bgColorBar"
    >
      <view
        :class="classPrefix + '__inner ' + tClassBar"
        :style="'background: ' + colorBar + '; width: ' + computedProgress + '%'"
      >
        <view
          v-if="label && computedProgress > 10"
          :class="classPrefix + '__info ' + tClassLabel"
        >
          <text>{{ tools.isString(label) ? label : computedProgress + '%' }}</text>
        </view>
        <slot
          v-if="computedProgress > 10"
          name="label"
        />
      </view>
      <view
        v-if="label && computedProgress <= 10"
        :class="classPrefix + '__info ' + tClassLabel"
        :aria-hidden="true"
      >
        <text>{{ tools.isString(label) ? label : computedProgress + '%' }}</text>
      </view>
      <slot
        v-if="computedProgress <= 10"
        name="label"
      />
    </view>
    <view
      v-if="theme === PRO_THEME.CIRCLE"
      :class="classPrefix + '--status--' + (status || computedStatus) + ' ' + tClass"
    >
      <view
        aria-role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="computedProgress"
        :aria-label="ariaLabel || (isIOS ? getIOSAriaLabel(status) : getAndroidAriaLabel(status))"
        aria-live="polite"
        :class="tools.cls(classPrefix + '__canvas--circle', [[size, true]])"
        :style="
          getCircleStyle(size, heightBar) +
            '; background-image: conic-gradient(from var(--td-progress-circle-from), ' +
            (colorCircle || STATUS_COLOR[status] || 'var(--td-progress-inner-bg-color)') +
            ' ' +
            computedProgress +
            '%, ' +
            (bgColorBar || 'var(--td-progress-track-bg-color)') +
            ' 0%);'
        "
      >
        <view :class="classPrefix + '__canvas--inner ' + tClassBar">
          <view
            v-if="label"
            :class="classPrefix + '__info ' + tClassLabel"
            :aria-hidden="true"
          >
            <block
              v-if="tools.includes(STATUS, status)"
              name="icon"
            >
              <t-icon
                :t-class="classPrefix + '__icon ' + classPrefix + '__icon--'"
                :name="CIRCLE_STATUS_ICON[status]"
                size="96rpx"
              />
            </block>
            <text v-else>
              {{ tools.isString(label) ? label : computedProgress + '%' }}
            </text>
          </view>
          <slot name="label" />
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
import { getBackgroundColor } from './utils';
import { unitConvert, isIOS as isIOSValidator } from '../common/utils';
import tools from '../common/utils.wxs';

import {
  STATUS,
  STATUS_TEXT,
  PRO_THEME,

  STATUS_COLOR,
  LINE_STATUS_ICON,
  CIRCLE_STATUS_ICON,

  getCircleStyle,
  getIOSAriaLabel,
  getAndroidAriaLabel,
} from './computed.js';


const name = `${prefix}-progress`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-bar`,
    `${prefix}-class-label`,
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
      colorBar: '',
      heightBar: '',
      computedStatus: '',
      computedProgress: 0,
      isIOS: isIOSValidator(),
      STATUS,
      STATUS_TEXT,
      PRO_THEME,

      STATUS_COLOR,
      LINE_STATUS_ICON,
      CIRCLE_STATUS_ICON,

      getCircleStyle,
      getIOSAriaLabel,
      getAndroidAriaLabel,
      tools,
    };
  },
  watch: {
    percentage: {
      handler(percentage) {
        percentage = Math.max(0, Math.min(percentage, 100));

        this.computedStatus = percentage === 100 ? 'success' : '';
        this.computedProgress = percentage;
      },
      immediate: true,
    },

    color: {
      handler(color) {
        this.colorBar = getBackgroundColor(color);
        this.colorCircle = typeof color === 'object' ? '' : color; // 环形不支持渐变，单独处理
      },
      immediate: true,
    },

    strokeWidth: {
      handler(strokeWidth) {
        if (!strokeWidth) {
          return '';
        }
        this.heightBar = unitConvert(strokeWidth);
      },
      immediate: true,
    },

    trackColor: {
      handler(trackColor) {
        this.bgColorBar = trackColor;
      },
      immediate: true,
    },
  },
  methods: {

  },
});
</script>
<style scoped>
@import './progress.css';
</style>
