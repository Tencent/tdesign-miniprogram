<template>
  <view>
    <t-back-top
      :theme="backTopTheme"
      :text="backTopText"
      :scroll-top="scrollTop"
      @to-top="onToTop"
    />
  </view>
</template>

<script>
import tBackTop from 'tdesign-uniapp/back-top/back-top.vue';
export default {
  components: {
    tBackTop,
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  emits: [
    'to-top',
  ],
  data() {
    return {
      backTopTheme: 'round',
      backTopText: '顶部',
    };
  },
  created() {},
  methods: {
    onToTop(e) {
      this.$emit('to-top', e);
    },
  },
};
</script>
<style>
</style>
