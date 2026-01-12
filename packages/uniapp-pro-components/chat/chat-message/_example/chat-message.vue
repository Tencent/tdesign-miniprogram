<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatMessage"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <view class="demo">
      <t-demo-header
        title="ChatMessage 对话消息体"
        desc="用于在聊天对话中显示单个消息项。它可以展示用户的头像、昵称、时间、聊天内容，支持多种消息状态和样式变体。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础类型"
      >
        <baseDemo />
      </t-demo>
      <t-demo desc="可配置昵称、头像、对齐方式">
        <configure />
      </t-demo>
      <t-demo desc="配置消息属性">
        <contentDemo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="加载状态"
      >
        <status />
      </t-demo>
      <t-demo desc="出错状态">
        <error />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc="气泡样式"
      >
        <styleDemo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import styleDemo from './style/index.vue';
import configure from './configure/index.vue';
import status from './status/index.vue';
import contentDemo from './content/index.vue';
import error from './error/index.vue';

export default {
  components: {
    baseDemo,
    styleDemo,
    configure,
    status,
    contentDemo,
    error,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './chat-message.less';
</style>
