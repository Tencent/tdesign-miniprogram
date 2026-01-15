<template>
  <view class="skyline">
    <t-navbar
      title="Layout"
      left-arrow
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Layout 布局
        </view>
        <view class="demo-desc">
          以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础用法"
        >
          <baseDemo />
        </t-demo>

        <t-demo desc="在列元素之间增加间距">
          <offset />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseDemo from '../base/index.vue';
import offset from '../offset/index.vue';
export default {
  components: {
    tNavbar,
    baseDemo,
    offset,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './col.less';
</style>
