<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="Rate"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="Rate 评分"
        desc="用于对某行为/事物进行打分。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo title="01 组件类型">
        <view class="demo-desc">
          实心评分
        </view>
        <BaseDemo />

        <view class="demo-desc">
          自定义评分
        </view>
        <custom />

        <view class="demo-desc">
          第三方图标评分
        </view>
        <custom-prefix />

        <view class="demo-desc">
          自定义评分数量
        </view>
        <count />

        <view class="demo-desc">
          带描述评分
        </view>
        <show-text />
      </t-demo>

      <t-demo title="02 组件状态">
        <action />
      </t-demo>

      <t-demo title="03 组件样式">
        <view class="demo-desc">
          评分大小
        </view>
        <size />

        <view class="demo-desc">
          设置评分颜色
        </view>
        <color />
      </t-demo>

      <t-demo
        title="04 特殊样式"
        desc="竖向带描述评分"
      />
      <special />
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import custom from './custom/index.vue';
import customPrefix from './custom-prefix/index.vue';
import special from './special/index.vue';
import count from './count/index.vue';
import action from './action/index.vue';
import showText from './show-text/index.vue';
import color from './color/index.vue';
import size from './size/index.vue';
export default {
  components: {
    BaseDemo,
    custom,
    customPrefix,
    special,
    count,
    action,
    showText,
    color,
    size,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './rate.less';
</style>
