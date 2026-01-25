<template>
  <view class="skyline">
    <t-demo-navbar
      title="Picker"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="area-picker-demo">
        <view class="demo-title">
          Picker 选择器
        </view>
        <view class="demo-desc">
          用于一组预设数据中的选择。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础选择器"
        >
          <labelDemo />
          <areaDemo />
        </t-demo>
        <t-demo
          title="02 组件样式"
          desc="是否带标题"
        >
          <with-title />
        </t-demo>
        <t-demo desc="不使用 Popup">
          <without-popup />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import TNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import labelDemo from '../base/index.vue';
import withTitle from '../with-title/index.vue';
import areaDemo from '../area/index.vue';
import withoutPopup from '../without-popup/index.vue';
export default {
  components: {
    TNavbar,
    labelDemo,
    withTitle,
    areaDemo,
    withoutPopup,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './picker.less';
</style>
