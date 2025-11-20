<template>
  <view>
    <view class="example-search">
      <t-search
        placeholder="最大输入10个字符"
        :maxlength="10"
      />
    </view>
    <view class="example-search">
      <t-search
        placeholder="最大输入10个字符，汉字算两个"
        :maxcharacter="10"
      />
    </view>
  </view>
</template>

<script>
import tSearch from 'tdesign-uniapp/search/search.vue';
export default {
  components: {
    tSearch,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.example-search {
    background-color: var(--bg-color-demo);
    padding: 16rpx 32rpx;
}
</style>
