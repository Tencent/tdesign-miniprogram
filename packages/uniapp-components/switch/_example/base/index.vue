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
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TSwitch from '@tdesign/uniapp/switch/switch.vue';
export default {
  components: {
    TCell,
    TSwitch,
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
