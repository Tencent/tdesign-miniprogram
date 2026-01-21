<template>
  <view>
    <t-notice-bar
      :visible="visible"
      :prefix-icon="false"
      content="提示文字描述提示文字描述提示文字描述"
    >
      <template
        #prefix-icon
      >
        <view>
          <t-icon name="error-circle-filled" />
        </view>
      </template>
    </t-notice-bar>
  </view>
</template>

<script>
import tNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
export default {
  components: {
    tNoticeBar,
    tIcon,
  },
  data() {
    return {
      visible: true,
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
