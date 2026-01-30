<template>
  <view class="demo-rate">
    <view class="demo-rate__title">
      实心评分
    </view>

    <t-rate
      :value="value"
      @change="onChange"
    />
  </view>
</template>

<script>
import TRate from '@tdesign/uniapp/rate/rate.vue';
export default {
  components: {
    TRate,
  },
  data() {
    return {
      value: 3,
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
    width: 200rpx;
    font-size: 16px;
}

.demo-rate__transparent {
    background-color: transparent;
    padding-left: 32rpx;
    border: 0;
}
</style>
