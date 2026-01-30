<template>
  <view>
    <view class="demo-rate custom-color">
      <view class="demo-rate__title">
        填充评分
      </view>
      <t-rate
        :default-value="3"
        allow-half
      />
    </view>
    <view class="demo-rate">
      <view class="demo-rate__title">
        线描评分
      </view>
      <t-rate
        :default-value="3"
        :icon="['star-filled', 'star']"
        color="#00a870"
      />
    </view>
  </view>
</template>

<script>
import TRate from '@tdesign/uniapp/rate/rate.vue';
export default {
  components: {
    TRate,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.custom-color {
    --td-rate-selected-color: #f96102;
    --td-rate-unselected-color: #bbbbbb;
}

.demo-rate {
    background-color: var(--bg-color-demo);
    color: var(--td-text-color-primary);
    height: 96rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;
    margin-top: 32rpx;
    margin-bottom: 32rpx;
}

.demo-rate__title {
    width: 200rpx;
    font-size: 16px;
}

.demo-rate__transparent {
    background-color: transparent;
    padding-left: 32rpx;
    border: 0;
}
</style>
