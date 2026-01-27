<template>
  <view>
    <t-demo-navbar
      title="Cell"
    />
    <view class="demo">
      <t-demo-header
        title="Cell 单元格"
        desc="用于各个类别行的信息展示。"
      />
      <t-demo
        title="01 组件类型"
        desc="单行单元格"
      >
        <base-comp />
      </t-demo>
      <t-demo desc="多行单元格">
        <multiple-demo />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="卡片单元格"
      >
        <theme-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseComp from './base/index.vue';
import MultipleDemo from './multiple/index.vue';
import ThemeDemo from './theme/index.vue';
export default {
  components: {
    BaseComp,
    MultipleDemo,
    ThemeDemo,
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
