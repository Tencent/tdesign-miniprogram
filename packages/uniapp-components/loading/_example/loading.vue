<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Loading"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <t-demo-header
          title="Loading 加载"
          desc="文用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。"
        />
        <t-demo
          title="01 组件类型"
          desc="纯图标"
          padding
        >
          <BaseComp />
        </t-demo>
        <t-demo
          desc="图标加文字横向"
          padding
        >
          <HorizontalDemo />
        </t-demo>
        <t-demo
          desc="图标加文字竖向"
          padding
        >
          <VerticalDemo />
        </t-demo>
        <t-demo
          desc="纯文字"
          padding
        >
          <TextComp />
        </t-demo>

        <t-demo
          title="02 组件尺寸"
          desc="大尺寸"
          padding
        >
          <SizeDemo />
        </t-demo>

        <t-demo
          title="03 加载速度"
          desc="加载速度调整"
          padding
        >
          <DurationDemo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>
//
import BaseComp from './base/index.vue';
import HorizontalDemo from './horizontal/index.vue';
import VerticalDemo from './vertical/index.vue';
import TextComp from './text/index.vue';
import DurationDemo from './duration/index.vue';
import SizeDemo from './size/index.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    BaseComp,
    HorizontalDemo,
    VerticalDemo,
    TextComp,
    DurationDemo,
    SizeDemo,
  },
  data() {
    return {};
  },
  methods: {
    goToProgress() {
      uni.redirectTo({
        url: '/pages/loading/loadingProgress/index',
      });
    },
  },
};
</script>
<style lang="less">
@import './loading.less';
</style>
