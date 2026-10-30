<template>
  <view class="mobile-comment">
    <t-comment
      :avatar="{ shape: 'circle', size: '32px', image: avatar }"
      datetime="今天16:38·广东"
    >
      <template #author>
        <view class="mobile-comment__author">
          <text>Name1 名称</text>
          <t-tag class="mobile-comment__author-tag" variant="light" theme="primary" shape="round">作者</t-tag>
        </view>
      </template>
      <template #content>
        <view class="mobile-comment__text">这是一段很长很长很长很长很长很长的评论内容。</view>
        <view class="mobile-comment__images">
          <view
            v-for="(src, index) in showImages"
            :key="index"
            class="mobile-comment__images-item"
            @click="handleImageClick(index)"
          >
            <t-image :src="src" fit="cover" shape="round" :custom-style="{ width: '78px', height: '78px' }" />
            <view v-if="index === maxShow - 1 && images.length > maxShow" class="mobile-comment__images-badge">
              共{{ images.length }}张
            </view>
          </view>
        </view>
      </template>
      <template #actions>
        <view class="mobile-comment__actions-wrap">
          <view class="mobile-comment__reply-button">回复</view>
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
    </t-comment>

    <t-image-viewer
      :images="images"
      :visible="visible"
      :initial-index="viewerIndex"
      @close="handleClose"
      @change="handleViewerChange"
    />
  </view>
</template>

<script>
import TComment from '@tdesign/uniapp/comment/comment.vue';
import TTag from '@tdesign/uniapp/tag/tag.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
import TImage from '@tdesign/uniapp/image/image.vue';
import TImageViewer from '@tdesign/uniapp/image-viewer/image-viewer.vue';

const images = [
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
];

export default {
  components: {
    TComment,
    TTag,
    TButton,
    TImage,
    TImageViewer,
  },
  data() {
    return {
      avatar: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      images,
      maxShow: 3,
      visible: false,
      viewerIndex: 0,
      thumbUpIcon: { name: 'thumb-up', size: '14px', color: 'var(--td-text-color-placeholder)' },
      uncomfortableIcon: { name: 'uncomfortable-1', size: '14px', color: 'var(--td-text-color-placeholder)' },
      actionBtnStyle:
        'height:48rpx;padding:2px 4rpx;color:var(--td-text-color-placeholder);font:var(--td-font-body-small);',
    };
  },
  computed: {
    showImages() {
      return this.images.slice(0, this.maxShow);
    },
  },
  methods: {
    handleImageClick(index) {
      this.viewerIndex = index;
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    handleViewerChange(e) {
      this.viewerIndex = e.index;
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

  &__text {
    margin-bottom: calc(var(--td-spacer) / 2);
  }

  &__images {
    display: flex;
    gap: var(--td-spacer);

    &-item {
      position: relative;
      width: 78px;
      height: 78px;
      border-radius: 8px;
      overflow: hidden;
      flex-shrink: 0;
    }

    &-badge {
      position: absolute;
      right: 4px;
      bottom: 4px;
      padding: 0 var(--td-spacer);
      background: var(--td-mask-active);
      color: var(--td-text-color-anti);
      font: var(--td-font-body-extraSmall);
      border-radius: 12px;
      white-space: nowrap;
    }
  }

  &__actions-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    width: 100%;
  }

  &__reply-button {
    color: var(--td-text-color-secondary);
    font: var(--td-font-body-small);
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
