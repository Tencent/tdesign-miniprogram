<template>
  <view>
    <t-input
      class="custom-class"
      label="标签文字"
      placeholder="请输入文字"
      tips="最大输入10个字符"
      :maxlength="10"
    />
    <t-input
      class="custom-class"
      label="标签文字"
      placeholder="请输入文字"
      tips="最大输入10个字符，汉字算两个"
      :maxcharacter="10"
    />
  </view>
</template>

<script>
import TInput from '@tdesign/uniapp/input/input.vue';
export default {
  components: {
    TInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.custom-class {
    --td-input-align-items: start;
}
</style>
