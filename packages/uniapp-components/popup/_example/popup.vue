<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Popup"
    />
    <t-demo-header
      title="Popup 弹出层"
      desc="由其他控件触发，屏幕滑出或弹出一块自定义内容区域。"
      notice="渲染框架支持情况：Skyline、WebView"
    />
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
        <custom-close />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import WithTitle from './with-title/index.vue';
import CustomClose from './custom-close/index.vue';
export default {
  components: {
    BaseDemo,
    WithTitle,
    CustomClose,
  },
  data() {
    return {
      bottom: false,
      center: false,
      left: false,
      right: false,
      placement: '',
    };
  },
  methods: {
    handlePopup(e) {
      const placement = e.currentTarget.dataset.type;
      this.placement = placement;
      this[placement] = true;
    },

    onVisibleChange({ detail }) {
      const { visible } = detail;
      if (this.placement) {
        this[this.placement] = visible;
      }
    },
  },
};
</script>
<style lang="less">
@import './popup.less';
</style>
