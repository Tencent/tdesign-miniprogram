<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="ChatSender"
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
        <base-demo />
      </t-demo>
      <t-demo desc="上传文件">
        <attachments-demo />
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
import BaseDemo from './base/index.vue';
import AttachmentsDemo from './attachments/index.vue';
import ContentCitation from './content-citation/index.vue';
import FileCitation from './file-citation/index.vue';


export default {
  components: {
    BaseDemo,
    AttachmentsDemo,
    ContentCitation,
    FileCitation,
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
