<template>
  <view class="demo-rate">
    <view class="rate-wrapper">
      <t-rate
        :value="value"
        size="60rpx"
        :texts="texts"
        @change="onChange"
      />
    </view>
    <view :class="'desc desc--' + (value > 3 ? 'active' : '')">
      {{ texts[value - 1] }}
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
      value: 4,
      texts: ['非常糟糕', '有些糟糕', '可以尝试', '可以前往', '推荐前往'],
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
    padding: 32rpx;
    margin-top: 32rpx;
    margin-bottom: 32rpx;
}

.rate-wrapper {
    display: flex;
    justify-content: center;
}

.desc {
    text-align: center;
    margin-top: 24rpx;
}

.desc--active {
    color: #ed7b2f;
    font-weight: 600;
}
</style>
