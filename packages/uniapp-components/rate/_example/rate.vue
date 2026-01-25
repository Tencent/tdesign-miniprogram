<template>
  <view>
    <t-demo-navbar
      title="Rate"
    />
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
        <base-demo />

        <view class="demo-desc">
          自定义评分
        </view>
        <custom-demo />

        <view class="demo-desc">
          第三方图标评分
        </view>
        <custom-prefix />

        <view class="demo-desc">
          自定义评分数量
        </view>
        <count-demo />

        <view class="demo-desc">
          带描述评分
        </view>
        <show-text />
      </t-demo>

      <t-demo title="02 组件状态">
        <action-demo />
      </t-demo>

      <t-demo title="03 组件样式">
        <view class="demo-desc">
          评分大小
        </view>
        <size-demo />

        <view class="demo-desc">
          设置评分颜色
        </view>
        <color-demo />
      </t-demo>

      <t-demo
        title="04 特殊样式"
        desc="竖向带描述评分"
      />
      <special-demo />
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import CustomDemo from './custom/index.vue';
import CustomPrefix from './custom-prefix/index.vue';
import SpecialDemo from './special/index.vue';
import CountDemo from './count/index.vue';
import ActionDemo from './action/index.vue';
import ShowText from './show-text/index.vue';
import ColorDemo from './color/index.vue';
import SizeDemo from './size/index.vue';
export default {
  components: {
    BaseDemo,
    CustomDemo,
    CustomPrefix,
    SpecialDemo,
    CountDemo,
    ActionDemo,
    ShowText,
    ColorDemo,
    SizeDemo,
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
