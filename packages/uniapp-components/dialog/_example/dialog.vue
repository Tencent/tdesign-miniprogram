<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Dialog"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Dialog 对话框"
        desc="用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="反馈类对话框"
        padding
      >
        <BaseDemo />
      </t-demo>

      <t-demo
        desc="确认类对话框"
        padding
      >
        <confirm />
      </t-demo>

      <t-demo
        desc="输入类对话框"
        padding
      >
        <with-input />
      </t-demo>

      <t-demo
        desc="带图片的对话框"
        padding
      >
        <with-image />
      </t-demo>

      <t-demo
        title="02 组件类型"
        padding
      >
        <status />
      </t-demo>

      <t-demo
        title="03 组件用法"
        desc="命令调用"
        padding
      >
        <commandDemo />
      </t-demo>

      <t-demo
        desc="自定义按钮"
        padding
      >
        <buttonDemo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import confirm from './confirm/index.vue';
import withInput from './with-input/index.vue';
import withImage from './with-image/index.vue';
import commandDemo from './command/index.vue';
import status from './status/index.vue';
import buttonDemo from './button/index.vue';


export default {
  components: {
    BaseDemo,
    confirm,
    withInput,
    withImage,
    commandDemo,
    status,
    buttonDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './dialog.less';
</style>
