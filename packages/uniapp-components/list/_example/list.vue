<template>
  <view>
    <t-demo-navbar title="List" />
    <view class="demo list-demo">
      <t-demo-header
        v-if="currentTab === 'info'"
        title="List 列表"
        desc="瀑布流滚动加载，用于展示同一类型信息的长列表。当列表即将滚动到底部时，会触发事件并加载更多列表项。"
      />
      <t-demo
        v-if="currentTab === 'info'"
        title="01 类型"
        desc="基础列表"
      >
        <t-button
          size="large"
          variant="outline"
          theme="primary"
          @click="onChangeTab('base')"
        >
          基础列表
        </t-button>
        <t-button
          size="large"
          variant="outline"
          theme="primary"
          @click="onChangeTab('pull-refresh')"
        >
          下拉刷新
        </t-button>
        <t-button
          size="large"
          variant="outline"
          theme="primary"
          @click="onChangeTab('error-tip')"
        >
          错误提示
        </t-button>
      </t-demo>

      <base-demo v-if="currentTab === 'base'" />
      <err-tip-demo v-if="currentTab === 'error-tip'" />
      <view
        v-if="currentTab === 'pull-refresh'"
        class="pull-refresh-wrap"
      >
        <pull-refresh-demo />
      </view>
    </view>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';

import BaseDemo from './base/index.vue';
import ErrTipDemo from './err-tip/index.vue';
import PullRefreshDemo from './pull-refresh/index.vue';

export default {
  components: {
    TButton,
    BaseDemo,
    ErrTipDemo,
    PullRefreshDemo,
  },
  data() {
    return {
      currentTab: 'info',
    };
  },
  methods: {
    onChangeTab(value) {
      this.currentTab = value;
    },
  },
};
</script>

<style lang="less">
@import './list.less';
</style>
