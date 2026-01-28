<template>
  <view>
    <t-tabs
      :value="value"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        :label="value == '0' ? '选中' : '默认'"
        value="0"
      />
      <t-tab-panel
        :label="value == '1' ? '选中' : '默认'"
        value="1"
      />
      <t-tab-panel
        label="禁用"
        value="2"
        disabled
      />
    </t-tabs>
  </view>
</template>

<script>
import TTabs from '@tdesign/uniapp/tabs/tabs.vue';
import TTabPanel from '@tdesign/uniapp/tab-panel/tab-panel.vue';
export default {
  components: {
    TTabs,
    TTabPanel,
  },
  data() {
    return {
      value: '0',
    };
  },
  created() {},
  methods: {
    onTabsChange(event) {
      this.value = event.value;
      console.log(`Change tab, tab-panel value is ${event.value}.`);
    },
    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.value}.`);
    },
  },
};
</script>
<style>
</style>
