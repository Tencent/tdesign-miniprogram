<template>
  <view
    :class="utils.cls(classPrefix, [['popup', usePopup]]) + ' ' + classPrefix + '-switch-mode--' + switchMode + ' ' + tClass"
    :style="customStyle"
  >
    <view
      :class="classPrefix + '__title'"
      tabindex="0"
    >
      <slot name="title" />
      <text v-if="title || realLocalText.title">
        {{ title || realLocalText.title }}
      </text>
    </view>
    <t-icon
      v-if="usePopup"
      name="close"
      :t-class="classPrefix + '__close-btn'"
      size="48rpx"
      aria-role="button"
      aria-label="关闭"
      :custom-style="closeBtnCustomStyle"
      @click="handleClose"
    />
    <block
      v-if="switchMode !== 'none'"
      name="calendar-header"
    >
      <calendar-header
        :class-prefix="classPrefix + '-header'"
        :switch-mode="switchMode"
        :title="getMonthTitle(
          currentMonth[0] && currentMonth[0].year,
          realLocalText.months && currentMonth[0] && realLocalText.months[currentMonth[0].month],
          realLocalText.monthTitle
        )"
        :pre-year-btn-disable="actionButtons.preYearBtnDisable"
        :prev-month-btn-disable="actionButtons.prevMonthBtnDisable"
        :next-year-btn-disable="actionButtons.nextYearBtnDisable"
        :next-month-btn-disable="actionButtons.nextMonthBtnDisable"
        @handleSwitchModeChange="handleSwitchModeChange"
      />
    </block>
    <view
      aria-hidden
      :class="classPrefix + '__days'"
    >
      <view
        v-for="(item, index) in days"
        :key="index"
        :class="classPrefix + '__days-item'"
      >
        {{ item }}
      </view>
    </view>
    <scroll-view
      :class="classPrefix + '__months'"
      :scroll-into-view="scrollIntoView"
      scroll-y
      enhanced
      :show-scrollbar="false"
      @scroll="onScroll"
    >
      <block
        v-for="(item, index) in switchMode === 'none' ? months : currentMonth"
        :key="index"
      >
        <block
          v-if="switchMode === 'none'"
          name="calendar-header"
        >
          <calendar-header
            :t-class="classPrefix + '__month'"
            :class-prefix="classPrefix + '-header'"
            :switch-mode="switchMode"
            :t-id="'year_' + item.year + '_month_' + item.month"
            :title="getMonthTitle(item.year, realLocalText.months && realLocalText.months[item.month], realLocalText.monthTitle)"
            :pre-year-btn-disable="actionButtons.preYearBtnDisable"
            :prev-month-btn-disable="actionButtons.prevMonthBtnDisable"
            :next-year-btn-disable="actionButtons.nextYearBtnDisable"
            :next-month-btn-disable="actionButtons.nextMonthBtnDisable"
            @handleSwitchModeChange="handleSwitchModeChange"
          />
        </block>

        <view :class="classPrefix + '__dates'">
          <view
            v-for="(item, index1) in (item.weekdayOfFirstDay - firstDayOfWeek + 7) % 7"
            :key="index1"
          />
          <block
            v-for="(dateItem, dateIndex) in item.months"
            :key="dateIndex"
          >
            <view
              :class="classPrefix + '__dates-item ' + dateItem.className + ' ' + classPrefix + '__dates-item--' + dateItem.type"
              :data-year="item.year"
              :data-month="item.month"
              :data-date="dateItem"
              aria-role="button"
              :aria-label="getDateLabel(item, dateItem)"
              :aria-disabled="dateItem.type === 'disabled'"
              @click="handleSelect"
            >
              <view
                v-if="dateItem.prefix"
                :class="classPrefix + '__dates-item-prefix'"
              >
                {{ dateItem.prefix }}
              </view>
              {{ dateItem.day }}
              <view
                v-if="dateItem.suffix"
                :class="classPrefix + '__dates-item-suffix ' + classPrefix + '__dates-item-suffix--' + dateItem.type"
              >
                {{ dateItem.suffix }}
              </view>
            </view>
          </block>
        </view>
      </block>
    </scroll-view>
    <view
      v-if="innerConfirmBtn != null && usePopup"
      :class="classPrefix + '__footer'"
    >
      <slot
        v-if="innerConfirmBtn === 'slot'"
        name="confirm-btn"
      />
      <block v-else-if="innerConfirmBtn">
        <t-button
          :t-id="innerConfirmBtn.tId"
          :custom-style="innerConfirmBtn.style"
          :block="coalesce(innerConfirmBtn.block, true)"
          :t-class="coalesce(coalesce(innerConfirmBtn.tClass, prefix + '-class-action'))"
          :class="prefix + '-calendar__confirm-btn'"
          :disabled="innerConfirmBtn.disabled"
          :data-type="'action'"
          :data-extra="innerConfirmBtn.dataExtra"
          :custom-dataset="innerConfirmBtn.customDataset"
          :content="innerConfirmBtn.content || realLocalText.confirm"
          :icon="innerConfirmBtn.icon"
          :loading="innerConfirmBtn.loading"
          :loading-props="innerConfirmBtn.loadingProps"
          :theme="coalesce(innerConfirmBtn.theme, 'primary')"
          :ghost="innerConfirmBtn.ghost"
          :shape="innerConfirmBtn.shape"
          :size="innerConfirmBtn.size"
          :variant="innerConfirmBtn.variant"
          :open-type="innerConfirmBtn.openType"
          :hover-class="innerConfirmBtn.hoverClass"
          :hover-stop-propagation="innerConfirmBtn.hoverStopPropagation"
          :hover-start-time="innerConfirmBtn.hoverStartTime"
          :hover-stay-time="innerConfirmBtn.hoverStayTime"
          :lang="innerConfirmBtn.lang"
          :session-from="innerConfirmBtn.sessionFrom"
          :send-message-title="innerConfirmBtn.sendMessageTitle"
          :send-message-path="innerConfirmBtn.sendMessagePath"
          :send-message-img="innerConfirmBtn.sendMessageImg"
          :app-parameter="innerConfirmBtn.appParameter"
          :show-message-card="innerConfirmBtn.showMessageCard"
          :aria-label="innerConfirmBtn.ariaLabel"
          @click="onTplButtonTap"
          @getuserinfo="onTplButtonTap"
          @contact="onTplButtonTap"
          @getphonenumber="onTplButtonTap"
          @error="onTplButtonTap"
          @opensetting="onTplButtonTap"
          @launchapp="onTplButtonTap"
          @agreeprivacyauthorization="onTplButtonTap"
        >
          <slot v-if="innerConfirmBtn.useDefaultSlot" />
        </t-button>
      </block>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon.vue';
import TButton from '../button/button.vue';
import utils from '../common/utils.wxs';
import {
  getDateLabel,
  getMonthTitle,
} from './computed.js';
import CalendarHeader from './calendar-header.vue';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './template.props';


export default {
  name: 'TCalendarContent',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    CalendarHeader,
    TIcon,
    TButton,
  },
  props: {
    ...props,
  },
  emits: [
    'clickButton',
    'close',
    'scroll',
    'select',
    'handleSwitchModeChange',
  ],
  data() {
    return {
      prefix,
      utils,
    };
  },
  computed: {
    closeBtnCustomStyle() {
      return utils._style({
        position: 'absolute',
        top: '16px',
        right: '16px',
        margin: '-12px',
        padding: '12px',
        color: 'var(--td-calendar-title-color, var(--td-text-color-primary, var(--td-font-gray-1, rgba(0, 0, 0, .9))))',
      });
    },
  },
  watch: {
  },
  mounted() {

  },
  methods: {
    coalesce,
    getDateLabel,
    getMonthTitle,
    onTplButtonTap() {
      this.$emit('clickButton');
    },
    handleSelect(...args) {
      this.$emit('select', ...args);
    },
    handleClose() {
      this.$emit('close');
    },
    onScroll(...args) {
      this.$emit('scroll', ...args);
    },
    handleSwitchModeChange(...args) {
      this.$emit('handleSwitchModeChange', ...args);
    },
  },
};

</script>
<style scoped>
@import './calendar.css';
</style>
