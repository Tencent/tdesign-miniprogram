<template>
  <view>
    <t-cell title="大尺寸 32">
      <template
        #note
      >
        <t-switch
          :default-value="true"
          size="large"
        />
      </template>
    </t-cell>
    <t-cell title="中尺寸 28">
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <t-cell
      title="小尺寸 24"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
          size="small"
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
