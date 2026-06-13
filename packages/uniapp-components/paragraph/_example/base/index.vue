<template>
  <view>
    <view class="typography-example">
      <t-text content="TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系。" />
    </view>
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
