<template>
  <view>
    <t-color-picker @change="onChange" />
  </view>
</template>

<script>
import TColorPicker from 'tdesign-uniapp/color-picker/color-picker.vue';
export default {
  components: {
    TColorPicker,
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
