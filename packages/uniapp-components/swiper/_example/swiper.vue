<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Swiper"
    />
    <view class="demo swiper-demo">
      <t-demo-header
        title="Swiper 轮播图"
        desc="用于循环轮播一组图片或内容，也可以滑动进行切换，轮播动效时间可以设置。"
      />
      <view class="demo-section">
        <t-demo
          title="01 组件类型"
          desc="点状（dots）"
          padding
        >
          <!-- 受控属性示例 -->
          <base-demo />
        </t-demo>

        <t-demo
          desc="点条状（dots-bar）"
          padding
        >
          <custom-demo />
        </t-demo>

        <t-demo
          desc="分式（fraction）"
          padding
        >
          <fraction-demo />
        </t-demo>

        <t-demo
          desc="切换按钮（controls）"
          padding
        >
          <nav-btn />
        </t-demo>

        <t-demo desc="卡片式（cards）">
          <cards-demo />
        </t-demo>

        <t-demo
          title="02 组件样式"
          desc="垂直模式"
        >
          <vertical-demo />
        </t-demo>
      </view>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import FractionDemo from './fraction/index.vue';
import NavBtn from './nav-btn/index.vue';
import CustomDemo from './custom/index.vue';
import CardsDemo from './cards/index.vue';
import VerticalDemo from './vertical/index.vue';
export default {
  components: {
    BaseDemo,
    FractionDemo,
    NavBtn,
    CustomDemo,
    CardsDemo,
    VerticalDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './swiper.less';
</style>
