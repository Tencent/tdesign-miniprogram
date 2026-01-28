<template>
  <view>
    <t-result
      t-class-image="external-class-image"
      image="https://tdesign.gtimg.com/mobile/demos/result1.png"
    >
      <template #title>
        <view>
          自定义结果
        </view>
      </template>
      <template #description>
        <view>
          描述文字
        </view>
      </template>
    </t-result>
  </view>
</template>

<script>
import TResult from '@tdesign/uniapp/result/result.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TResult,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
:deep(.external-class-image) {
    width: 100px;
    height: 80px;
}
</style>
