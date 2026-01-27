<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Result"
    />
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
        <theme-demo />
      </t-demo>
      <t-demo desc="带描述的结果">
        <description-demo />
      </t-demo>
      <t-demo desc="自定义结果">
        <custom-demo />
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

import TButton from '@tdesign/uniapp/button/button.vue';
import ThemeDemo from './theme/index.vue';
import DescriptionDemo from './description/index.vue';
import CustomDemo from './custom/index.vue';
export default {
  components: {
    TButton,
    ThemeDemo,
    DescriptionDemo,
    CustomDemo,
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
