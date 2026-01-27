<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      type="multiple"
      @confirm="handleConfirm"
    />
    <t-cell
      arrow
      title="多个选择日历"
      @click="handleCalendar"
    >
      <template
        #note
      >
        <view
          class="custom-class-note"
        >
          {{ formatTimestamp(value) }}
        </view>
      </template>
    </t-cell>
  </view>
</template>
<script>
import TCell from 'tdesign-uniapp/cell/cell.vue';
import TCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    TCell,
    TCalendar,
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
      this.value = value;
      console.log(e.value);
    },
  },
};
</script>
<style>
.custom-class-note {
    width: 360rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
