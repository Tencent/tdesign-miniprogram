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

import tButton from 'tdesign-uniapp/button/button.vue';
import tTransition from 'tdesign-uniapp/transition/transition.vue';
export default {
  components: {
    tButton,
    tTransition,
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
