<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Message"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo message-example">
      <t-demo-header
        title="Message 消息通知"
        desc="用于轻量级反馈或提示，不会打断用户操作。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="消息通知内容为文本、带操作按钮"
      >
        <BaseDemo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="消息组件风格"
      >
        <theme />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import theme from './theme/index.vue';
export default {
  components: {
    BaseDemo,
    theme,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './message.less';
</style>
