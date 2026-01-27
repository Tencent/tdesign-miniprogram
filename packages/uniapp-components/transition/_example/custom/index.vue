<template>
  <view>
    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="onTriggerClick"
    >
      Toggle
    </t-button>

    <t-transition
      name="translate"
      :visible="visible"
    >
      <view class="block" />
    </t-transition>
  </view>
</template>

<script>

import TButton from 'tdesign-uniapp/button/button.vue';
import TTransition from 'tdesign-uniapp/transition/transition.vue';
export default {
  components: {
    TButton,
    TTransition,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  methods: {
    onTriggerClick() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style lang="less">
@import './index.less';
</style>
