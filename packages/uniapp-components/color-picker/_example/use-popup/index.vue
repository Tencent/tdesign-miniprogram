<template>
  <view>
    <t-color-picker
      v-model:visible="visible"
      use-popup
      enable-alpha
      type="multiple"
      @change="onChange"
      @palette-bar-change="onPaletteBarChange"
    />

    <t-button
      block
      size="large"
      variant="outline"
      theme="primary"
      t-class="wrapper"
      @click="handlePopup"
    >
      弹窗形式的颜色选择器
    </t-button>
  </view>
</template>

<script>
import TColorPicker from '@tdesign/uniapp/color-picker/color-picker.vue';
import TButton from '@tdesign/uniapp/button/button.vue';

export default {
  components: {
    TColorPicker,
    TButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change', e);
    },
    handlePopup() {
      this.visible = true;
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e);
    },
  },
};
</script>
<style>
</style>
