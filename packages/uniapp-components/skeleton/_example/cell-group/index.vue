<template>
  <view>
    <view class="group">
      <t-skeleton
        class="group-avatar"
        :row-col="rowColsAvater"
        loading
      />
      <t-skeleton
        class="group-content"
        :row-col="rowColsContent"
        loading
      />
    </view>

    <view class="group">
      <t-skeleton
        class="group-avatar"
        :row-col="rowColsImage"
        loading
      />
      <t-skeleton
        class="group-content"
        :row-col="rowColsContent"
        loading
      />
    </view>
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
      rowColsAvater: [
        {
          size: '96rpx',
          type: 'circle',
        },
      ],
      rowColsImage: [
        {
          size: '96rpx',
          type: 'rect',
        },
      ],
      rowColsContent: [
        {
          width: '50%',
        },
        {
          width: '100%',
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
    align-items: center;
    margin-top: 32rpx;
}

.group-avatar {
    margin-right: 24rpx;
}

.group-content {
    width: 566rpx;
}
</style>
