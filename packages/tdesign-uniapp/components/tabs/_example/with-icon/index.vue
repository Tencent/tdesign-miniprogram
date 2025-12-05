<template>
  <view>
    <t-tabs :default-value="0">
      <t-tab-panel
        v-for="(item, index) in 3"
        :key="index"
        icon="app"
        label="选项"
        :value="index"
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
  methods: {},
};
</script>
<style>
</style>
