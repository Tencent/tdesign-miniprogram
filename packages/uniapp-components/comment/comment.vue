<template>
  <view :style="'' + tools._style([customStyle])" :class="[classPrefix, tClass]">
    <view :class="classPrefix + '__inner'">
      <view v-if="avatarIsObject" :class="classPrefix + '__avatar'">
        <t-avatar v-bind="avatar" />
      </view>
      <view v-else-if="avatar" :class="classPrefix + '__avatar'">
        <t-avatar :image="avatar" shape="circle" size="32px" />
      </view>
      <view v-else-if="$slots.avatar" :class="classPrefix + '__avatar'">
        <slot name="avatar" />
      </view>

      <view :class="classPrefix + '__detail'">
        <view :class="classPrefix + '__author'">
          <block v-if="author">{{ author }}</block>
          <slot v-else name="author" />
        </view>
        <view :class="classPrefix + '__content'">
          <block v-if="content">{{ content }}</block>
          <slot v-else name="content" />
        </view>
        <view :class="classPrefix + '__bottom'">
          <view :class="classPrefix + '__date'">
            <block v-if="datetime">{{ datetime }}</block>
            <slot v-else name="datetime" />
          </view>
          <view :class="classPrefix + '__actions'">
            <slot name="actions" />
          </view>
        </view>
      </view>
    </view>

    <view v-if="$slots.reply || showFolds" :class="classPrefix + '__reply'">
      <view :id="replyBodyId" :class="classPrefix + '__reply-body'" :style="replyBodyStyle">
        <view :id="replyInnerId" :class="classPrefix + '__reply-inner'">
          <slot name="reply" />
        </view>
      </view>
      <view v-if="showFolds" :class="classPrefix + '__folds'">
        <block v-if="curFoldsState === 'collapsed'">
          <view :class="classPrefix + '__folds-item'" @click="onClickFold(true)">
            {{ foldsContent.collapsed }}
            <t-icon name="chevron-down-s" size="16px" />
          </view>
        </block>
        <block v-else-if="curFoldsState === 'partial'">
          <view :class="classPrefix + '__folds-item'" @click="onClickFold(true)">
            {{ foldsContent.partial && foldsContent.partial[0] }}
            <t-icon name="chevron-down-s" size="16px" />
          </view>
          <view :class="classPrefix + '__folds-item'" @click="onClickFold(false)">
            {{ foldsContent.partial && foldsContent.partial[1] }}
            <t-icon name="chevron-up-s" size="16px" />
          </view>
        </block>
        <block v-else>
          <view :class="classPrefix + '__folds-item'" @click="onClickFold(false)">
            {{ foldsContent.expanded }}
            <t-icon name="chevron-up-s" size="16px" />
          </view>
        </block>
      </view>
    </view>
  </view>
</template>

<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import tools from '../common/utils.wxs';
import TAvatar from '../avatar/avatar';
import TIcon from '../icon/icon';

import props from './props';

const name = `${prefix}-comment`;

const DEFAULT_FOLDS = {
  state: 'collapsed',
  total: 0,
  step: 3,
  content: {
    collapsed: '展开回复',
    partial: ['展开更多回复', '收起'],
    expanded: '收起',
  },
};

let uid = 0;

export default {
  components: {
    TAvatar,
    TIcon,
  },
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`],
    props: {
      ...props,
    },
    data() {
      const id = `comment-${Date.now()}-${uid++}`;
      return {
        prefix,
        classPrefix: name,
        tools,

        replyBodyId: `${id}-body`,
        replyInnerId: `${id}-inner`,
        replyBodyStyle: '',

        innerFoldsState: 'collapsed',
        foldSteps: 0,
        observer: null,
      };
    },
    computed: {
      avatarIsObject() {
        return this.avatar && typeof this.avatar === 'object';
      },
      isControlled() {
        return this.folds !== undefined && this.folds !== null;
      },
      commentFolds() {
        return this.folds || this.defaultFolds || DEFAULT_FOLDS;
      },
      curFoldsState() {
        if (this.isControlled) {
          return this.folds.state || 'collapsed';
        }
        return this.innerFoldsState;
      },
      showFolds() {
        const total = this.commentFolds.total || 0;
        return total > 1;
      },
      foldsContent() {
        return this.commentFolds.content || DEFAULT_FOLDS.content;
      },
    },
    watch: {
      'folds.state': {
        handler(state) {
          if (!this.isControlled) return;
          if (state === 'collapsed') {
            this.foldSteps = 0;
          } else if (state === 'expanded') {
            this.foldSteps = (this.commentFolds.step || 3) - 1;
          }
        },
        immediate: true,
      },
    },
    mounted() {
      this.initObserver();
    },
    beforeUnmount() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
    // #ifdef VUE2
    beforeDestroy() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
    // #endif
    methods: {
      // 计算回复区内容高度，驱动过渡动画
      updateReplyHeight() {
        const innerId = `#${this.replyInnerId}`;
        uni
          .createSelectorQuery()
          .in(this)
          .select(innerId)
          .boundingClientRect()
          .exec((res) => {
            const rect = res && res[0];
            if (rect) {
              this.replyBodyStyle = `height:${rect.height}px;transition:height ease 240ms;`;
            }
          });
      },
      // 监听回复区内容高度变化，驱动过渡动画
      initObserver() {
        const innerId = `#${this.replyInnerId}`;

        this.$nextTick(() => this.updateReplyHeight());

        // H5 端支持 ResizeObserver，监听内容高度变化
        // #ifdef H5
        if (typeof ResizeObserver !== 'undefined') {
          this.observer = new ResizeObserver(() => {
            this.updateReplyHeight();
          });
          this.$nextTick(() => {
            const innerNode = document.querySelector(innerId);
            if (innerNode) {
              this.observer.observe(innerNode);
            }
          });
        }
        // #endif
      },
      onClickFold(isExpand) {
        if (!isExpand) {
          // 收起
          this.foldSteps = 0;
          if (!this.isControlled) {
            this.innerFoldsState = 'collapsed';
          }
          this.$emit('folds', { fold: { ...this.commentFolds, state: 'collapsed' } });
          this.$emit('change', { ...this.commentFolds, state: 'collapsed' });
        } else {
          // 展开
          this.foldSteps += 1;
          const nextState = this.foldSteps >= (this.commentFolds.step || 3) - 1 ? 'expanded' : 'partial';
          if (!this.isControlled) {
            this.innerFoldsState = nextState;
          }
          this.$emit('folds', { fold: { ...this.commentFolds, state: nextState } });
          this.$emit('change', { ...this.commentFolds, state: nextState });
        }
        this.$nextTick(() => this.updateReplyHeight());
      },
    },
  }),
};
</script>
<style scoped src="./comment.css"></style>
