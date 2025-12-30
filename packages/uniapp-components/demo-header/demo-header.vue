<template>
  <div>
    <TNoticeBar
      :visible="noticeVisible"
      :content="notice"
    />
    <view class="demo-title">
      {{ title }}
    </view>
    <view class="demo-desc">
      {{ desc }}
      <slot name="desc" />
    </view>
  </div>
</template>
<script>
import TNoticeBar from '../notice-bar/notice-bar.vue';

export default {
  name: 'TDemoHeader',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TNoticeBar,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    notice: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
  computed: {
    noticeVisible() {
      let result = false;
      // #ifdef MP-WEIXIN
      if (this.notice) {
        result = false;
      }
      // #endif
      return result;
    },
  },
};
</script>
<style scoped src="./index.css">
</style>
