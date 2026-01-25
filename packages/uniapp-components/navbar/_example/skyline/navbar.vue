<template>
  <view class="skyline">
    <t-demo-navbar
      title="NavBar"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          NavBar 导航栏
        </view>
        <view class="demo-desc">
          用于不同页面之间切换或者跳转，位于内容区的上方，系统状态栏的下方。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础小程序导航栏"
        >
          <view class="base">
            <base-demo />
          </view>
          <view class="base">
            <back-home />
          </view>
        </t-demo>
        <t-demo desc="带搜索的导航栏">
          <search-demo />
        </t-demo>
        <t-demo desc="带图片的导航栏">
          <img-demo />
        </t-demo>
        <t-demo
          title="02 组件样式"
          desc="标题对齐"
        >
          <left-title />
        </t-demo>
        <t-demo desc="自定义颜色">
          <custom-color />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import BaseDemo from '../base/index.vue';
import SearchDemo from '../search/index.vue';
import BackHome from '../back-home/index.vue';
import ImgDemo from '../img/index.vue';
import LeftTitle from '../left-title/index.vue';
import CustomColor from '../custom-color/index.vue';

export default {
  components: {
    BaseDemo,
    SearchDemo,
    BackHome,
    ImgDemo,
    LeftTitle,
    CustomColor,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './navbar.less';
</style>
