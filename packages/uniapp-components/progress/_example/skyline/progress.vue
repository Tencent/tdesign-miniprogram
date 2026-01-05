<template>
  <view>
    <demo-progress />
  </view>
</template>

<script lang="ts">

import demoProgress from '../progress.vue';
export default {
  components: {
    demoProgress,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './progress.less';
</style>
