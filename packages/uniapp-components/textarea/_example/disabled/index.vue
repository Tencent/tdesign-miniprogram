<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="请输入文字"
      value="不可编辑文字"
      :disable-default-padding="true"
      disabled
    />
  </view>
</template>

<script>
import TTextarea from 'tdesign-uniapp/textarea/textarea.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TTextarea,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
:deep(.external-class) {
    height: 256rpx;
}
</style>
