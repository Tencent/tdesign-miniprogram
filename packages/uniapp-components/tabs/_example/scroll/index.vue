<template>
  <view>
    <t-tabs
      :default-value="0"
      :space-evenly="false"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        v-for="(item, index) in 8"
        :key="index"
        label="选项"
        :value="index"
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
</style>
