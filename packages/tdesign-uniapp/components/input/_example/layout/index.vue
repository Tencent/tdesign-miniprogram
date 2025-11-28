<template>
  <view>
    <t-input
      label="标签文字"
      layout="vertical"
      placeholder="请输入文字"
      :suffix-icon="{ name: 'info-circle-filled', ariaLabel: '提示' }"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
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
