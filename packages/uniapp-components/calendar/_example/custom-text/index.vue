<template>
  <view>
    <t-cell
      arrow
      title="带单行描述的日历"
      :note="formatTimestamp(singleValue)"
      data-type="single"
      @click="handleCalendar($event, { type: 'single' })"
    />

    <view class="demo-desc">
      带双行描述的日历
    </view>
    <t-calendar
      :visible="visible"
      :value="type === 'single' ? singleValue : value"
      :min-date="minDate"
      :max-date="maxDate"
      :format="type === 'single' ? singleFormat : format"
      :data-type="type"
      @update:visible="visible = $event"
      @confirm="handleConfirm($event, { type })"
    />
    <t-cell
      arrow
      title="带双行描述的日历"
      :note="formatTimestamp(value)"
      data-type="multiple"
      @click="handleCalendar($event, { type: 'multiple' })"
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
      type: 'single',
      visible: false,
      value: new Date(2022, 1, 18).getTime(),
      singleValue: new Date(2022, 1, 18).getTime(),
      minDate: new Date(2022, 1, 1).getTime(),
      maxDate: new Date(2022, 2, 15).getTime(),
      singleFormat(day) {
        day.suffix = '¥60';
        return day;
      },
      format(day) {
        const { date } = day;
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const curDate = date.getDate();
        day.suffix = '¥60';
        if (year === 2022) {
          if (month === 2) {
            const map = {
              1: '初一',
              2: '初二',
              3: '初三',
              14: '情人节',
              15: '元宵节',
            };
            if (curDate in map) {
              day.prefix = map[curDate];
              day.suffix = '¥100';
              day.className = 'is-holiday';
            }
          }
        }
        return day;
      },
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar(e, { type }) {
      this.type = type;
      console.log('type', type);
      this.visible = true;
    },
    handleConfirm(e, { type }) {
      const { value } = e;
      if (type === 'single') {
        this.singleValue = value;
      } else {
        this.value = value;
      }
      console.log(e.value);
    },
  },
};
</script>
<style>
.demo-desc {
    margin-top: 32rpx;
    margin-bottom: 32rpx;
}

:deep(.is-holiday:not(.t-calendar__dates-item--selected)) {
    color: #e34d59 !important;
}
</style>
