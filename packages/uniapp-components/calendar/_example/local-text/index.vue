<template>
  <view>
    <t-calendar
      :visible="visible"
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"
      :locale-text="localeText"
      @update:visible="visible = $event"
      @confirm="handleConfirm"
      @close="onClose"
    />
    <t-cell
      arrow
      title="国际化"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />
  </view>
</template>
<script>
import TCalendar from '@tdesign/uniapp/calendar/calendar.vue';
import TCell from '@tdesign/uniapp/cell/cell.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    TCalendar,
    TCell,
  },
  data() {
    return {
      visible: false,
      value: new Date(2022, 1, 18).getTime(),
      minDate: new Date(2022, 1, 1).getTime(),
      maxDate: new Date(2022, 2, 15).getTime(),
      localeText: {
        title: 'Select Date',
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthTitle: '{month} {year}',
        confirm: 'Confirm',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      const { value } = e;
      this.value = value;
    },
    onClose(detail) {
      console.log(detail.trigger);
    },
  },
};
</script>
<style>
</style>
