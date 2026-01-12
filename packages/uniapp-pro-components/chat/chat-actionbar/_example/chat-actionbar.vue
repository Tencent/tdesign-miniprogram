<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatActionbar"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <view class="demo">
      <t-demo-header
        title="ChatActionbar 对话操作"
        desc="包含重新生成，点赞，点踩，复制按钮。 内置 Clipboard 可以复制聊天内容，提供按钮的交互样式，监听 actions 相关事件由业务层实现具体逻辑。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础类型"
      >
        <baseDemo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="手动初始化状态"
      >
        <comment />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import comment from './comment/index.vue';


export default {
  components: {
    baseDemo,
    comment,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './chat-actionbar.less';
</style>
