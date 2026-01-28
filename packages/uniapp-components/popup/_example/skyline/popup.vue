<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Popup"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        Popup 弹出层
      </view>
      <view class="demo-desc">
        由其他控件触发，屏幕滑出或弹出一块自定义内容区域。
      </view>
      <view class="tdesign-demo-popup">
        <t-demo
          title="01 组件类型"
          desc="基础弹出层"
          padding
        >
          <base-demo />
        </t-demo>
        <t-demo
          title="02 组件示例"
          desc="应用示例"
          padding
        >
          <with-title />
          <custom-close style="display: block; margin-top: 32rpx" />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import WithTitle from '../with-title/index.vue';
import CustomClose from '../custom-close/index.vue';

export default {
  components: {
    BaseDemo,
    WithTitle,
    CustomClose,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './popup.less';
</style>
