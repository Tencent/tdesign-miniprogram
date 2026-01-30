<template>
  <view class="skyline">
    <t-demo-navbar
      title="Cell"
      left-arrow
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Cell 单元格
        </view>
        <view class="demo-desc">
          用于各个类别行的信息展示。
        </view>
        <t-demo
          title="01 组件类型"
          desc="单行单元格"
        >
          <base-demo />
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
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import MultipleDemo from '../multiple/index.vue';
import ThemeDemo from '../theme/index.vue';

export default {
  components: {
    BaseDemo,
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
