<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Collapse"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Collapse 折叠面板"
        desc="可以折叠/展开的内容区域。"
      />
      <t-demo
        title="01 组件类型"
        desc="基础折叠面板"
      >
        <baseComp />
      </t-demo>

      <t-demo desc="向上展开">
        <placement />
      </t-demo>

      <t-demo desc="带操作说明">
        <action />
      </t-demo>

      <t-demo desc="手风琴式">
        <accordion />
      </t-demo>

      <t-demo
        title="02 组件样式"
        desc="卡片折叠面板"
      >
        <theme />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseComp from './base/index.vue';
import placement from './placement/index.vue';
import action from './action/index.vue';
import accordion from './accordion/index.vue';
import theme from './theme/index.vue';


export default {
  components: {
    baseComp,
    placement,
    action,
    accordion,
    theme,
  },
  data() {
    return {
      activeValues: [0],
    };
  },
  methods: {

  },
};
</script>
<style lang="less">
@import './collapse.less';
</style>
