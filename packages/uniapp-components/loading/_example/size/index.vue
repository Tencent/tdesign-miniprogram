<template>
  <view class="loading-size-demo">
    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="64rpx"
      text="加载中..."
      t-class="large"
    />

    <view class="demo-desc">
      中尺寸
    </view>

    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="56rpx"
      text="加载中..."
      t-class="medium"
    />

    <view class="demo-desc">
      小尺寸
    </view>

    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="48rpx"
      text="加载中..."
    />
  </view>
</template>

<script>
import TLoading from 'tdesign-uniapp/loading/loading.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';
export default {
  components: {
    TLoading,
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
.large {
  --td-loading-text-font: var(--td-font-body-large);
}

.medium {
  --td-loading-text-font: var(--td-font-body-medium);
}

.loading-size-demo .demo-desc {
    margin: 48rpx 0 32rpx;
}
</style>
