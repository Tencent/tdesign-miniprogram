<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Checkbox"
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
          title="Checkbox 多选框"
          desc="用于预设的一组选项中执行多项选择，并呈现选择结果。"
          notice="渲染框架支持情况：Skyline、WebView"
        />
        <t-demo
          title="01 组件类型"
          desc="纵向多选框"
        >
          <BaseDemo />
        </t-demo>

        <t-demo desc="横向多选框">
          <HorizontalDemo />
        </t-demo>

        <t-demo desc="带全选多选框">
          <all />
        </t-demo>

        <t-demo
          title="02 组件状态"
          desc="多选框状态"
        >
          <status />
        </t-demo>

        <t-demo
          title="03 组件样式"
          desc="勾选样式"
        >
          <typeDemo />
        </t-demo>

        <t-demo desc="勾选显示位置">
          <right />
        </t-demo>

        <t-demo desc="非通栏多选样式">
          <card />
        </t-demo>

        <t-demo
          title="04 组件规格"
          desc="多选框尺寸规格"
        >
          <special />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import HorizontalDemo from './horizontal/index.vue';
import all from './all/index.vue';
import status from './status/index.vue';
import typeDemo from './type/index.vue';
import right from './right/index.vue';
import card from './card/index.vue';
import special from './special/index.vue';
export default {
  components: {
    BaseDemo,
    HorizontalDemo,
    all,
    status,
    typeDemo,
    right,
    card,
    special,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './checkbox.less';
</style>
