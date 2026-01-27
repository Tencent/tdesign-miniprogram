<template>
  <view>
    <t-fab
      icon="gesture-press"
      text="拖我"
      aria-label="增加"
      :using-custom-navbar="!isMPAlipay"
      draggable
      :y-bounds="[0, 32]"
      @click="handleClick"
      @drag-start="handleDragStart"
      @drag-end="handleDragEnd"
    />
  </view>
</template>

<script>
import TFab from 'tdesign-uniapp/fab/fab.vue';
export default {
  components: {
    TFab,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log('handleClick: ', e);
    },
    handleDragStart(e) {
      console.log('handleDragStart: ', e);
    },
    handleDragEnd(e) {
      console.log('handleDragEnd: ', e);
    },
  },
};
</script>
<style>
</style>
