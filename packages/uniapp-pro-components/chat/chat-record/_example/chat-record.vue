<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatRecord"
      left-arrow
    />
    <view class="demo">
      <t-demo-header
        title="ChatRecord 语音录入"
        desc="用于 AI 聊天的语音录入组件，支持按住说话、上滑取消、语音识别。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="语音输入组件"
        desc="与 ChatSender 配合使用"
      >
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
  },
  methods: {},
};
</script>

<style lang="less">
@import './chat-record.less';
</style>
