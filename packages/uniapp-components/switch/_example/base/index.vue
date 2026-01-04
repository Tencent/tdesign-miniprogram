<template>
  <view>
    <t-cell
      title="基础开关"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tSwitch from 'tdesign-uniapp/switch/switch.vue';
export default {
  components: {
    tCell,
    tSwitch,
  },
  data() {
    return {
      defaultVal: true,
    };
  },
  created() {},
  methods: {
  },
};
</script>
<style>
</style>
