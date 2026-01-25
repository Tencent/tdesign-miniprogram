<template>
  <view>
    <t-demo-navbar
      title="Transition"
    />
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
        <base-demo />
      </t-demo>
      <t-demo
        desc="自定义动画"
        padding
      >
        <custom-demo />
      </t-demo>
      <t-demo
        desc="首次出现动画"
        padding
      >
        <appear-demo />
      </t-demo>
      <t-demo
        desc="隐藏不渲染"
        padding
      >
        <destroy-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import CustomDemo from './custom/index.vue';
import DestroyDemo from './destroy/index.vue';
import AppearDemo from './appear/index.vue';
export default {
  components: {
    BaseDemo,
    CustomDemo,
    DestroyDemo,
    AppearDemo,
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
