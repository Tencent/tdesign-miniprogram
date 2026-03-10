<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="demo-navbar"
      title="QRCode"
    />
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
        <base-demo />
      </t-demo>

      <t-demo
        desc="带 Icon 的二维码"
        :padding="true"
      >
        <icon-demo />
      </t-demo>

      <t-demo
        desc="无边框的二维码"
        :padding="true"
      >
        <borderless-demo />
      </t-demo>

      <t-demo desc="二维码纠错等级">
        <level-demo />
      </t-demo>

      <t-demo
        title="02 组件状态"
        desc="active"
        :padding="true"
      >
        <status-demo />
      </t-demo>

      <t-demo
        title="03 组件样式"
        desc="二维码颜色"
        :padding="true"
      >
        <color-demo />
      </t-demo>

      <t-demo
        desc="二维码尺寸"
        :padding="true"
      >
        <size-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import SizeDemo from './size/index.vue';
import IconDemo from './icon/index.vue';
import ColorDemo from './color/index.vue';
import LevelDemo from './level/index.vue';
import StatusDemo from './status/index.vue';
import BorderlessDemo from './borderless/index.vue';

export default {
  name: 'QRCodeExample',
  components: {
    BaseDemo,
    SizeDemo,
    IconDemo,
    ColorDemo,
    LevelDemo,
    StatusDemo,
    BorderlessDemo,
  },
};
</script>

<style lang="less">
@import './qrcode.less';
</style>
