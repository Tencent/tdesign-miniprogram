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
          <label-demo />
          <area-demo />
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

import LabelDemo from '../base/index.vue';
import WithTitle from '../with-title/index.vue';
import AreaDemo from '../area/index.vue';
import WithoutPopup from '../without-popup/index.vue';

export default {
  components: {
    LabelDemo,
    WithTitle,
    AreaDemo,
    WithoutPopup,
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
