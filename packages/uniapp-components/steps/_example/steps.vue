<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Steps"
      left-arrow
      :capsule="false"
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
          title="Steps 步骤条"
          desc="用于任务步骤展示或任务进度展示。"
          notice="渲染框架支持情况：Skyline、WebView"
        />
        <t-demo title="01 组件类型" />

        <horizontal />

        <vertical />

        <t-demo
          title="02 组件状态"
          desc="选项卡状态"
        />

        <status />

        <t-demo title="03 特殊类型" />

        <special />
      </view>
    </scroll-view>
  </view>
</template>

<script>

import horizontal from './horizontal/index.vue';
import vertical from './vertical/index.vue';
import special from './special/index.vue';
import status from './status/index.vue';
export default {
  components: {
    horizontal,
    vertical,
    special,
    status,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './steps.less';
</style>
