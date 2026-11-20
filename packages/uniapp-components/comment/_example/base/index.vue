<template>
  <view class="mobile-comment">
    <t-comment
      :avatar="{ shape: 'circle', size: '32px', image: avatar }"
      content="这是一段很长很长很长很长很长很长的评论内容。"
      datetime="今天16:38·广东"
      :actions="actions"
      @actions="handleActions"
    >
      <template #author>
        <view class="mobile-comment__author">
          <text>Name1 名称</text>
          <t-tag class="mobile-comment__author-tag" variant="light" theme="primary" shape="round">作者</t-tag>
        </view>
      </template>
    </t-comment>
  </view>
</template>

<script>
import TComment from '@tdesign/uniapp/comment/comment.vue';
import TTag from '@tdesign/uniapp/tag/tag.vue';

export default {
  components: {
    TComment,
    TTag,
  },
  data() {
    return {
      avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      actions: [
        { key: 'reply', content: '回复', placement: 'start' },
        { key: 'like', content: '6', icon: 'thumb-up', placement: 'end' },
        { key: 'dislike', icon: 'uncomfortable-1', placement: 'end' },
      ],
    };
  },
  methods: {
    handleActions(context) {
      uni.showToast({ title: `操作：${context.action.key}`, icon: 'none' });
    },
  },
};
</script>

<style lang="less">
.mobile-comment {
  &__author {
    display: flex;
    align-items: center;
    font: var(--td-font-body-small);

    &-tag {
      border: none;
      --td-tag-medium-padding: 0 var(--td-spacer);
      --td-tag-primary-light-color: transparent;
    }
  }
}
</style>
