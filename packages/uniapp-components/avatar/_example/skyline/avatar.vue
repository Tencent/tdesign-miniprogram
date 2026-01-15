<template>
  <view>
    <demo-avatar />
  </view>
</template>

<script>

import demoAvatar from '../avatar.vue';
export default {
  components: {
    demoAvatar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './avatar.less';
</style>
