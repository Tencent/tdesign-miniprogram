<template>
  <view class="skyline">
    <t-demo-navbar
      title="Textarea"
    />
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
          <base-demo />
        </t-demo>
        <t-demo
          title=""
          desc="带标题多行文本框"
        >
          <label-demo />
        </t-demo>
        <t-demo
          title=""
          desc="自动增高多行文本框"
        >
          <autosize-demo />
        </t-demo>
        <t-demo desc="设置字符数限制">
          <maxlength-demo />
        </t-demo>
        <t-demo>
          <maxcharacter-demo />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="禁用状态"
        >
          <disabled-demo />
        </t-demo>
        <t-demo
          title="03 组件样式"
          desc="卡片样式"
        >
          <card-demo />
        </t-demo>
        <t-demo
          title="04 特殊样式"
          desc="标签外置输入框"
        >
          <custom-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import LabelDemo from './label/index.vue';
import AutosizeDemo from './autosize/index.vue';
import MaxlengthDemo from './maxlength/index.vue';
import DisabledDemo from './disabled/index.vue';
import MaxcharacterDemo from './maxcharacter/index.vue';
import CardDemo from './card/index.vue';
import CustomDemo from './custom/index.vue';
export default {
  components: {
    BaseDemo,
    LabelDemo,
    AutosizeDemo,
    DisabledDemo,
    MaxlengthDemo,
    MaxcharacterDemo,
    CardDemo,
    CustomDemo,
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
