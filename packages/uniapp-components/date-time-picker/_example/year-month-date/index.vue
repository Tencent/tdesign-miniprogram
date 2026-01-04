<template>
  <view>
    <t-cell
      title="选择日期"
      hover
      :note="dateText || ''"
      arrow
      data-mode="date"
      class="test"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'date' })"
    />

    <!-- 年月日 -->
    <t-date-time-picker
      v-model:visible="dateVisible"
      auto-close
      title="选择日期"
      show-week
      mode="date"
      :default-value="date"
      format="YYYY-MM-DD ddd"
      :filter="filter"
      :formatter="formatter"
      :popup-props="popupProps"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
      @close="handleClose"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker.vue';
const calendarMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    let usingCustomNavbar = true;
    // #ifdef MP-ALIPAY
    usingCustomNavbar = false;
    // #endif
    return {
      mode: '',
      dateVisible: false,
      date: new Date('2021-12-23').getTime(),
      // 支持时间戳传入
      dateText: '',
      filter(type, options) {
        if (type === 'year') {
          return options.sort((a, b) => b.value - a.value);
        }
        return options;
      },
      popupProps: {
        usingCustomNavbar,
      },
      formatter(item, index) {
        if (index === 1) {
          const label = item.label.slice(0, -1);
          return {
            value: item.value,
            label: calendarMonth[Number(label) - 1],
          };
        }
        if (index === 2) {
          const [dateValue, weekValue] = item.label.split(' ');
          const dateSuffixes = {
            1: 'st',
            2: 'nd',
            3: 'rd',
          };
          const weekMap = {
            周一: 'Mon.',
            周二: 'Tues.',
            周三: 'Wed.',
            周四: 'Thurs.',
            周五: 'Fri.',
            周六: 'Sat.',
            周日: 'Sun.',
          };
          const label = dateValue.slice(0, -1);
          return {
            value: item.value,
            label: `${label}${dateSuffixes[label] || 'th'} ${weekMap[weekValue]}`,
          };
        }
        return {
          value: item.value,
          label: item.label.slice(0, -1),
        };
      },
    };
  },
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[`${mode}Visible`] = true;
    },

    handleClose(e) {
      console.log('handleClose:', e);
    },

    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[`${mode}Text`] = value;
    },

    onColumnChange(e) {
      console.log('pick', e.value);
    },

    hidePicker() {
      console.log('占位：函数 hidePicker 未声明');
    },
  },
};
</script>
<style>
:deep(.panel-item) {
    margin-bottom: 32rpx;
}

:deep(.panel-item::after) {
    border: 0;
}
</style>
