<template>
  <view>
    <t-toast
      ref="t-toast"
    />
    <view class="box">
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showText"
      >
        纯文本
      </t-button>
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showMultiText"
      >
        多行文字
      </t-button>
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showHorizontalText"
      >
        带横向图标
      </t-button>
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showVerticalText"
      >
        带竖向图标
      </t-button>
      <t-button
        v-if="!skylineRender"
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showLoading"
      >
        加载状态
      </t-button>
    </view>
  </view>
</template>

<script>
import tToast from 'tdesign-uniapp/toast/toast.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';
import { default as Toast } from 'tdesign-uniapp/toast/index';
export default {
  components: {
    tToast,
    tButton,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
    };
  },
  created() {},
  methods: {
    showText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '轻提示文字内容',
      });
    },
    showMultiText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '最多一行展示十个汉字宽度限制最多不超过三行文字',
      });
    },
    showHorizontalText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '带横向图标',
        icon: 'check-circle',
      });
    },
    showVerticalText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '带竖向图标',
        icon: 'check-circle',
        direction: 'column',
      });
    },
    showLoading() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '加载中...',
        theme: 'loading',
        direction: 'column',
      });
    },
  },
};
</script>
<style>
</style>
