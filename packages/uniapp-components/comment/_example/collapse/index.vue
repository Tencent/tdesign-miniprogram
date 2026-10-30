<template>
  <view class="mobile-comment">
    <t-comment
      :avatar="{ shape: 'circle', size: '32px', image: avatar }"
      :folds="commentFold"
      content="这是一段很长很长很长很长很长很长的评论内容。"
      datetime="今天16:38·广东"
      @folds="handleUpdateFold"
    >
      <template #author>
        <view class="mobile-comment__author">
          <text>{{ mainCommentAuthor }}</text>
          <t-tag class="mobile-comment__author-tag" variant="light" theme="primary" shape="round">作者</t-tag>
        </view>
      </template>
      <template #actions>
        <view class="mobile-comment__actions-wrap">
          <view class="mobile-comment__reply-button" @click="handleReply(mainCommentAuthor)">回复</view>
          <view class="mobile-comment__actions">
            <t-button
              class="mobile-comment__actions-button"
              variant="text"
              :icon="thumbUpIcon"
              :custom-style="actionBtnStyle"
            >6</t-button>
            <t-button
              class="mobile-comment__actions-button"
              variant="text"
              :icon="uncomfortableIcon"
              :custom-style="actionBtnStyle"
            />
          </view>
        </view>
      </template>
      <!-- 回复列表 -->
      <template #reply>
        <t-comment
          v-for="(item, index) in visibleItems"
          :key="`${item.author}-${index}`"
          :avatar="{ shape: 'circle', size: '20px', image: item.avatar }"
        >
          <template #author>
            <view class="mobile-comment__author">
              <text>{{ item.author }}</text>
            </view>
          </template>
          <template #content>
            <text v-if="item.replyTo">
              回复<text class="mobile-comment__reply-name">{{ item.replyTo }}</text
              >：{{ item.content }}
            </text>
            <text v-else>{{ item.content }}</text>
          </template>
          <template #datetime>{{ item.datetime }}</template>
          <template #actions>
            <view class="mobile-comment__actions-wrap">
              <view class="mobile-comment__reply-button" @click="handleReply(item.author)">回复</view>
              <view class="mobile-comment__actions">
                <t-button
                  class="mobile-comment__actions-button"
                  variant="text"
                  :icon="thumbUpIcon"
                  :custom-style="actionBtnStyle"
                >{{ item.likeNum || '' }}</t-button>
                <t-button
                  class="mobile-comment__actions-button"
                  variant="text"
                  :icon="uncomfortableIcon"
                  :custom-style="actionBtnStyle"
                />
              </view>
            </view>
          </template>
        </t-comment>
      </template>
    </t-comment>
  </view>
</template>

<script>
import TComment from '@tdesign/uniapp/comment/comment.vue';
import TTag from '@tdesign/uniapp/tag/tag.vue';
import TButton from '@tdesign/uniapp/button/button.vue';

const REPLY_COUNT = 6;

export default {
  components: {
    TComment,
    TTag,
    TButton,
  },
  data() {
    return {
      avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      mainCommentAuthor: 'Name1 名称',
      thumbUpIcon: { name: 'thumb-up', size: '14px', color: 'var(--td-text-color-placeholder)' },
      uncomfortableIcon: { name: 'uncomfortable-1', size: '14px', color: 'var(--td-text-color-placeholder)' },
      actionBtnStyle:
        'height:48rpx;padding:2px 4rpx;color:var(--td-text-color-placeholder);font:var(--td-font-body-small);',
      commentFold: {
        state: 'collapsed',
        total: REPLY_COUNT,
        step: 3,
        content: {
          collapsed: `展开${REPLY_COUNT - 1}条回复`,
          partial: ['展开更多回复', '收起'],
          expanded: '收起',
        },
      },
      replyInfo: new Array(REPLY_COUNT).fill({}).map((_, index) => ({
        author: `Name${index + 1} 名称`,
        avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        content: '这是一段很长很长很长很长很长很长的评论内容。',
        datetime: '今天16:38·广东',
        likeNum: 6,
      })),
    };
  },
  computed: {
    visibleItems() {
      if (this.commentFold.state === 'collapsed') {
        return this.replyInfo.slice(0, 1);
      }
      if (this.commentFold.state === 'partial') {
        return this.replyInfo.slice(0, 3);
      }
      return this.replyInfo;
    },
  },
  methods: {
    handleUpdateFold(context) {
      this.commentFold = context.fold;
    },
    handleReply(authorName) {
      uni.showToast({ title: `回复：${authorName}`, icon: 'none' });
    },
  },
};
</script>

<style lang="less">
.mobile-comment {
  // 禁用按钮点击态样式
  --td-button-default-text-active-bg-color: transparent;
  --td-button-default-active-border-color: transparent;

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

  &__actions-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }

  &__reply {
    &-button {
      color: var(--td-text-color-secondary);
      font: var(--td-font-body-small);
    }

    &-name {
      color: var(--td-text-color-secondary);
      font: var(--td-font-body-medium);
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--td-spacer-2);

    &-button {
      padding: 2px calc(var(--td-spacer) / 4);
      color: var(--td-text-color-placeholder);
      font: var(--td-font-body-small);
      box-sizing: border-box;
      height: var(--td-spacer-3);
    }
  }
}
</style>
