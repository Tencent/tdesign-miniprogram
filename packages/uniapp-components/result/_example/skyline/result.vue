<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Result"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Result 结果
        </view>
        <view class="demo-desc">
          用于反馈不同结果的展示。
        </view>
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
    </scroll-view>
  </view>
</template>

<script>

import TNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import TButton from 'tdesign-uniapp/button/button.vue';
import theme from '../theme/index.vue';
import description from '../description/index.vue';
import custom from '../custom/index.vue';
export default {
  components: {
    TNavbar,
    TButton,
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
        url: '../result-page',
      });
    },
  },
};
</script>
<style lang="less">
@import './result.less';
</style>
