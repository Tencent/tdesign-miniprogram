<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Skeleton"
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
          Skeleton 骨架屏
        </view>
        <view class="demo-desc">
          用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。
        </view>
        <t-demo
          title="01 骨架屏类型"
          padding
        >
          <theme />
        </t-demo>

        <t-demo
          desc="单元格骨架屏"
          padding
        >
          <cell-group />
        </t-demo>

        <t-demo
          desc="宫格骨架屏"
          padding
        >
          <grid />
        </t-demo>

        <t-demo
          desc="图文组合骨架屏"
          padding
        >
          <image-group />
        </t-demo>

        <t-demo
          title="02 组件动效"
          padding
        >
          <animation />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import theme from '../theme/index.vue';
import grid from '../grid/index.vue';
import cellGroup from '../cell-group/index.vue';
import imageGroup from '../image-group/index.vue';
import animation from '../animation/index.vue';
export default {
  components: {
    tNavbar,
    theme,
    grid,
    cellGroup,
    imageGroup,
    animation,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './skeleton.less';
</style>
