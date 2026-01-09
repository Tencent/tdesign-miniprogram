<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatThinking"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
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
        <baseDemo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="思考中"
      >
        <pending />
      </t-demo>
      <t-demo desc="思考完成">
        <complete />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc=""
      >
        <layout />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import layout from './layout/index.vue';
import pending from './pending/index.vue';
import complete from './complete/index.vue';


export default {
  components: {
    baseDemo,
    layout,
    pending,
    complete,
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
