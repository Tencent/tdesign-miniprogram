<template>
  <view>
    <view class="example-search">
      <t-search placeholder="搜索预设文案" />
    </view>

    <view class="example-search">
      <t-search
        placeholder="搜索预设文案"
        shape="round"
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
    return {
      value: '',
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log(e.value);
    },
  },
};
</script>
<style>
.example-search {
    background-color: var(--bg-color-demo);
    padding: 16rpx 32rpx;
}

.example-search:not(:last-child) {
    margin-bottom: 32rpx;
}
</style>
