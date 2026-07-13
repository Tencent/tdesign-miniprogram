<template>
  <view>
    <t-demo-navbar class="demo-navbar" title="ChatRecord" left-arrow />
    <view class="demo">
      <baseDemo />
    </view>
  </view>
</template>

<script lang="ts">
import baseDemo from './base/index.vue';

export default {
  components: {
    baseDemo,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
@import './chat-record.less';
</style>
