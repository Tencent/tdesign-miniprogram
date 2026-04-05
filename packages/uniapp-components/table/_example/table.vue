<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Table"
    />
    <view class="demo">
      <t-demo-header
        title="Table 表格"
        desc="表格常用于展示同类结构下的多种数据，易于组织、对比和分析等，并可对数据进行搜索、筛选、排序等操作。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础表格"
        padding
      >
        <base-demo />
      </t-demo>
      <t-demo
        desc="横向平铺可滚动表格"
        padding
      >
        <scroll-demo />
      </t-demo>
      <t-demo
        desc="带斑马纹表格"
        padding
      >
        <stripe-demo />
      </t-demo>
      <t-demo
        desc="带边框表格"
        padding
      >
        <bordered-demo />
      </t-demo>
      <t-demo
        desc="带合并单元格的表格"
        padding
      >
        <rowspan-colspan-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import BorderedDemo from './bordered/index.vue';
import StripeDemo from './stripe/index.vue';
import ScrollDemo from './scroll/index.vue';
import RowspanColspanDemo from './rowspan-colspan/index.vue';

export default {
  components: {
    BaseDemo,
    BorderedDemo,
    StripeDemo,
    ScrollDemo,
    RowspanColspanDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './table.less';
</style>
