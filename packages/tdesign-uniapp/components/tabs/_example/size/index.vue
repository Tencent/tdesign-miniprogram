<template>
  <view>
    <t-tabs :default-value="0">
      <t-tab-panel
        label="小尺寸"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="选项"
        value="3"
      />
    </t-tabs>

    <view style="height: 16px" />

    <t-tabs
      class="bigger"
      :default-value="0"
    >
      <t-tab-panel
        label="大尺寸"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="选项"
        value="3"
      />
    </t-tabs>
  </view>
</template>

<script>
import tTabs from 'tdesign-uniapp/tabs/tabs.vue';
import tTabPanel from 'tdesign-uniapp/tab-panel/tab-panel.vue';
export default {
  components: {
    tTabs,
    tTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.value}.`);
    },
    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.value}.`);
    },
  },
};
</script>
<style>
.bigger {
    --td-tab-font-size: 32rpx;
}
</style>
