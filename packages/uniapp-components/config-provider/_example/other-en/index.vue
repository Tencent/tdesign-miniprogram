<template>
  <t-config-provider :global-config="globalConfig">
    <!-- Rate -->
    <view class="rate-demo-cell">
      <view class="rate-demo-cell__title">
        Rating
      </view>
      <t-rate
        :value="rateValue"
        show-text
        @change="onRateChange"
      />
    </view>

    <!-- Calendar -->
    <t-calendar
      :visible="visible"
      :value="value"
      @update:visible="visible = $event"
      @confirm="handleCalendarConfirm"
      @close="onCalendarClose"
    />
    <t-cell
      arrow
      title="Single select date"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />

    <!-- DateTimePicker -->
    <t-cell
      title="Select time"
      hover
      :note="dateText || 'YY-MM-DD'"
      arrow
      @click="showDatePicker"
    />

    <t-date-time-picker
      auto-close
      :visible="dateVisible"
      mode="date"
      :default-value="date"
      format="YYYY-MM-DD"
      @update:visible="dateVisible = $event"
      @change="onDateConfirm"
      @cancel="hideDatePicker"
    />
  </t-config-provider>
</template>

<script>
import TConfigProvider from '@tdesign/uniapp/config-provider/config-provider.vue';
import TRate from '@tdesign/uniapp/rate/rate.vue';
import TCalendar from '@tdesign/uniapp/calendar/calendar.vue';
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
import enUS from '@tdesign/uniapp/locale/en_US';

function getDateByTimestamp(val) {
  const date = new Date(val);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [date.getFullYear(), month < 10 ? `0${month}` : month, day < 10 ? `0${day}` : day].join('-');
}

export default {
  components: {
    TConfigProvider,
    TRate,
    TCalendar,
    TCell,
    TDateTimePicker,
  },
  data() {
    return {
      globalConfig: enUS,
      // rate
      rateValue: 3,
      // calendar
      visible: false,
      value: null,
      // date-time-picker
      dateVisible: false,
      date: new Date('2021-12-23').getTime(),
      dateText: '',
    };
  },
  methods: {
    formatTimestamp(val) {
      if (!val) return '';
      if (Array.isArray(val)) {
        return val.map(v => getDateByTimestamp(v)).join('、');
      }
      return getDateByTimestamp(val);
    },

    // Rate
    onRateChange(e) {
      const { value } = e;
      this.rateValue = value;
    },

    // Calendar
    handleCalendar() {
      this.visible = true;
    },
    handleCalendarConfirm(e) {
      const { value } = e;
      this.value = value;
    },
    onCalendarClose(detail) {
      console.log(detail.trigger);
    },

    // DateTimePicker
    showDatePicker() {
      this.dateVisible = true;
    },
    hideDatePicker() {
      this.dateVisible = false;
    },
    onDateConfirm(e) {
      const { value } = e;
      this.date = value;
      this.dateText = value;
    },
  },
};
</script>
<style scoped lang="less">
.rate-demo-cell {
  background-color: var(--bg-color-demo);
  color: var(--td-text-color-primary);
  height: 96rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32rpx;
  margin-top: 32rpx;
  margin-bottom: 32rpx;

  &__title {
    width: 200rpx;
  }
}
</style>
