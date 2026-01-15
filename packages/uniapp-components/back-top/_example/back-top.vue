<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="BackTop"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <t-demo-header
        title="BackTop 返回顶部"
        desc="用于当页面过长往下滑动时，帮助用户快速回到页面顶部。"
        notice="渲染框架支持情况：Skyline、WebView"
      />
      <t-demo
        title="组件类型"
        desc="圆形返回顶部"
        padding
      >
        <t-button
          theme="primary"
          size="large"
          block
          variant="outline"
          data-source="round"
          @click="onBtnClick($event, { source: 'round' })"
        >
          圆形返回顶部
        </t-button>
      </t-demo>
      <t-demo
        desc="半圆形返回顶部"
        padding
      >
        <t-button
          theme="primary"
          size="large"
          block
          variant="outline"
          data-source="half-round"
          @click="onBtnClick($event, { source: 'half-round' })"
        >
          半圆形返回顶部
        </t-button>
      </t-demo>
      <t-demo padding>
        <view class="container-flex">
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
          <t-skeleton
            :row-col="rowCol"
            t-class="skeleton-item"
            loading
          />
        </view>
      </t-demo>

      <BaseDemo
        v-if="type == 'round'"
        :scroll-top="scrollTop"
      />
      <half-round
        v-if="type == 'half-round'"
        :scroll-top="scrollTop"
      />
    </view>
  </view>
</template>

<script>

import tButton from 'tdesign-uniapp/button/button.vue';
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton.vue';
import BaseDemo from './base/index.vue';
import halfRound from './half-round/index.vue';
export default {
  components: {
    tButton,
    tSkeleton,
    BaseDemo,
    halfRound,
  },
  data() {
    return {
      type: 'round',
      scrollTop: 0,
      rowCol: [
        {
          size: '327rpx',
          borderRadius: '24rpx',
        },
        1,
        {
          width: '61%',
        },
      ],
    };
  },
  onPageScroll(e) {
    const { scrollTop } = e;
    this.scrollTop = scrollTop;
  },
  methods: {
    onBtnClick(e, { source: type }) {
      this.type = type;
      uni.pageScrollTo({
        duration: 300,
        scrollTop: 1000,
      });
    },
  },
};
</script>
<style lang="less">
@import './back-top.less';
</style>
