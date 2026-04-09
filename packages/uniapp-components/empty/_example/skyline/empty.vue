<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Empty"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Empty 空状态
        </view>
        <view class="demo-desc">
          用于空状态时的占位提示。
        </view>
        <t-demo
          title="01 类型"
          desc="图标空状态"
        >
          <base-demo />
        </t-demo>
        <t-demo desc="自定义图片空状态">
          <image-empty />
        </t-demo>
        <t-demo desc="带操作空状态">
          <button-empty />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import ImageEmpty from '../imageEmpty/index.vue';
import ButtonEmpty from '../buttonEmpty/index.vue';

export default {
  components: {
    BaseDemo,
    ImageEmpty,
    ButtonEmpty,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './empty.less';
</style>
