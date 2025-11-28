<template>
  <view>
    <t-progress :percentage="80" />
    <t-progress
      :percentage="88"
      status="warning"
    />
    <t-progress
      :percentage="88"
      status="error"
    />
    <t-progress
      :percentage="88"
      status="success"
    />
    <t-progress
      :percentage="88"
      color=""
      status="active"
    />
  </view>
</template>

<script>
import tProgress from 'tdesign-uniapp/progress/progress.vue';
export default {
  components: {
    tProgress,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
