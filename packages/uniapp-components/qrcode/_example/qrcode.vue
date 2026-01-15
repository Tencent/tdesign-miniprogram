<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="QRCode"
      :left-arrow="true"
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="QRCode 二维码"
        notice="渲染框架支持情况：WebView"
      >
        <template #desc>
          <view>
            能够将文本转换生成二维码的组件，支持自定义配色和 Logo 配置。<text style="color: var(--td-brand-color)">
              （QRCode基于Canvas实现，微信开发者工具暂不支持Canvas同层渲染，会导致显示异常，最终效果请以真机为准。）
            </text>
          </view>
        </template>
      </t-demo-header>

      <t-demo
        title="01 组件类型"
        desc="基本用法"
        :padding="true"
      >
        <BaseDemo />
      </t-demo>

      <t-demo
        desc="带 Icon 的二维码"
        :padding="true"
      >
        <Icon />
      </t-demo>

      <t-demo
        desc="无边框的二维码"
        :padding="true"
      >
        <Borderless />
      </t-demo>

      <t-demo desc="二维码纠错等级">
        <Level />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="active"
        :padding="true"
      >
        <Status />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="二维码颜色"
        :padding="true"
      >
        <Color />
      </t-demo>

      <t-demo
        desc="二维码尺寸"
        :padding="true"
      >
        <Size />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import Size from './size/index.vue';
import Icon from './icon/index.vue';
import Color from './color/index.vue';
import Level from './level/index.vue';
import Status from './status/index.vue';
import Borderless from './borderless/index.vue';

export default {
  name: 'QRCodeExample',
  components: {
    BaseDemo,
    Size,
    Icon,
    Color,
    Level,
    Status,
    Borderless,
  },
};
</script>

<style lang="less">
@import './qrcode.less';
</style>
