<template>
  <view>
    <view class="demo-desc">
      只可选全星时
    </view>

    <view class="demo-rate">
      <view class="demo-rate__title">
        点击或滑动
      </view>
      <t-rate
        :value="value"
        @change="onChange"
      />
    </view>

    <view class="demo-desc">
      只可选半星时
    </view>

    <view class="demo-rate">
      <view class="demo-rate__title">
        点击或滑动
      </view>
      <t-rate
        :default-value="3"
        allow-half
      />
    </view>
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate.vue';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: 3.5,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { value } = e;
      this.value = value;
    },
  },
};
</script>
<style>
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
  font-size: 16px;
}

.demo-rate__transparent {
    background-color: transparent;
    padding-left: 32rpx;
    border: 0;
}
</style>
