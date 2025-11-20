<template>
  <view>
    <view class="demo-desc">
      基础进度条
    </view>
    <view class="demo-wrapper">
      <t-progress :percentage="80" />
    </view>

    <view class="demo-desc">
      百分比内显
    </view>
    <view class="demo-wrapper">
      <t-progress
        theme="plump"
        :percentage="80"
      />
    </view>

    <view class="demo-desc">
      环形进度条
    </view>
    <view
      v-if="!skylineRender"
      class="demo-wrapper"
    >
      <t-progress
        theme="circle"
        :percentage="30"
      />
    </view>

    <view class="demo-desc">
      微型环形进度条
    </view>
    <view
      v-if="!skylineRender"
      class="demo-wrapper"
    >
      <t-progress
        theme="circle"
        size="micro"
        :percentage="30"
        :label="false"
      />
    </view>
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
.demo-wrapper {
    padding: 0 32rpx;
}
</style>
