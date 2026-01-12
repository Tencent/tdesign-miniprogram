<template>
  <view class="skyline">
    <t-navbar
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
          <baseDemo />
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
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import multiple from '../multiple/index.vue';
import theme from '../theme/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
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
