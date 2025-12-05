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
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar.vue';
export default {
  components: {
    tNoticeBar,
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
