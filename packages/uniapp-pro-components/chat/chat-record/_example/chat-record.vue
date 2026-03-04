<template>
  <view>
    <t-navbar class="demo-navbar" title="ChatSender" left-arrow />
    <view class="demo">
      <t-demo-header
        title="ChatSender 对话输入"
        desc="用于 AI 聊天的输入框，可以扩展模型、多模态等能力。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo title="语音输入组件" desc="基础类型">
        <baseDemo />
      </t-demo>
    </view>
  </view>
</template>

<script lang="ts">
import baseDemo from './base/index.vue';

export default {
  components: {
    baseDemo,
  },
  data() {
    return {};
  },
  mounted() {
    console.error('语音输入组件====');
  },
  methods: {},
};
</script>

<style lang="less">
@import './chat-record.less';
</style>
