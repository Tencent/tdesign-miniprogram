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
