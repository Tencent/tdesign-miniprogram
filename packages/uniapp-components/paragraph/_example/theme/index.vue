<template>
  <view class="typography-example typography-example--theme">
    <t-text theme="primary" content="主色" />
    <t-text theme="success" content="成功" />
    <t-text theme="warning" content="警告" />
    <t-text theme="error" content="错误" />
    <t-text mark content="标记" />
  </view>
</template>

<script>
import TText from '@tdesign/uniapp/text/text.vue';
export default {
  components: {
    TText,
  },
};
</script>

<style lang="less">
@import '../paragraph.less';
</style>
