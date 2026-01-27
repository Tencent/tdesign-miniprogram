<template>
  <view>
    <div class="box">
      <t-loading
        :theme="skylineRender ? 'spinner' : 'circular'"
        size="40rpx"
        text="加载中"
        layout="vertical"
        t-class="wrapper"
      />
      <t-loading
        theme="spinner"
        size="40rpx"
        text="加载中"
        layout="vertical"
        t-class="wrapper"
      />
    </div>
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
.box {
    display: flex;
}

.wrapper {
    margin-right: 64px;
}
</style>
