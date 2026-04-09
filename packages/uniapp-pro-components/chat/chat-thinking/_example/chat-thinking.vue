<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="ChatThinking"
    />

    <view class="demo">
      <t-demo-header
        title="ChatThinking 思考过程"
        desc="用于展示思考过程的组件。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="支持多种加载动效类型，包括 gradient、moving、dots"
      >
        <base-demo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="思考中"
      >
        <pending-demo />
      </t-demo>
      <t-demo desc="思考完成">
        <complete-demo />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc=""
      >
        <layout-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import LayoutDemo from './layout/index.vue';
import PendingDemo from './pending/index.vue';
import CompleteDemo from './complete/index.vue';


export default {
  components: {
    BaseDemo,
    LayoutDemo,
    PendingDemo,
    CompleteDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './chat-thinking.less';
</style>
