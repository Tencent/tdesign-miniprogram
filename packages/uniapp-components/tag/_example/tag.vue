<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Tag"
    />
    <view>
      <t-demo-header
        title="Tag 标签"
        desc="用于表明主体的类目，属性或状态。"
      />
      <t-demo title="01 组件类型">
        <type-demo />
      </t-demo>
      <t-demo desc="可关闭的标签">
        <closable-demo />
      </t-demo>
      <t-demo desc="可点击的标签">
        <checkable-demo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="展示型标签"
      >
        <theme-demo />
      </t-demo>
      <t-demo title="03 组件尺寸">
        <size-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import ThemeDemo from './theme/index.vue';
import SizeDemo from './size/index.vue';
import TypeDemo from './type/index.vue';
import ClosableDemo from './closable/index.vue';
import CheckableDemo from './checkable/index.vue';

export default {
  components: {
    ThemeDemo,
    SizeDemo,
    TypeDemo,
    ClosableDemo,
    CheckableDemo,
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
