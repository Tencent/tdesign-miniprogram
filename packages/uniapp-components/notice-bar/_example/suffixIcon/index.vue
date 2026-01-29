<template>
  <view>
    <t-notice-bar
      :visible="visible"
      suffix-icon="close"
      content="这是一条普通的通知信息"
      @click="click"
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
    return {
      visible: true,
    };
  },
  created() {},
  methods: {
    click(e) {
      const { trigger } = e;
      console.log(`click on the ${trigger} area`);
    },
  },
};
</script>
<style>
</style>
