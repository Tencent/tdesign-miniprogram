<template>
  <view>
    <t-divider />

    <view class="divider-demo__title">
      带文字水平分割线
    </view>

    <t-divider
      content="文字信息"
      align="left"
    />
    <t-divider content="文字信息" />
    <t-divider
      content="文字信息"
      align="right"
    />

    <view class="divider-demo__title">
      垂直分割线
    </view>

    <view class="divider-wrapper">
      <text class="demo-6__text-color">
        文字信息
      </text>
      <t-divider layout="vertical" />
      <text class="demo-6__text-color">
        文字信息
      </text>
      <t-divider layout="vertical" />
      <text class="demo-6__text-color">
        文字信息
      </text>
    </view>
  </view>
</template>

<script>
import TDivider from 'tdesign-uniapp/divider/divider.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';

export default {
  components: {
    TDivider,
  },
  mixins: [SkylineBehavior],
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.divider-demo__title {
    font-size: 28rpx;
    color: var(--bg-color-demo-desc);
    padding: 16rpx 32rpx;
    line-height: 40rpx;
}

.divider-wrapper {
    display: flex;
    align-items: center;
    font-size: 28rpx;
    color: var(--td-text-color-primary);
    padding-left: 32rpx;
}
</style>
