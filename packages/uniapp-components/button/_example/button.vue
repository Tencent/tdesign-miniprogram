<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Button"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Button 按钮"
        desc="用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础按钮"
      >
        <baseComp />
      </t-demo>

      <t-demo desc="图标按钮">
        <icon-btn />
      </t-demo>

      <t-demo desc="幽灵按钮">
        <ghost-btn />
      </t-demo>

      <t-demo desc="组合按钮">
        <group-btn />
      </t-demo>

      <t-demo desc="通栏按钮">
        <block-btn />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="按钮禁用态"
      >
        <disabled />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="按钮尺寸"
      >
        <size />
      </t-demo>

      <t-demo desc="按钮形状">
        <shape />
      </t-demo>

      <t-demo desc="按钮主题">
        <theme />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseComp from './base/index.vue';
import size from './size/index.vue';
import iconBtn from './icon-btn/index.vue';
import groupBtn from './group-btn/index.vue';
import blockBtn from './block-btn/index.vue';
import ghostBtn from './ghost-btn/index.vue';
import shape from './shape/index.vue';
import theme from './theme/index.vue';
import disabled from './disabled/index.vue';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    baseComp,
    size,
    iconBtn,
    groupBtn,
    blockBtn,
    ghostBtn,
    shape,
    theme,
    disabled,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './button.less';
</style>
