<template>
  <view>
    <view class="demo-desc">
      Large
    </view>

    <view class="block">
      <t-avatar
        icon="user"
        size="large"
        :badge-props="{count: 8, size: 'large', offset: [7, 7]}"
      />
    </view>

    <view class="demo-desc">
      Medium
    </view>

    <view class="block">
      <t-avatar
        icon="user"
        :badge-props="{count: 8, offset: [5, 5]}"
      />
    </view>
  </view>
</template>

<script>
// import TBadge from 'tdesign-uniapp/badge/badge.vue';
import TAvatar from 'tdesign-uniapp/avatar/avatar.vue';
export default {
  components: {
    // TBadge,
    TAvatar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.block {
    padding: 32rpx 32rpx 48rpx;
}
</style>
