<template>
  <view>
    <t-notice-bar
      :visible="true"
      :prefix-icon="false"
    >
      <template #content>
        这是一条普通的通知信息
      </template>
    </t-notice-bar>
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
