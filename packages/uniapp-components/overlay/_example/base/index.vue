<template>
  <view>
    <t-overlay
      :visible="visible"
      :duration="500"
      @click="handleOverlayClick"
    />

    <t-button
      block
      size="large"
      theme="primary"
      variant="outline"
      @click="handleClick"
    >
      基础用法
    </t-button>
  </view>
</template>

<script>
import tOverlay from 'tdesign-uniapp/overlay/overlay.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    tOverlay,
    tButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  methods: {
    handleClick() {
      this.visible = true;
    },
    handleOverlayClick() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style>
/* @import './index.css'; */
</style>
