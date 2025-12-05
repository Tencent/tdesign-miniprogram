<template>
  <view>
    <t-demo
      v-if="!skylineRender"
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
import tProgress from 'tdesign-uniapp/progress/progress.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';

export default {
  components: {
    tProgress,
  },
  mixins: [SkylineBehavior],
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
