<template>
  <view>
    <view class="block">
      <t-navbar
        left-arrow
        title="标题居中"
        :fixed="false"
      />
    </view>

    <t-navbar
      left-arrow
      :fixed="false"
    >
      <template
        #left
      >
        <view
          class="custom-title"
        >
          标题左对齐
        </view>
      </template>
    </t-navbar>

    <view class="demo-desc">
      标题尺寸
    </view>

    <t-navbar
      left-arrow
      :fixed="false"
    >
      <template
        #left
      >
        <text
          class="left-text"
          @click="onBack"
        >
          返回
        </text>
      </template>
    </t-navbar>
    <view class="header-title">
      大标题尺寸
    </view>
  </view>
</template>

<script>
import TNavbar from '@tdesign/uniapp/navbar/navbar.vue';
export default {
  components: {
    TNavbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onBack() {
      uni.navigateBack();
    },
  },
};
</script>
<style scoped>
.custom-title {
    margin-left: 8px;
    font-size: 18px;
    font-weight: 600;
}

.block {
    display: block;
    margin-bottom: 48rpx;
}

.demo-desc {
    margin-top: 48rpx;
    margin-bottom: 32rpx;
}

.left-text {
    display: block;
    margin-left: 4px;
    font-size: 16px;
}

.header-title {
    font-size: 28px;
    line-height: 36px;
    padding: 8rpx 32rpx 16rpx;
    background-color: var(--td-bg-color-container);
    font-weight: 600;
    color: var(--td-text-color-primary);
}
</style>
