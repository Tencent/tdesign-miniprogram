<template>
  <view>
    <view class="typography-example typography-example--border">
      <t-text copyable content="这是一段可复制的文本" />
    </view>

    <view class="typography-example">
      <t-text :copyable="copyableCustomSuffix" content="这是一段带自定义图标的可复制的文本">
        <template #suffix>
          <t-icon name="smile" color="#0052D9" />
        </template>
      </t-text>
    </view>
  </view>
</template>

<script>
import TIcon from '@tdesign/uniapp/icon/icon.vue';
import TText from '@tdesign/uniapp/text/text.vue';
export default {
  components: {
    TText,
    TIcon,
  },
  data() {
    return {
      copyableCustomSuffix: {
        suffix: true,
      },
    };
  },
};
</script>

<style lang="less">
@import '../paragraph.less';
</style>
