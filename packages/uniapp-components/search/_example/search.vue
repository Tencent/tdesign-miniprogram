<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Search"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Search 搜索框"
        desc="用于用户输入搜索信息，并进行页面内容搜索。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础搜索框"
      >
        <BaseDemo />
      </t-demo>
      <t-demo desc="字数限制">
        <maxlength />
      </t-demo>
      <t-demo desc="获取焦点后显示取消按钮">
        <action />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="搜索框形状"
      >
        <shape />
      </t-demo>
      <t-demo
        title="03 组件状态"
        desc="默认状态其他对齐方式"
      >
        <other />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import maxlength from './maxlength/index.vue';
import action from './action/index.vue';
import shape from './shape/index.vue';
import other from './other/index.vue';
export default {
  components: {
    BaseDemo,
    maxlength,
    action,
    shape,
    other,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './search.less';
</style>
