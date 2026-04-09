<template>
  <view>
    <t-calendar
      :visible="visible"
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"
      @update:visible="visible = $event"
      @confirm="handleConfirm"
    />
    <t-cell
      arrow
      title="含不可选的日历"
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
      value: new Date(2022, 1, 18).getTime(),
      minDate: new Date(2022, 1, 18).getTime(),
      maxDate: new Date(2022, 2, 1).getTime(),
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
      console.log(value);
    },
  },
};
</script>
<style>
.is-holiday:not(.t-calendar__dates-item--selected) {
    color: #e34d59 !important;
}
</style>
