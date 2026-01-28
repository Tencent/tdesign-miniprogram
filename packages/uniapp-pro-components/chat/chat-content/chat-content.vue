<template>
  <view
    :class="classPrefix"
    :style="_._style([customStyle])"
  >
    <block v-if="status === 'error' || content.type === 'text'">
      <view :class="classPrefix + '__' + role + ' ' + classPrefix + '__' + status">
        <view class="_pre">
          <rich-text :nodes="textInfo" />
        </view>
      </view>
    </block>
    <block v-else>
      <view :class="classPrefix + '__assistant'">
        <TChatMarkdown
          :content="textInfo"
          :options="markdownProps && markdownProps.options"
          @click="onClick"
        />
      </view>
    </block>
  </view>
</template>
<script>
import TChatMarkdown from '../chat-markdown/chat-markdown.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';
import _ from '@tdesign/uniapp/common/utils.wxs';
import { uniComponent } from '@tdesign/uniapp/common/src/index';

const name = `${prefix}-chat-content`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    TChatMarkdown,
  },

  props: {
    ...props,
  },

  emits: [
    'click',
  ],

  data() {
    return {
      classPrefix: name,
      textInfo: '',
      _,
    };
  },

  watch: {
    content: {
      handler() {
        this.setTextInfo();
      },
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    this.setTextInfo();
  },

  methods: {
    getEscapeReplacement(ch) {
      const escapeReplacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;',
      };
      return escapeReplacements[ch];
    },
    escape(html, encode = false) {
      const escapeTest = /[&<>"']/;
      const escapeReplace = new RegExp(escapeTest.source, 'g');
      const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
      const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
      if (encode) {
        if (escapeTest.test(html)) {
          return html.replace(escapeReplace, this.getEscapeReplacement);
        }
      } else if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, this.getEscapeReplacement);
      }
      return html;
    },

    setTextInfo() {
      // error 状态下统一按纯文本处理，避免走 markdown 渲染
      if (this.content.type === 'text' || this.status === 'error') {
        this.textInfo = this.escape(this.content.data || '');
      } else {
        this.textInfo = this.content.data;
      }
    },

    onClick(e) {
      this.$emit('click', e);
    },
  },
});

</script>
<style scoped>
@import './chat-content.css';
</style>
