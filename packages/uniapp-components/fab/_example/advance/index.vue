<template>
  <view>
    <t-fab
      icon="add"
      :button-props="fabButton"
      text="分享给朋友"
      @click="handleClick"
    />
  </view>
</template>

<script>
import TFab from '@tdesign/uniapp/fab/fab.vue';
export default {
  components: {
    TFab,
  },
  data() {
    return {
      fabButton: {
        icon: 'share',
        openType: 'share',
      },
    };
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>
<style>
/* @import './index.css'; */
</style>
