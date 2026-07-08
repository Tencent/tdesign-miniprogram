<template>
  <view>
    <t-navbar class="demo-navbar" title="ChatRecord" left-arrow />
    <view class="demo">
      <t-demo-header title="ChatRecord 语音录入" />
      <t-demo>
        <baseDemo />
      </t-demo>
    </view>
  </view>
</template>

<script lang="ts">
import baseDemo from './base/index.vue';

export default {
  components: {
    baseDemo,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
@import './chat-record.less';
</style>
