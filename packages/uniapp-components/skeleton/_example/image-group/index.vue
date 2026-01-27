<template>
  <view class="group">
    <t-skeleton
      :row-col="rowCol"
      loading
    />
    <t-skeleton
      :row-col="rowCol"
      loading
    />
  </view>
</template>

<script>
import TSkeleton from '@tdesign/uniapp/skeleton/skeleton.vue';
export default {
  components: {
    TSkeleton,
  },
  data() {
    return {
      rowCol: [
        {
          size: '327rpx',
          borderRadius: '24rpx',
        },
        1,
        {
          width: '61%',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.group {
    display: flex;
    justify-content: space-between;
    margin-top: 32rpx;
}
</style>
