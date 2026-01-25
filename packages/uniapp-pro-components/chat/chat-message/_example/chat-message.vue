<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="ChatMessage"
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
        <base-demo />
      </t-demo>
      <t-demo desc="可配置昵称、头像、对齐方式">
        <configure-demo />
      </t-demo>
      <t-demo desc="配置消息属性">
        <content-demo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="加载状态"
      >
        <status-demo />
      </t-demo>
      <t-demo desc="出错状态">
        <error-demo />
      </t-demo>
      <t-demo
        title="03 组件样式"
        desc="气泡样式"
      >
        <style-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import StyleDemo from './style/index.vue';
import ConfigureDemo from './configure/index.vue';
import StatusDemo from './status/index.vue';
import ContentDemo from './content/index.vue';
import ErrorDemo from './error/index.vue';

export default {
  components: {
    BaseDemo,
    StyleDemo,
    ConfigureDemo,
    StatusDemo,
    ContentDemo,
    ErrorDemo,
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
