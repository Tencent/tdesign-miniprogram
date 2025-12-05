<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="设置最大字符个数，一个汉字表示两个字符"
      :maxcharacter="200"
      :disable-default-padding="true"
      indicator
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
    height: 324rpx;
}
</style>
