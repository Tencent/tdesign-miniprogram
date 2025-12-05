<template>
  <view>
    <t-input
      label="标签文字"
      placeholder="请输入文字"
    />

    <t-input placeholder="请输入文字">
      <template
        #label
      >
        <view
          class="custom-label"
        >
          标签文字
        </view>
      </template>
    </t-input>

    <t-input placeholder="请输入文字" />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.custom-label {
    display: inline-flex;
}

.custom-label::after {
    content: '*';
    color: red;
    font-size: 32rpx;
    margin-left: 4rpx;
}
</style>
