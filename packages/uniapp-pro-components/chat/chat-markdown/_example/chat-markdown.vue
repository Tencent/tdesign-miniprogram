<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="ChatMarkdown"
    />
    <view class="demo">
      <t-demo-header
        title="ChatMarkdown Markdown内容"
        desc="用于聊天场景中渲染 Markdown 格式文本的组件，内置 marked 解析器，支持多种 Markdown 语法和配置选项。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 基础 Markdown 样式"
        desc="标题与文本"
      >
        <base-demo />
      </t-demo>
      <t-demo desc="列表">
        <list-demo />
      </t-demo>
      <t-demo
        title="02 代码块与表格"
        desc="代码块"
      >
        <code-demo />
      </t-demo>
      <t-demo desc="表格">
        <sheet-demo />
      </t-demo>
      <t-demo title="03 图片与超链接">
        <url-demo />
      </t-demo>
      <t-demo title="04 引用">
        <refer-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import ListDemo from './list/index.vue';
import CodeDemo from './code/index.vue';
import SheetDemo from './sheet/index.vue';
import UrlDemo from './url/index.vue';
import ReferDemo from './refer/index.vue';


export default {
  components: {
    BaseDemo,
    ListDemo,
    CodeDemo,
    SheetDemo,
    UrlDemo,
    ReferDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './chat-markdown.less';
</style>
