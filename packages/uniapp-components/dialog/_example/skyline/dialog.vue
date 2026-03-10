<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="block demo-navbar"
      title="Dialog"
    />
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
          <base-demo />
        </t-demo>

        <t-demo
          desc="确认类对话框"
          padding
        >
          <confirm-demo />
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
          <status-demo />
        </t-demo>

        <t-demo
          title="03 组件用法"
          desc="命令调用"
          padding
        >
          <command-demo />
        </t-demo>

        <t-demo
          desc="自定义按钮"
          padding
        >
          <button-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import ConfirmDemo from '../confirm/index.vue';
import WithInput from '../with-input/index.vue';
import WithImage from '../with-image/index.vue';
import CommandDemo from '../command/index.vue';
import StatusDemo from '../status/index.vue';
import ButtonDemo from '../button/index.vue';

export default {
  components: {
    BaseDemo,
    ConfirmDemo,
    WithInput,
    WithImage,
    CommandDemo,
    StatusDemo,
    ButtonDemo,
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
