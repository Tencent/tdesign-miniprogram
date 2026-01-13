<template>
  <view>
    <t-cell title="带文字开关">
      <template
        #note
      >
        <t-switch
          :value="defaultVal"
          :label="['开', '关']"
          @change="handleChange"
        />
      </template>
    </t-cell>

    <t-cell
      title="带图标开关"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
          :icon="['check', 'close']"
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
    handleChange(e) {
      this.defaultVal = e.value;
    },
  },
};
</script>
<style>
</style>
