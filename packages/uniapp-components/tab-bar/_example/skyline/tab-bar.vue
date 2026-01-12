<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block"
      title="TabBar"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
      :scroll-top="scrollTo"
      @scroll="onScroll"
    >
      <view class="demo">
        <view class="demo-title">
          TabBar 标签栏
        </view>
        <view class="demo-desc">
          用于在不同功能模块之间进行快速切换，位于页面底部。
        </view>
        <t-demo
          title="01 组件类型"
          desc="纯文本标签栏"
        >
          <text-only />
        </t-demo>

        <t-demo desc="图标加文字标签栏">
          <baseDemo />
        </t-demo>

        <t-demo desc="纯图标标签栏">
          <icon-only />
        </t-demo>

        <t-demo desc="双层级纯文本标签栏">
          <subDemo />
        </t-demo>

        <t-demo
          title="02 组件样式"
          desc="弱选中标签栏"
        >
          <badge />
        </t-demo>

        <t-demo desc="悬浮胶囊标签栏">
          <round />
        </t-demo>

        <t-demo
          title="03 自定义"
          desc="自定义样式"
        >
          <custom />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import textOnly from '../text-only/index.vue';
import iconOnly from '../icon-only/index.vue';
import baseDemo from '../base/index.vue';
import subDemo from '../sub/index.vue';
import badge from '../badge/index.vue';
import round from '../round/index.vue';
import custom from '../custom/index.vue';
export default {
  components: {
    tNavbar,
    textOnly,
    iconOnly,
    baseDemo,
    subDemo,
    badge,
    round,
    custom,
  },
  data() {
    return {
      value: 'label_1',
      scrollTo: '',
    };
  },
  methods: {
    onChange(event: any) {
      console.log(event);
    },

    onScroll() {
      console.log('占位：函数 onScroll 未声明');
    },
  },
};
</script>
<style lang="less">
@import './tab-bar.less';
</style>
