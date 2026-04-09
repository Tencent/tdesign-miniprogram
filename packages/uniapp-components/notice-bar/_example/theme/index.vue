<template>
  <view>
    <t-notice-bar
      :visible="true"
      content="默认状态公告栏默认状态公告栏"
    />
    <t-notice-bar
      :visible="true"
      theme="success"
      content="成功状态公告栏成功状态公告栏"
    />
    <t-notice-bar
      :visible="true"
      theme="warning"
      content="警示状态公告栏警示状态公告栏"
    />
    <t-notice-bar
      :visible="true"
      theme="error"
      content="错误状态公告栏错误状态公告栏"
    />
  </view>
</template>

<script>
import TNoticeBar from '@tdesign/uniapp/notice-bar/notice-bar.vue';
export default {
  components: {
    TNoticeBar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
