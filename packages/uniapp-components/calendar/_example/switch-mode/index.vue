<template>
  <view>
    <t-calendar
      :visible="visible"
      :value="value"
      switch-mode="year-month"
      :min-date="minDate"
      :max-date="maxDate"
      @update:visible="visible = $event"
      @confirm="handleConfirm"
      @panel-change="handlePanelChange"
    />
    <t-cell
      arrow
      title="带翻页功能的日历"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />
  </view>
</template>
<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TCalendar from '@tdesign/uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';

export default {
  components: {
    TCell,
    TCalendar,
  },
  data() {
    return {
      visible: false,
      value: new Date(2022, 1, 27).getTime(),
      minDate: new Date(2022, 0, 10).getTime(),
      maxDate: new Date(2027, 10, 27).getTime(),
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      this.value = e.value;
      console.log(e.value);
    },
    handlePanelChange(e) {
      const { year, month } = e;
      console.log('year: ', year, 'month: ', month);
    },
  },
};
</script>
<style>
</style>
