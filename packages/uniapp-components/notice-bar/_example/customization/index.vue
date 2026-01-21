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
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar.vue';
import tLink from 'tdesign-uniapp/link/link.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
export default {
  components: {
    tNoticeBar,
    tLink,
    tIcon,
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
