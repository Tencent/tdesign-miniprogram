<template>
  <view>
    <t-calendar
      :visible="visible"
      @update:visible="visible = $event"
      @confirm="handleConfirm"
      @close="onClose"
    />
    <t-cell
      arrow
      title="单个选择日历"
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
      value: null,
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
      console.log(value);
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
