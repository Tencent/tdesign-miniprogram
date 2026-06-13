<template>
  <view>
    <view class="typography-example typography-example--border">
      <t-paragraph
        ellipsis
        :content="content"
      />
    </view>

    <view class="typography-example typography-example--border">
      <t-paragraph
        :ellipsis="ellipsisExpandable"
        :content="content"
      />
    </view>

    <view class="typography-example">
      <t-paragraph
        :ellipsis="ellipsisCustomSuffix"
        :content="content"
      >
        <template #suffix>
          <t-icon
            name="chevron-down"
          />
        </template>
      </t-paragraph>
    </view>
  </view>
</template>

<script>
import TIcon from '@tdesign/uniapp/icon/icon.vue';
import TParagraph from '@tdesign/uniapp/paragraph/paragraph.vue';
export default {
  components: {
    TParagraph,
    TIcon,
  },
  data() {
    return {
      content: 'TDesign 秉承开放的设计理念从创立之初就采用开源协作的方式进行设计和开发。协作方案讨论、组件设计以及 API 设计，包括源代码在内均在公司内部完全开放，赢得了内部开发者和设计师的广泛关注。TDesign 遵循平等、开放、严格的原则，不论参与者的角色如何。',
      ellipsisExpandable: {
        row: 2,
        expandable: true,
        collapsible: true,
      },
      ellipsisCustomSuffix: {
        row: 1,
        expandable: true,
        collapsible: false,
        suffix: true,
      },
    };
  },
};
</script>

<style lang="less">
@import '../paragraph.less';
</style>
