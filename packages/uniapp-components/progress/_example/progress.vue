<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Progress"
    />
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
          <base-demo />
        </t-demo>
        <t-demo
          desc="过渡样式"
          padding
        >
          <transition-demo />
        </t-demo>
        <t-demo
          desc="自定义颜色/圆角"
          padding
        >
          <custom-demo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="线性进度条"
          padding
        >
          <line-demo />
        </t-demo>
        <t-demo
          desc="百分比内显进度条"
          padding
        >
          <plump-demo />
        </t-demo>
        <circle-demo />
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import TransitionDemo from './transition/index.vue';
import CustomDemo from './custom/index.vue';
import LineDemo from './line/index.vue';
import PlumpDemo from './plump/index.vue';
import CircleDemo from './circle/index.vue';
export default {
  components: {
    BaseDemo,
    TransitionDemo,
    CustomDemo,
    LineDemo,
    PlumpDemo,
    CircleDemo,
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
