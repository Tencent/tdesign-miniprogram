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
          :description="item.description"
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
          description: '描述文字',
        },
        {
          title: '失败状态',
          theme: 'error',
          description: '描述文字',
        },
        {
          title: '警示状态',
          theme: 'warning',
          description: '描述文字',
        },
        {
          title: '默认状态',
          theme: 'default',
          description: '描述文字',
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
