<template>
  <view>
    <t-textarea
      t-class="external-class"
      placeholder="请输入文字"
      :disable-default-padding="true"
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
