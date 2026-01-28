<template>
  <view>
    <t-color-picker
      enable-alpha
      type="multiple"
      @change="onChange"
      @palette-bar-change="onPaletteBarChange"
    />
  </view>
</template>

<script>
import TColorPicker from '@tdesign/uniapp/color-picker/color-picker.vue';
export default {
  components: {
    TColorPicker,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change', e);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e);
    },
  },
};
</script>
<style>
</style>
