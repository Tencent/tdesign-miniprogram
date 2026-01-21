<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Progress"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <t-demo-header
          title="Progress 进度条"
          desc="用于展示任务当前的进度。"
          notice="渲染框架支持情况：Skyline、WebView"
        />
        <t-demo title="01 组件类型">
          <BaseDemo />
        </t-demo>
        <t-demo
          desc="过渡样式"
          padding
        >
          <transitionDemo />
        </t-demo>
        <t-demo
          desc="自定义颜色/圆角"
          padding
        >
          <custom />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="线性进度条"
          padding
        >
          <lineDemo />
        </t-demo>
        <t-demo
          desc="百分比内显进度条"
          padding
        >
          <plump />
        </t-demo>
        <circleDemo />
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import transitionDemo from './transition/index.vue';
import custom from './custom/index.vue';
import lineDemo from './line/index.vue';
import plump from './plump/index.vue';
import circleDemo from './circle/index.vue';
export default {
  components: {
    BaseDemo,
    transitionDemo,
    custom,
    lineDemo,
    plump,
    circleDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './progress.less';
</style>
