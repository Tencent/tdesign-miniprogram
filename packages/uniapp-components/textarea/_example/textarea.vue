<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Textarea"
      left-arrow
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
          title="Textarea 多行文本框"
          desc="用于多行文本信息输入。"
          notice="渲染框架支持情况：Skyline、WebView"
        />
        <t-demo
          title="01 组件类型"
          desc="基础多行文本框"
        >
          <BaseDemo />
        </t-demo>
        <t-demo
          title=""
          desc="带标题多行文本框"
        >
          <labelDemo />
        </t-demo>
        <t-demo
          title=""
          desc="自动增高多行文本框"
        >
          <autosize />
        </t-demo>
        <t-demo desc="设置字符数限制">
          <maxlength />
        </t-demo>
        <t-demo>
          <maxcharacter />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="禁用状态"
        >
          <disabled />
        </t-demo>
        <t-demo
          title="03 组件样式"
          desc="卡片样式"
        >
          <card />
        </t-demo>
        <t-demo
          title="04 特殊样式"
          desc="标签外置输入框"
        >
          <custom />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import labelDemo from './label/index.vue';
import autosize from './autosize/index.vue';
import maxlength from './maxlength/index.vue';
import disabled from './disabled/index.vue';
import maxcharacter from './maxcharacter/index.vue';
import card from './card/index.vue';
import custom from './custom/index.vue';
export default {
  components: {
    BaseDemo,
    labelDemo,
    autosize,
    disabled,
    maxlength,
    maxcharacter,
    card,
    custom,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import './textarea.less';
</style>
