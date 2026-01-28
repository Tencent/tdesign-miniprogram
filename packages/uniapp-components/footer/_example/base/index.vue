<template>
  <view>
    <!-- 基础页脚 只有版权信息 -->
    <t-footer :text="text" />
  </view>
</template>

<script>
import TFooter from '@tdesign/uniapp/footer/footer.vue';
export default {
  components: {
    TFooter,
  },
  data() {
    return {
      text: 'Copyright © 2021-2031 TD.All Rights Reserved.',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
