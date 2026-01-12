<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block demo-navbar"
      title="Tag"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Tag 标签
        </view>
        <view class="demo-desc">
          用于表明主体的类目，属性或状态。
        </view>
        <t-demo title="01 组件类型">
          <type />
        </t-demo>
        <t-demo desc="可关闭的标签">
          <closable />
        </t-demo>
        <t-demo desc="可点击的标签">
          <checkable />
        </t-demo>
        <t-demo
          title="02 组件状态"
          desc="展示型标签"
        >
          <theme />
        </t-demo>
        <t-demo title="03 组件尺寸">
          <size />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import theme from '../theme/index.vue';
import size from '../size/index.vue';
import type from '../type/index.vue';
import closable from '../closable/index.vue';
import checkable from '../checkable/index.vue';
export default {
  components: {
    tNavbar,
    theme,
    size,
    type,
    closable,
    checkable,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './tag.less';
</style>
