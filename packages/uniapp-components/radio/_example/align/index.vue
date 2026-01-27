<template>
  <view>
    <t-radio
      value="radio1"
      allow-uncheck
      label="单选"
      default-checked
      relation-key="-1"
    />

    <view class="block" />

    <t-radio
      value="radio2"
      allow-uncheck
      label="单选"
      placement="right"
      default-checked
      relation-key="-1"
    />
  </view>
</template>

<script>
import TRadio from 'tdesign-uniapp/radio/radio.vue';
export default {
  components: {
    TRadio,
  },
  /**
     * 组件的属性列表
     */
  props: {},
  data() {
    return {};
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    onChange(event) {
      console.log('radio', event);
    },
  },
};
</script>
<style>
.block {
    height: 32rpx;
}
</style>
