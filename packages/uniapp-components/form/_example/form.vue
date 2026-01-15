<template>
  <view class="tdesign-mobile-demo">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Form"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <t-demo-header
      title="Form 表单"
      desc="用以收集、校验和提交数据，一般由输入框、单选框、复选框、选择器等控件组成。"
      notice="渲染框架支持情况：Skyline、WebView"
    />
    <t-demo
      title="01 组件类型"
      desc="基础表单"
    >
      <view class="option">
        <view class="select-button-group">
          <TButton
            :theme="isActive1 ? 'light' : 'default'"
            shape="round"
            data-name="isActive1"
            :style="!useVirtualHost ? 'flex: 1;display: flex;' : ''"
            custom-style="flex: 1;margin-right: 16px;height: 32px;"
            @click="() => onClick()"
          >
            水平排布
          </TButton>
          <TButton
            :theme="isActive2 ? 'light' : 'default'"
            shape="round"
            data-name="isActive2"
            :style="!useVirtualHost ? 'flex: 1;display: flex;' : ''"
            custom-style="flex: 1;height: 32px;"
            @click="() => onClick()"
          >
            竖向排布
          </TButton>
        </view>
      </view>
    </t-demo>

    <view v-if="isActive1">
      <Horizontal :disabled="switchValue" />
    </view>

    <view v-if="isActive2">
      <Vertical :disabled="switchValue" />
    </view>
  </view>
</template>

<script>

import Horizontal from './horizontal/index.vue';
import Vertical from './vertical/index.vue';
import TButton from 'tdesign-uniapp/button/button.vue';
import { canUseVirtualHost } from 'tdesign-uniapp/common/version';

export default {
  components: {
    Horizontal,
    Vertical,
    TButton,
  },
  data() {
    return {
      isActive1: true,
      switchValue: false,
    };
  },
  computed: {
    isActive2() {
      return !this.isActive1;
    },
    useVirtualHost() {
      return canUseVirtualHost();
    },
  },
  methods: {
    onClick() {
      this.isActive1 = !this.isActive1;
    },
  },
};
</script>
<style lang="less">
@import './form.less';
</style>
