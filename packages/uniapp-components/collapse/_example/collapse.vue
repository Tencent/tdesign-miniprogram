<template>
  <view>
    <t-demo-navbar
      title="Collapse"
    />
    <view class="demo">
      <t-demo-header
        title="Collapse 折叠面板"
        desc="可以折叠/展开的内容区域。"
      />
      <t-demo
        title="01 组件类型"
        desc="基础折叠面板"
      >
        <base-comp />
      </t-demo>

      <t-demo desc="向上展开">
        <placement-demo />
      </t-demo>

      <t-demo desc="带操作说明">
        <action-demo />
      </t-demo>

      <t-demo desc="手风琴式">
        <accordion-demo />
      </t-demo>

      <t-demo
        title="02 组件样式"
        desc="卡片折叠面板"
      >
        <theme-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseComp from './base/index.vue';
import PlacementDemo from './placement/index.vue';
import ActionDemo from './action/index.vue';
import AccordionDemo from './accordion/index.vue';
import ThemeDemo from './theme/index.vue';


export default {
  components: {
    BaseComp,
    PlacementDemo,
    ActionDemo,
    AccordionDemo,
    ThemeDemo,
  },
  data() {
    return {
      activeValues: [0],
    };
  },
  methods: {

  },
};
</script>
<style lang="less">
@import './collapse.less';
</style>
