<template>
  <view>
    <t-demo-navbar
      title="Input"
    />
    <view class="input-example">
      <t-demo-header
        title="Input 输入框"
        desc="用于单行文本信息输入。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础输入框"
      >
        <base-demo />
      </t-demo>
      <t-demo desc="带字数限制输入框">
        <maxlength-demo />
      </t-demo>
      <t-demo desc="带操作输入框">
        <suffix-demo />
      </t-demo>
      <t-demo desc="带图标输入框">
        <prefix-demo />
      </t-demo>
      <t-demo desc="特定类型输入框">
        <special-demo />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="输入框状态"
      >
        <status-demo />
      </t-demo>
      <t-demo desc="信息超长状态">
        <label-demo />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="内容位置"
      >
        <align-demo />
      </t-demo>
      <t-demo desc="竖排样式">
        <layout-demo />
      </t-demo>
      <t-demo desc="非通栏样式">
        <banner-demo />
      </t-demo>
      <t-demo desc="标签外置样式">
        <bordered-demo />
      </t-demo>
      <t-demo desc="自定义样式输入框">
        <custom-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import BaseDemo from './base/index.vue';
import MaxlengthDemo from './maxlength/index.vue';
import SuffixDemo from './suffix/index.vue';
import PrefixDemo from './prefix/index.vue';
import LayoutDemo from './layout/index.vue';
import BorderedDemo from './bordered/index.vue';
import AlignDemo from './align/index.vue';
import SpecialDemo from './special/index.vue';
import StatusDemo from './status/index.vue';
import CustomDemo from './custom/index.vue';
import LabelDemo from './label/index.vue';
import BannerDemo from './banner/index.vue';
export default {
  components: {
    BaseDemo,
    SuffixDemo,
    PrefixDemo,
    LayoutDemo,
    BorderedDemo,
    AlignDemo,
    MaxlengthDemo,
    SpecialDemo,
    StatusDemo,
    CustomDemo,
    LabelDemo,
    BannerDemo,
  },
  data() {
    return {
      firstValue: '',
      textPassword: '123456',
      phoneError: false,
      phoneNumber: '17600600600',
      price: '10.2',
      priceError: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="less">
@import './input.less';
</style>
