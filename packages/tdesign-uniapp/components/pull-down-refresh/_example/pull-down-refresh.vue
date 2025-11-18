<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="PullDownRefresh"
      left-arrow
    />
    <!-- #endif -->
    <BaseDemo />
  </view>
</template>

<script lang="ts">

import BaseDemo from './base/index.vue';
export default {
  components: {
    BaseDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './pull-down-refresh.less';
</style>
