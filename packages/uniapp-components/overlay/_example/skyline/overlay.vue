<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Overlay"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Overlay 遮罩层
        </view>
        <view class="demo-desc">
          通过遮罩层，可以强调部分内容
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础遮罩层"
          padding
        >
          <base-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import BaseDemo from '../base/index.vue';

export default {
  components: {
    BaseDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './overlay.less';
</style>
