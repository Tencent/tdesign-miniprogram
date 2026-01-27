<template>
  <view class="loading-container-flex">
    <t-loading
      v-if="!skylineRender"
      theme="circular"
      size="40rpx"
      text="加载中..."
      t-class="wrapper"
    />
    <t-loading
      theme="spinner"
      size="40rpx"
      text="加载中..."
      inherit-color
      t-class="wrapper"
    />
  </view>
</template>

<script>
import TLoading from 'tdesign-uniapp/loading/loading.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TLoading,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.loading-container-flex {
    display: flex;
    align-items: center;
    color: #000;
}

.wrapper {
    display: flex;
    margin-right: 64px;
}
</style>
