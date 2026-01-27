<template>
  <view>
    <t-radio
      :default-checked="true"
      allow-uncheck
      icon="line"
      label="单选"
      relation-key="-1"
    />

    <view
      class="gutter"
      style="height: 32rpx"
      relation-key="-1"
    />

    <t-radio
      :default-checked="true"
      allow-uncheck
      icon="dot"
      label="单选"
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
  methods: {},
};
</script>
<style>
</style>
