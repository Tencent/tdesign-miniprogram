<template>
  <view class="wrapper">
    <t-skeleton
      :row-col="grid"
      loading
    />
  </view>
</template>

<script>
import TSkeleton from 'tdesign-uniapp/skeleton/skeleton.vue';
export default {
  components: {
    TSkeleton,
  },
  data() {
    return {
      grid: [
        [
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
        ],
        [
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
        ],
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.wrapper {
    --td-skeleton-row-spacing: 20rpx;
    margin-top: 32rpx;
}
</style>
