<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="ChatList"
    />
    <view class="demo">
      <!-- 通过 isActive 为 chatSender 的 value 赋值，避免 textarea 在 ios 上无法被遮挡的问题 -->
      <t-tabs
        :space-evenly="false"
        :swipeable="false"
        :value="value"
        @change="onTabsChange"
      >
        <t-tab-panel
          label="基础使用"
          :value="0"
        >
          <base-demo />
        </t-tab-panel>
        <t-tab-panel
          label="组合式用法"
          :value="1"
        >
          <hook-component :is-active="value === 1" />
        </t-tab-panel>
        <!-- <t-tab-panel
          label="自定义"
          :value="2"
        >
          <custom :is-active="value === 2" />
        </t-tab-panel> -->
        <!-- 本次迭代先不上 -->
        <!-- <t-tab-panel label="代码助手" value="{{3}}">
      <codeDemo />
    </t-tab-panel> -->
        <t-tab-panel
          label="文案助手"
          :value="4"
        >
          <docs-demo :is-active="value === 4" />
        </t-tab-panel>
        <t-tab-panel
          label="图像生成"
          :value="5"
        >
          <image-demo :is-active="value === 5" />
        </t-tab-panel>
        <t-tab-panel
          label="任务规划"
          :value="6"
        >
          <agent-demo :is-active="value === 6" />
        </t-tab-panel>
      </t-tabs>
    </view>
  </view>
</template>

<script>
import tTabs from '@tdesign/uniapp/tabs/tabs.vue';
import tTabPanel from '@tdesign/uniapp/tab-panel/tab-panel.vue';
import BaseDemo from './base/index.vue';
import HookComponent from './hook-component/index.vue';
import DocsDemo from './docs/index.vue';
import ImageDemo from './image/index.vue';
import AgentDemo from './agent/index.vue';

export default {
  components: {
    tTabs,
    tTabPanel,
    BaseDemo,
    HookComponent,
    DocsDemo,
    ImageDemo,
    AgentDemo,
  },
  data() {
    return {
      value: 0,
    };
  },
  options: {
    styleIsolation: 'shared',
  },
  methods: {
    onTabsChange(event) {
      this.value = event.value;
    },
  },
};
</script>
<style lang="less">
@import './chat-list.less';
</style>
