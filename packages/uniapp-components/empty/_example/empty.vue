<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Empty"
    />
    <view class="demo">
      <t-demo-header
        title="Empty 空状态"
        desc="用于空状态时的占位提示。"
      />
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
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import ImageEmpty from './imageEmpty/index.vue';
import ButtonEmpty from './buttonEmpty/index.vue';


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
