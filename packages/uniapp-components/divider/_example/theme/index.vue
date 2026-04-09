<template>
  <view>
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
    />
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
      content="文字信息"
      align="left"
    />
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
      content="文字信息"
    />
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
      content="文字信息"
      align="right"
    />
  </view>
</template>

<script>
import TDivider from '@tdesign/uniapp/divider/divider.vue';
import SkylineBehavior from '@tdesign/uniapp/mixins/skyline.js';

export default {
  components: {
    TDivider,
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
.divider-demo__title {
    font-size: 24rpx;
    color: rgba(0, 0, 0, 0.4);
    padding: 0 32rpx 16rpx;
    line-height: 40rpx;
}

.demo-5 {
    margin: 0 32rpx;
}

/* 兼容skyline写法，后续skyline支持border-top后可删除 */
.skyline-dashed {
    border-style: unset !important;
    border-top-style: dashed !important;
    border-color: unset !important;
    border-top-color: #e7e7e7 !important;
}
</style>
