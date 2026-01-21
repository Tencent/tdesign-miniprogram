<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Radio"
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
      <view
        class="demo"
        hover-class="none"
        :hover-stop-propagation="false"
      >
        <t-demo-header
          title="Radio 单选框"
          desc="用于在预设的一组选项中执行单项选择，并呈现选择结果。"
          notice="渲染框架支持情况：Skyline、WebView"
        />
        <t-demo
          title="01 组件类型"
          desc="纵向单选框"
        >
          <BaseDemo />
        </t-demo>

        <t-demo
          title=""
          desc="横向单选框"
        >
          <horizontal />
        </t-demo>

        <t-demo
          title="02 组件状态"
          desc="单选框状态"
        >
          <status />
        </t-demo>

        <t-demo
          title="03 组件样式"
          desc="勾选样式"
        >
          <theme />
        </t-demo>

        <t-demo desc="勾选显示位置">
          <align />
        </t-demo>

        <t-demo desc="非通栏单选样式">
          <card />
        </t-demo>

        <t-demo
          title="04 特殊样式"
          desc="纵向卡片单选框"
        >
          <special />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import horizontal from './horizontal/index.vue';
import align from './align/index.vue';
import card from './card/index.vue';
import status from './status/index.vue';
import theme from './theme/index.vue';
import special from './special/index.vue';
export default {
  components: {
    horizontal,
    BaseDemo,
    align,
    card,
    status,
    theme,
    special,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './radio.less';
</style>
