<template>
  <view class="wrapper">
    <block
      v-for="(item, index) in items"
      :key="index"
    >
      <view class="block">
        <text>{{ item }}</text>
        <t-check-tag
          size="large"
          :variant="item"
          :custom-style="mr16"
          :content="['已选中态', '未选中态']"
        />
        <t-check-tag
          default-checked
          size="large"
          :variant="item"
          :content="['已选中态', '未选中态']"
        />
      </view>
    </block>
  </view>
</template>

<script>
import tCheckTag from 'tdesign-uniapp/check-tag/check-tag.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tCheckTag,
  },
  data() {
    return {
      items: ['light', 'dark', 'outline', 'light-outline'],
      mr16: 'margin-right: 16px;',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.wrapper {
    flex-wrap: wrap;
    margin: 0 32rpx;
}

.wrapper t-check-tag {
    display: block;
}

.block {
    display: flex;
    font-size: 14px;
    align-items: center;
    line-height: 76rpx;
    color: var(--td-text-color-placeholder);
}

.block text {
    display: block;
    width: 160rpx;
    margin-right: 32rpx;
}

.block + .block {
    margin-top: 32rpx;
}
</style>
