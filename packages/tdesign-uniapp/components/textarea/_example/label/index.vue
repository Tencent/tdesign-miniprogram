<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="请输入文字"
      :disable-default-padding="true"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
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
