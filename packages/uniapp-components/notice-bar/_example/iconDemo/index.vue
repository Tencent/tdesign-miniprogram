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
import TNoticeBar from '@tdesign/uniapp/notice-bar/notice-bar.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';
export default {
  components: {
    TNoticeBar,
    TIcon,
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
