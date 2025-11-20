<template>
  <view>
    <t-input
      class="custom-class"
      label="标签文字"
      placeholder="请输入文字"
      value="已输入内容"
      status="error"
      tips="错误提示"
      :clearable="{ name: 'close', color: '#D54941', ariaLabel: '通讯录' }"
    />

    <t-input
      label="标签文字"
      value="不可编辑文字"
      disabled
      @click="onClick"
    />

    <t-input
      label="标签文字"
      value="只读模式"
      readonly
      @click="onClick"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onClick() {
      console.log('click input');
    },
  },
};
</script>
<style>
.custom-class {
    --td-input-align-items: start;
}
</style>
