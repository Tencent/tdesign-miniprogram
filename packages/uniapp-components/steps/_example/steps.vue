<template>
  <view class="skyline">
    <t-demo-navbar
      title="Steps"
    />
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

        <horizontal-demo />

        <vertical-demo />

        <t-demo
          title="02 组件状态"
          desc="选项卡状态"
        />

        <status-demo />

        <t-demo title="03 特殊类型" />

        <special-demo />
      </view>
    </scroll-view>
  </view>
</template>

<script>

import HorizontalDemo from './horizontal/index.vue';
import VerticalDemo from './vertical/index.vue';
import SpecialDemo from './special/index.vue';
import StatusDemo from './status/index.vue';
export default {
  components: {
    HorizontalDemo,
    VerticalDemo,
    SpecialDemo,
    StatusDemo,
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
