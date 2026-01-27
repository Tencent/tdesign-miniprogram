<template>
  <view>
    <t-demo
      desc="环形进度条"
      padding
    >
      <t-progress
        theme="circle"
        :percentage="80"
      />
      <t-progress
        theme="circle"
        :percentage="88"
        status="warning"
      />
      <t-progress
        theme="circle"
        :percentage="88"
        status="error"
      />
      <t-progress
        theme="circle"
        :percentage="88"
        status="success"
      />
    </t-demo>
  </view>
</template>

<script>
import TProgress from 'tdesign-uniapp/progress/progress.vue';

export default {
  components: {
    TProgress,
  },
  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
