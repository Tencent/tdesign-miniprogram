<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatContent"
      left-arrow
    />
    <view class="demo">
      <t-demo-header
        title="ChatContent 对话正文"
        desc="支持 markdown 格式的渲染。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo title="01 组件类型">
        <baseDemo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
export default {
  components: {
    baseDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './chat-content.less';
</style>
