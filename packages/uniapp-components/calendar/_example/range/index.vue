<template>
  <view>
    <t-calendar
      :visible="visible"
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"
      type="range"
      @update:visible="visible = $event"
      @confirm="handleConfirm"
    />

    <view
      class="wrapper"
      @click="handleCalendar"
    >
      <view class="wrapper__left">
        {{ formatTimestamp(value[0]) }}
      </view>
      <t-icon
        class="wrapper__center"
        name="swap-right"
        size="40rpx"
      />
      <view class="wrapper__right">
        {{ formatTimestamp(value[1]) }}
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '@tdesign/uniapp/icon/icon.vue';
import TCalendar from '@tdesign/uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    TIcon,
    TCalendar,
  },
  data() {
    return {
      visible: false,
      value: [new Date(2024, 11, 5).getTime(), new Date(2024, 11, 10).getTime()],
      minDate: new Date(2024, 10, 1).getTime(),
      maxDate: new Date(2024, 12, 1).getTime(),
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      console.log(e.value);
      const { value } = e;
      this.value = value;
    },
  },
};
</script>
<style>
.wrapper {
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrapper__center {
    color: var(--td-text-color-placeholder);
}

.wrapper__left,
.wrapper__right {
    width: 240rpx;
    color: var(--td-text-color-primary);
    font-size: 32rpx;
    font-weight: 600;
    line-height: 48rpx;
}

.wrapper__right {
    text-align: right;
}
</style>
