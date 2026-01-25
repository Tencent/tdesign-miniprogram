<template>
  <view>
    <t-calendar
      title="日历标题"
      :use-popup="false"
      type="multiple"
      @select="handleSelect"
    />
  </view>
</template>

<script>
import TCalendar from 'tdesign-uniapp/calendar/calendar.vue';
export default {
  components: {
    TCalendar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleSelect(e) {
      const { value } = e;
      console.log(value);
    },
  },
};
</script>
<style>
</style>
