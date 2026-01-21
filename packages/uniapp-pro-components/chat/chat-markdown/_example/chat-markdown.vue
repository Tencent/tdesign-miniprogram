<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatMarkdown"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
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
        <baseDemo />
      </t-demo>
      <t-demo desc="列表">
        <list />
      </t-demo>
      <t-demo
        title="02 代码块与表格"
        desc="代码块"
      >
        <codeDemo />
      </t-demo>
      <t-demo desc="表格">
        <sheet />
      </t-demo>
      <t-demo title="03 图片与超链接">
        <url />
      </t-demo>
      <t-demo title="04 引用">
        <refer />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import list from './list/index.vue';
import codeDemo from './code/index.vue';
import sheet from './sheet/index.vue';
import url from './url/index.vue';
import refer from './refer/index.vue';


export default {
  components: {
    baseDemo,
    list,
    codeDemo,
    sheet,
    url,
    refer,
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
