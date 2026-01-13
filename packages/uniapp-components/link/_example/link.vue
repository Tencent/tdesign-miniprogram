<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Link"
      left-arrow
      :capsule="false"
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <t-demo-header
          title="Link 链接"
          desc="文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。"
          notice="渲染框架支持情况：Skyline、WebView"
        />
        <t-demo
          title="01 组件类型"
          desc="基础文字链接"
        >
          <contentDemo />
        </t-demo>
        <t-demo desc="下划线文字链接">
          <underline />
        </t-demo>
        <t-demo desc="前置图标文字链接">
          <prefix />
        </t-demo>
        <t-demo desc="后置图标文字链接">
          <suffix />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="不同主题"
        >
          <theme />
        </t-demo>
        <t-demo desc="禁用状态">
          <disabled />
        </t-demo>
        <t-demo
          title="03 组件样式"
          desc="链接尺寸"
        >
          <size />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import contentDemo from './content/index.vue';
import underline from './underline/index.vue';
import prefix from './prefix/index.vue';
import suffix from './suffix/index.vue';
import theme from './theme/index.vue';
import disabled from './disabled/index.vue';
import size from './size/index.vue';
export default {
  components: {
    contentDemo,
    underline,
    prefix,
    suffix,
    theme,
    disabled,
    size,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './link.less';
</style>
