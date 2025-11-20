<template>
  <view class="demo-rate">
    <view class="demo-rate__title">
      自定义评分数量
    </view>
    <!-- 自定义评分数量，设置属性：count -->
    <t-rate
      :value="value"
      :count="3"
      @change="onChange"
    />
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
      value: 2,
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
