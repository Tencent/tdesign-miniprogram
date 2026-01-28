<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Indexes"
    />
    <view class="indexes">
      <t-demo-header
        title="Indexes 索引"
        desc="用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础索引类型"
        padding
      >
        <t-button
          variant="outline"
          theme="primary"
          size="large"
          block
          @click="toBase"
        >
          基础用法
        </t-button>
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="其他索引样式"
        padding
      >
        <t-button
          variant="outline"
          theme="primary"
          size="large"
          block
          @click="toCustom"
        >
          胶囊索引
        </t-button>
      </t-demo>
    </view>
  </view>
</template>

<script>

import TButton from '@tdesign/uniapp/button/button.vue';
export default {
  components: {
    TButton,
  },
  data() {
    return {};
  },
  methods: {
    toBase() {
      uni.navigateTo({
        url: '/pages-more/indexes/base/index',
      });
    },

    toCustom() {
      uni.navigateTo({
        url: '/pages-more/indexes/custom/index',
      });
    },
  },
};
</script>
<style lang="less">
@import './indexes.less';
</style>
