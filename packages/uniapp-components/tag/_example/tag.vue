<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Tag"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view>
      <t-demo-header
        title="Tag 标签"
        desc="用于表明主体的类目，属性或状态。"
      />
      <t-demo title="01 组件类型">
        <typeDemo />
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
  </view>
</template>

<script>

import theme from './theme/index.vue';
import size from './size/index.vue';
import typeDemo from './type/index.vue';
import closable from './closable/index.vue';
import checkable from './checkable/index.vue';

export default {
  components: {
    theme,
    size,
    typeDemo,
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
