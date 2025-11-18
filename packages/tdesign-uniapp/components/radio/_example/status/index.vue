<template>
  <view>
    <t-radio-group
      default-value="radio1"
      :disabled="true"
    >
      <t-radio
        value="radio1"
        label="单选"
      />
      <t-radio
        value="radio2"
        label="单选"
      />
    </t-radio-group>
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group.vue';
import tRadio from 'tdesign-uniapp/radio/radio.vue';
export default {
  components: {
    tRadioGroup,
    tRadio,
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
