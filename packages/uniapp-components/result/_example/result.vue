<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Result"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Result 结果"
        desc="用于反馈不同结果的展示。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="组件类型"
        desc="基础结果"
      >
        <theme />
      </t-demo>
      <t-demo desc="带描述的结果">
        <description />
      </t-demo>
      <t-demo desc="自定义结果">
        <custom />
      </t-demo>
      <t-demo desc="页面示例">
        <view class="demo-section__wrapper">
          <t-button
            theme="primary"
            block
            size="large"
            variant="outline"
            @click="goResultPage"
          >
            页面示例
          </t-button>
        </view>
      </t-demo>
    </view>
  </view>
</template>

<script>

import tButton from 'tdesign-uniapp/button/button.vue';
import theme from './theme/index.vue';
import description from './description/index.vue';
import custom from './custom/index.vue';
export default {
  components: {
    tButton,
    theme,
    description,
    custom,
  },
  data() {
    return {};
  },
  methods: {
    goResultPage() {
      uni.navigateTo({
        url: './result-page',
      });
    },
  },
};
</script>
<style lang="less">
@import './result.less';
</style>
