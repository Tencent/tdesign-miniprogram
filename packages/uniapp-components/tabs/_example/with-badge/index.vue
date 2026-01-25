<template>
  <view>
    <t-tabs :default-value="0">
      <t-tab-panel
        label="选项"
        value="0"
        :badge-props="{ dot: true, offset: [0, 1] }"
      />
      <t-tab-panel
        label="选项"
        value="1"
        :badge-props="{ count: 8, offset: [0, 1] }"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
    </t-tabs>
  </view>
</template>

<script>
import TTabs from 'tdesign-uniapp/tabs/tabs.vue';
import TTabPanel from 'tdesign-uniapp/tab-panel/tab-panel.vue';
export default {
  components: {
    TTabs,
    TTabPanel,
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
