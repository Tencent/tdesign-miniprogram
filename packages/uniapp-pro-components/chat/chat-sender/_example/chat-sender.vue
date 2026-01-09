<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatSender"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <view class="demo">
      <t-demo-header
        title="ChatSender 对话输入"
        desc="用于 AI 聊天的输入框，可以扩展模型、多模态等能力。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础类型"
      >
        <baseDemo />
      </t-demo>
      <t-demo desc="上传文件">
        <attachments />
      </t-demo>
      <t-demo desc="内容引用">
        <content-citation />
      </t-demo>
      <t-demo desc="文件引用">
        <file-citation />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import attachments from './attachments/index.vue';
import contentCitation from './content-citation/index.vue';
import fileCitation from './file-citation/index.vue';


export default {
  components: {
    baseDemo,
    attachments,
    contentCitation,
    fileCitation,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './chat-sender.less';
</style>
