<template>
  <view>
    <view class="typography-example typography-example--inline">
      <t-title content="What is TDesign" />
      <t-text
        mark
        content="TDesign is an enterprise-level design system accumulated by Tencent's various business teams."
      />
      <t-paragraph>
        <t-text strong>
          TDesign features a unified design values, consistent design language, and visual style, helping users form
          continuous and coherent perceptions of the experience.
        </t-text>
        Based on this, TDesign offers out-typography-of-the-box UI component libraries, design guidelines, and design
        assets, elegantly and efficiently freeing design and development from repetitive tasks. Simultaneously, it
        facilitates easy extension on top of TDesign, enabling a better alignment with business requirements.
      </t-paragraph>

      <t-title> Comprehensive </t-title>
      <t-paragraph>
        TDesign Support
        <t-text code> Vue 2 </t-text>, <t-text code> Vue 3 </t-text>,
        <t-text code> React </t-text>
        components for Desktop Application and
        <t-text code> Vue 3 </t-text>,
        <t-text code> Wechat MiniProgram </t-text>
        components for Mobile Application.
      </t-paragraph>
      <t-paragraph>
        <view>• Features</view>
        <view>• Comprehensive</view>
        <view style="padding-left: 24rpx"> • Consistency </view>
        <view style="padding-left: 24rpx"> • Usability </view>
        <view>• Join TDesign</view>
      </t-paragraph>
      <t-paragraph>
        <view>1. Features</view>
        <view>2. Comprehensive</view>
        <view style="padding-left: 24rpx"> 1. Consistency </view>
        <view style="padding-left: 24rpx"> 2. Usability </view>
        <view>3. Join TDesign</view>
      </t-paragraph>
    </view>
  </view>
</template>

<script>
import TParagraph from '@tdesign/uniapp/paragraph/paragraph.vue';
import TText from '@tdesign/uniapp/text/text.vue';
import TTitle from '@tdesign/uniapp/title/title.vue';
export default {
  components: {
    TText,
    TTitle,
    TParagraph,
  },
};
</script>

<style lang="less">
@import '../paragraph.less';
</style>
