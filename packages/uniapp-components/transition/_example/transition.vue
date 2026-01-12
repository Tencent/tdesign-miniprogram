<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Transition"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <view class="demo-title">
        Transition 过渡
      </view>
      <view class="demo-desc">
        过渡。
      </view>
      <t-demo
        title="01 组件类型"
        desc="基础示例"
        padding
      >
        <BaseDemo />
      </t-demo>
      <t-demo
        desc="自定义动画"
        padding
      >
        <custom />
      </t-demo>
      <t-demo
        desc="首次出现动画"
        padding
      >
        <appear />
      </t-demo>
      <t-demo
        desc="隐藏不渲染"
        padding
      >
        <destroy />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import custom from './custom/index.vue';
import destroy from './destroy/index.vue';
import appear from './appear/index.vue';
export default {
  components: {
    BaseDemo,
    custom,
    destroy,
    appear,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onTriggerClick() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style lang="less">
@import './transition.less';
</style>
