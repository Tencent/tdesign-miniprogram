<template>
  <view>
    <t-cell
      title="选择日期"
      hover
      :note="monthText"
      arrow
      data-mode="month"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'month' })"
    />

    <!-- 年月 -->
    <t-date-time-picker
      :visible="monthVisible"
      title="选择日期"
      mode="month"
      :value="month"
      format="YYYY-MM"
      :start="start"
      :end="end"
      @update:visible="monthVisible = $event"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
export default {
  components: {
    TCell,
    TDateTimePicker,
  },
  data() {
    return {
      mode: '',
      monthVisible: false,
      month: '2021-09',
      monthText: '',
      // 指定选择区间起始值
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',
    };
  },
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[`${mode}Visible`] = true;
    },

    hidePicker() {
      const { mode } = this;
      this[`${mode}Visible`] = false;
    },

    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[`${mode}Text`] = value;
      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
</script>
<style>
.panel-item {
    margin-bottom: 32rpx;
}
</style>
