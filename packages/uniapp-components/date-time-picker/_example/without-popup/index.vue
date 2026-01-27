<template>
  <view>
    <t-date-time-picker
      :use-popup="false"
      title="选择日期"
      :visible="dateVisible"
      mode="date"
      :default-value="date"
      format="YYYY-MM-DD"
      :start="start"
      :end="end"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import TDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker.vue';
export default {
  components: {
    TDateTimePicker,
  },
  data() {
    return {
      mode: '',
      dateVisible: false,
      date: new Date('2021-12-23').getTime(),
      // 支持时间戳传入

      // 指定选择区间起始值
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',
    };
  },
  methods: {
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
</style>
