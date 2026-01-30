<template>
  <view :class="chatItemClass" :style="_._style([customStyle])" @longpress="handleLongPress">
    <view v-if="avatar" :class="classPrefix + '__avatar'">
      <block v-if="avatar">
        <image :src="avatar" :class="classPrefix + '__avatar-image'" />
      </block>
    </view>
    <view :class="contentClasses">
      <view v-if="name || datetime" :class="classPrefix + '__base'">
        <text v-if="name" :class="classPrefix + '__name'">
          {{ name }}
        </text>
        <text v-if="datetime" :class="classPrefix + '__time'">
          {{ datetime }}
        </text>
      </view>
      <block v-if="status === 'pending'">
        <view style="width: 100%">
          <chat-loading :animation="animation" />
        </view>
      </block>
      <block v-else>
        <view :class="classPrefix + '__detail'">
          <!-- 属性传值优先级高于content插槽 -->
          <block v-if="content && content.length > 0">
            <block v-for="(item, index) in content" :key="index">
              <attachments
                v-if="item.type === 'attachment' && role === 'user'"
                :items="item.data"
                :removable="false"
                :in-chat="true"
              />

              <chat-thinking
                v-if="item.type === 'thinking'"
                :content="item.data"
                :role="role"
                :status="['complete', 'stop', 'error', 'pending'].indexOf(status) < 0 ? 'pending' : status"
              />

              <chat-content
                v-else-if="item.type === 'text' || item.type === 'markdown'"
                :content="item"
                :role="role"
                :status="status === 'error' ? 'error' : ''"
              />
            </block>
          </block>
          <block v-else>
            <slot name="content" />
          </block>
        </view>
      </block>
      <view v-if="role === 'assistant'" :class="classPrefix + '__actionbar'">
        <slot name="actionbar" />
      </view>
    </view>
  </view>
</template>
<script>
import chatContent from '../chat-content/chat-content.vue';
import chatThinking from '../chat-thinking/chat-thinking.vue';
import chatLoading from '../chat-loading/chat-loading.vue';
import attachments from '../attachments/attachments.vue';

import props from './props';
import { prefix } from '@tdesign/uniapp/common/config';
import _ from '@tdesign/uniapp/common/utils.wxs';
import { uniComponent } from '@tdesign/uniapp/common/src/index';

const name = `${prefix}-chat-message`;

export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    chatContent,
    chatThinking,
    chatLoading,
    attachments,
  },

  props: {
    ...props,
  },

  data() {
    return {
      classPrefix: name,
      article: '',
      contentClasses: [],
      chatItemClass: [],

      _,
    };
  },

  watch: {
    classPrefix() {
      this.setContentClasses();
      this.setChatItemClass();
    },
    variant: {
      handler() {
        this.setChatItemClass();
      },
    },
    placement: {
      handler() {
        this.setChatItemClass();
      },
    },
  },

  mounted() {
    this.setContentClasses();
    this.setChatItemClass();
  },

  methods: {
    handleLongPress(e) {
      this.$emit('message-longpress', {
        e,
        id: this.chatId,
        longPressPosition: {
          x: e.detail.x,
          y: e.detail.y,
        },
      });
    },

    setContentClasses() {
      this.contentClasses = [`${this.classPrefix}__content`];
    },

    setChatItemClass() {
      const { classPrefix, datetime } = this;
      const { variant, role, placement } = this;
      const baseClass = [`${classPrefix}`, `${classPrefix}--${variant}`, role, placement];
      if (datetime) {
        baseClass.push(`${classPrefix}__header`);
      }
      this.chatItemClass = baseClass;
    },
  },
});
</script>
<style scoped>
@import './chat-message.css';
</style>
