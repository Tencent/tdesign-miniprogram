<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="PullDownRefresh"
    />
    <base-demo />
  </view>
</template>

<script>

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
