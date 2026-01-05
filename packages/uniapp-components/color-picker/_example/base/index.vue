<template>
  <view>
    <t-color-picker @change="onChange" />
  </view>
</template>

<script>
import tColorPicker from 'tdesign-uniapp/color-picker/color-picker.vue';
export default {
  components: {
    tColorPicker,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onChange(...args) {
      console.log('change:', ...args);
    },
  },
};
</script>
<style>
</style>
