<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="ActionSheet"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="ActionSheet 动作面板"
        desc="从底部弹出的模态框，提供和当前场景相关的操作动作，也支持提供信息输入和描述。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="列表型动作面板"
        padding
      >
        <list />
      </t-demo>

      <t-demo
        desc="宫格型动作面板"
        padding
      >
        <grid />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="列表型选项状态"
        padding
      >
        <status />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="列表型对齐方式"
        padding
      >
        <align />
      </t-demo>
    </view>
  </view>
</template>

<script>

import list from './list/index.vue';
import status from './status/index.vue';
import grid from './grid/index.vue';
import align from './align/index.vue';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    list,
    status,
    grid,
    align,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './action-sheet.less';
</style>
