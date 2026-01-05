<template>
  <view>
    <t-tabs
      :default-value="0"
      theme="tag"
    >
      <t-tab-panel
        v-for="(item, index) in 4"
        :key="index"
        label="选项"
        :value="index"
      />
    </t-tabs>

    <view style="height: 16px" />

    <t-tabs
      :default-value="0"
      theme="card"
    >
      <t-tab-panel
        v-for="(item, index) in 4"
        :key="index"
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
