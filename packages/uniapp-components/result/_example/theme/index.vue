<template>
  <view>
    <view
      v-for="(item, index) in resultList"
      :key="index"
    >
      <view class="demo-section__content">
        <t-result
          :theme="item.theme"
          :title="item.title"
        />
      </view>
    </view>
  </view>
</template>

<script>
import TResult from 'tdesign-uniapp/result/result.vue';
export default {
  components: {
    TResult,
  },
  data() {
    return {
      resultList: [
        {
          title: '成功状态',
          theme: 'success',
        },
        {
          title: '失败状态',
          theme: 'error',
        },
        {
          title: '警示状态',
          theme: 'warning',
        },
        {
          title: '默认状态',
          theme: 'default',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.demo-section__content {
    margin-bottom: 96rpx;
}
</style>
