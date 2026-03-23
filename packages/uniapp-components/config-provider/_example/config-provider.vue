<template>
  <view>
    <t-demo-navbar title="ConfigProvider" />
    <view class="demo">
      <t-demo-header
        title="ConfigProvider 全局特性配置"
        desc="全局特性配置包含各个组件的文本语言配置及其他通用配置，可以减少重复的通用配置。"
        notice="渲染框架支持情况：WebView、Skyline"
      />

      <t-demo
        title="01 配置示例"
        desc="Upload"
      >
        <upload-en />
      </t-demo>

      <t-demo desc="Chat">
        <chat-en />
      </t-demo>

      <t-demo desc="其他组件">
        <other-en />
      </t-demo>
    </view>
  </view>
</template>

<script>
import UploadEn from './upload-en/index.vue';
import OtherEn from './other-en/index.vue';
import ChatEn from './chat-en/index.vue';

export default {
  components: {
    UploadEn,
    OtherEn,
    ChatEn,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './config-provider.less';
</style>
