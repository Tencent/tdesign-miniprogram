<template>
  <view>
    <t-loading
      :indicator="false"
      text="加载中..."
    />
  </view>
</template>

<script>
import TLoading from '@tdesign/uniapp/loading/loading.vue';
export default {
  components: {
    TLoading,
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
