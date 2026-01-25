<template>
  <view class="skyline">
    <t-demo-navbar
      title="Link"
    />
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
          <content-demo />
        </t-demo>
        <t-demo desc="下划线文字链接">
          <underline-demo />
        </t-demo>
        <t-demo desc="前置图标文字链接">
          <prefix-demo />
        </t-demo>
        <t-demo desc="后置图标文字链接">
          <suffix-demo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="不同主题"
        >
          <theme-demo />
        </t-demo>
        <t-demo desc="禁用状态">
          <disabled-demo />
        </t-demo>
        <t-demo
          title="03 组件样式"
          desc="链接尺寸"
        >
          <size-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import ContentDemo from './content/index.vue';
import UnderlineDemo from './underline/index.vue';
import PrefixDemo from './prefix/index.vue';
import SuffixDemo from './suffix/index.vue';
import ThemeDemo from './theme/index.vue';
import DisabledDemo from './disabled/index.vue';
import SizeDemo from './size/index.vue';
export default {
  components: {
    ContentDemo,
    UnderlineDemo,
    PrefixDemo,
    SuffixDemo,
    ThemeDemo,
    DisabledDemo,
    SizeDemo,
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
