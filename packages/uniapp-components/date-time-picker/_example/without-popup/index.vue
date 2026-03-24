<template>
  <view>
    <t-date-time-picker
      :use-popup="false"
      title="选择日期"
      mode="date"
      :value="value"
      format="YYYY-MM-DD"
      :start="start"
      :end="end"
      @change="onConfirm"
      @pick="onColumnChange"
    />
  </view>
</template>

<script>
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
export default {
  components: {
    TDateTimePicker,
  },
  data() {
    return {
      value: new Date('2021-12-23').getTime(),
      // 支持时间戳传入

      // 指定选择区间起始值
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',
    };
  },
  methods: {
    onConfirm(e) {
      const { value } = e;
      console.log('confirm', value);
      this.value = value;
    },

    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
</script>
<style>
</style>
