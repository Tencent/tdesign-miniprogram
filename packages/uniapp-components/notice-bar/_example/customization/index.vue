<template>
  <view>
    <!-- slot实现自定义content内容 -->
    <t-notice-bar :visible="true">
      <template
        #content
      >
        <view
          class="inline"
        >
          提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述
        </view>
      </template>
      <template
        #operation
      >
        <t-link
          content="详情"
          theme="primary"
          :underline="false"
          :navigator-props="navigatorProps"
        />
      </template>
      <template
        #suffix-icon
      >
        <t-icon
          name="close"
          size="44rpx"
        />
      </template>
    </t-notice-bar>
  </view>
</template>

<script>
import TNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar.vue';
import TLink from 'tdesign-uniapp/link/link.vue';
import TIcon from 'tdesign-uniapp/icon/icon.vue';
export default {
  components: {
    TNoticeBar,
    TLink,
    TIcon,
  },
  data() {
    return {
      navigatorProps: {
        url: '/pages/home/home',
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.inline {
    display: inline;
}
</style>
