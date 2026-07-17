<template>
  <view>
    <t-demo-navbar class="demo-navbar" title="ChatRecord" left-arrow />
    <view class="demo">
      <t-tabs :space-evenly="false" :swipeable="false" :value="value" @change="onTabsChange">
        <t-tab-panel label="默认" :value="0">
          <base-demo />
        </t-tab-panel>
        <t-tab-panel label="自定义 Adapter" :value="1">
          <custom-demo />
        </t-tab-panel>
      </t-tabs>
    </view>
  </view>
</template>

<script>
import TTabPanel from '@tdesign/uniapp/tab-panel/tab-panel.vue';
import TTabs from '@tdesign/uniapp/tabs/tabs.vue';

import BaseDemo from './base/index.vue';
import CustomDemo from './custom-adapter/index.vue';

export default {
  components: {
    TTabs,
    TTabPanel,
    BaseDemo,
    CustomDemo,
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
@import './chat-record.less';
</style>
