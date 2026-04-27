<template>
  <view>
    <t-demo-navbar title="Segmented" />
    <view class="demo">
      <t-demo-header
        title="Segmented 分段控制器"
        desc="用于展示多个选项并允许用户选择其中单个选项。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础"
      >
        <base-demo />
      </t-demo>
      <t-demo desc="自适应宽度">
        <block-demo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="控制器状态"
      >
        <disabled-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import BlockDemo from './block/index.vue';
import DisabledDemo from './disabled/index.vue';

export default {
  components: {
    BaseDemo,
    BlockDemo,
    DisabledDemo,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less">
@import './segmented.less';
</style>
