<template>
  <view class="demo-closable">
    <t-tag
      v-if="show[0]"
      :custom-style="mr16"
      closable
      variant="light"
      @close="handleClose0"
    >
      文字标签
    </t-tag>
    <t-tag
      v-if="show[1]"
      :custom-style="mr16"
      closable
      variant="outline"
      @close="handleClose1"
    >
      文字标签
    </t-tag>
  </view>
</template>

<script>
import TTag from 'tdesign-uniapp/tag/tag.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TTag,
  },
  data() {
    return {
      show: [true, true],
      mr16: 'margin-right: 16px;',
    };
  },
  created() {},
  methods: {
    handleClose0() {
      this.show[0] = false;
    },
    handleClose1() {
      this.show[1] = false;
    },
  },
};
</script>
<style>
.demo-closable {
    margin-left: 32rpx;
}
</style>
