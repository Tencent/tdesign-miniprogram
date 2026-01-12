<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="block"
      title="BackTop"
      left-arrow
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
      :scroll-top="scrollTo"
      @scroll="onScroll"
    >
      <view class="demo">
        <view class="demo-title">
          BackTop 返回顶部
        </view>
        <view class="demo-desc">
          用于当页面过长往下滑动时，帮助用户快速回到页面顶部。
        </view>

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
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
            <t-skeleton
              :row-col="rowCol"
              class="skeleton-item"
              loading
            />
          </view>
        </t-demo>

        <baseDemo
          v-if="type == 'round'"
          :scroll-top="scrollTop"
          @to-top="onToTop"
        />
        <half-round
          v-if="type == 'half-round'"
          :scroll-top="scrollTop"
          @to-top="onToTop"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>

import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton.vue';
import baseDemo from '../base/index.vue';
import halfRound from '../half-round/index.vue';
export default {
  components: {
    tNavbar,
    tButton,
    tSkeleton,
    baseDemo,
    halfRound,
  },
  data() {
    return {
      type: 'round',
      scrollTop: 0,
      scrollTo: 0,
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
  methods: {
    onScroll(e: any) {
      const { scrollTop } = e.detail;
      this.scrollTop = scrollTop;
    },

    onToTop() {
      this.scrollTo = 0;
    },

    onBtnClick(e: any, { source: type }) {
      this.type = type;
      this.scrollTo = 100;
    },
  },
};
</script>
<style lang="less">
@import './back-top.less';
</style>
