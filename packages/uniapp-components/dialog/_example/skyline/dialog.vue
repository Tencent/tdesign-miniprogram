<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block demo-navbar"
      title="Dialog"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Dialog 对话框
        </view>
        <view class="demo-desc">
          用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。
        </view>
        <t-demo
          title="01 组件类型"
          desc="反馈类对话框"
          padding
        >
          <baseDemo />
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
          title="02 组件状态"
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
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import confirm from '../confirm/index.vue';
import withInput from '../with-input/index.vue';
import withImage from '../with-image/index.vue';
import commandDemo from '../command/index.vue';
import status from '../status/index.vue';
import buttonDemo from '../button/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
