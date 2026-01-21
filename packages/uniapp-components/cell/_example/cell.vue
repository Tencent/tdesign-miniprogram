<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Cell"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Cell 单元格"
        desc="用于各个类别行的信息展示。"
      />
      <t-demo
        title="01 组件类型"
        desc="单行单元格"
      >
        <baseComp />
      </t-demo>
      <t-demo desc="多行单元格">
        <multiple />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="卡片单元格"
      >
        <theme />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseComp from './base/index.vue';
import multiple from './multiple/index.vue';
import theme from './theme/index.vue';
export default {
  components: {
    baseComp,
    multiple,
    theme,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './cell.less';
</style>
