<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Result Page"
    />
    <view class="page">
      <view class="demo-section__wrapper">
        <t-result
          theme="success"
          title="成功状态"
          description="描述文字"
        />
      </view>
      <view class="demo-section__wrapper">
        <t-button
          theme="primary"
          block
          size="large"
          variant="outline"
          @click="goBack"
        >
          返回
        </t-button>
      </view>
    </view>
  </view>
</template>

<script>

import TButton from '@tdesign/uniapp/button/button.vue';
import TResult from '@tdesign/uniapp/result/result.vue';
export default {
  components: {
    TButton,
    TResult,
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 1,
      });
    },
  },
};
</script>
<style lang="less">
@import './result-page.less';
</style>
