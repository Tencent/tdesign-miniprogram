<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="ChatLoading"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <view class="demo">
      <t-demo-header
        title="ChatLoading 对话加载"
        desc="用于对话场景中的加载状态组件。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="支持多种加载中动效类型，包括 gradient、moving、dots"
      >
        <baseDemo />
      </t-demo>
      <t-demo desc="带文案描述的类型">
        <textDemo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import textDemo from './text/index.vue';

export default {
  components: {
    baseDemo,
    textDemo,
  },
  data() {
    return {
      loading: true,
      loadingText: '正在加载...',
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },

    resetLoading() {
      this.loading = true;
      this.loadingText = '正在加载...';

      uni.showToast({
        title: '已重置',
        icon: 'success',
      });
    },
  },
};
</script>
<style lang="less">
@import './chat-loading.less';
</style>
