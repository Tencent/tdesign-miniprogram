<template>
  <view>
    <t-demo-navbar
      title="SwipeCell"
    />
    <view class="demo">
      <t-demo-header
        title="SwipeCell 滑动操作"
        desc="用于承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="左滑单操作"
      >
        <left-demo />
      </t-demo>
      <t-demo desc="右滑单操作">
        <right-demo />
      </t-demo>
      <t-demo desc="左右滑操作">
        <double-demo />
      </t-demo>
      <t-demo desc="带图标的滑动操作">
        <icon-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import LeftDemo from './left/index.vue';
import RightDemo from './right/index.vue';
import DoubleDemo from './double/index.vue';
import IconDemo from './icon/index.vue';
export default {
  components: {
    LeftDemo,
    RightDemo,
    DoubleDemo,
    IconDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './swipe-cell.less';
</style>
