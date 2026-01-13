<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Fab"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <t-demo-header
      title="Fab 悬浮按钮"
      desc="当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮，例如：添加、发布。"
      notice="渲染框架支持情况：Skyline、WebView"
    />
    <t-demo
      title="01 组件类型"
      desc="纯图标悬浮按钮"
    >
      <view class="wrapper">
        <t-button
          theme="primary"
          size="large"
          block
          variant="outline"
          data-type="base"
          @click="handleChange($event, { type: 'base' })"
        >
          纯图标悬浮按钮
        </t-button>
      </view>
    </t-demo>
    <t-demo desc="图标加文字悬浮按钮">
      <view class="wrapper">
        <t-button
          theme="primary"
          size="large"
          block
          variant="outline"
          data-type="advance"
          @click="handleChange($event, { type: 'advance' })"
        >
          图标加文字悬浮按钮
        </t-button>
      </view>
    </t-demo>
    <t-demo
      title="02 组件样式"
      desc="可移动悬浮按钮"
    >
      <view class="wrapper">
        <t-button
          theme="primary"
          size="large"
          block
          variant="outline"
          data-type="draggable"
          @click="handleChange($event, { type: 'draggable' })"
        >
          可移动悬浮按钮
        </t-button>
      </view>
    </t-demo>
    <t-demo desc="带自动收缩功能">
      <view class="wrapper">
        <t-button
          theme="primary"
          size="large"
          block
          variant="outline"
          data-type="collapsible"
          @click="handleChange($event, { type: 'collapsible' })"
        >
          带自动收缩功能
        </t-button>
      </view>
    </t-demo>
    <t-demo padding>
      <view class="skeleton-group">
        <t-skeleton
          :row-col="rowCol"
          loading
        />
        <t-skeleton
          :row-col="rowCol"
          loading
        />
      </view>
      <view class="skeleton-group">
        <t-skeleton
          :row-col="rowCol"
          loading
        />
        <t-skeleton
          :row-col="rowCol"
          loading
        />
      </view>
    </t-demo>

    <BaseDemo v-if="type == 'base'" />
    <advance v-else-if="type == 'advance'" />
    <draggable v-else-if="type == 'draggable'" />
    <collapsible v-else-if="type == 'collapsible'" />
  </view>
</template>

<script>

import tButton from 'tdesign-uniapp/button/button.vue';
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton.vue';
import BaseDemo from './base/index.vue';
import advance from './advance/index.vue';
import draggable from './draggable/index.vue';
import collapsible from './collapsible/index.vue';
import { handlePageScroll } from 'tdesign-uniapp/mixins/page-scroll';

export default {
  components: {
    tButton,
    tSkeleton,
    BaseDemo,
    advance,
    draggable,
    collapsible,
  },
  data() {
    return {
      type: 'base',
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
    handlePageScroll(e);
  },
  methods: {
    handleChange(e, _dataset) {
      this.type = _dataset.type;
    },
  },
};
</script>
<style lang="less">
@import './fab.less';
</style>
