<template>
  <view>
    <t-demo-navbar title="Typography" />
    <view class="demo">
      <t-demo-header
        title="Typography 排版"
        desc="排版用于文本基础编排和样式，使用排版组件，可以快速完成页面中的文本内容制作，同时配合其他组件完成深色与浅色模式切换等风格统一的需求。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础文本"
      >
        <base-demo />
      </t-demo>
      <t-demo desc="组合用法">
        <combination-demo />
      </t-demo>
      <t-demo desc="主题样式">
        <theme-demo />
      </t-demo>
      <t-demo desc="可复制">
        <copyable-demo />
      </t-demo>
      <t-demo desc="文本省略">
        <ellipsis-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import CombinationDemo from './combination/index.vue';
import CopyableDemo from './copyable/index.vue';
import EllipsisDemo from './ellipsis/index.vue';
import ThemeDemo from './theme/index.vue';
export default {
  components: {
    BaseDemo,
    CombinationDemo,
    ThemeDemo,
    CopyableDemo,
    EllipsisDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
@import './paragraph.less';
</style>
