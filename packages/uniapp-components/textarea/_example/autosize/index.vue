<template>
  <view>
    <t-textarea
      label="标签文字"
      placeholder="请输入文字"
      :disable-default-padding="true"
      :autosize="autosize"
      @line-change="onLineChange"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea.vue';
export default {
  components: {
    tTextarea,
  },
  data() {
    return {
      autosize: {
        maxHeight: 120,
        minHeight: 20,
      },
    };
  },
  created() {},
  methods: {
    onLineChange(e) {
      console.log('lineCount: ', e);
    },
  },
};
</script>
<style>
</style>
