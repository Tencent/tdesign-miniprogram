<template>
  <view>
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      title="cell-group 组合单元格"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <view class="demo">
      <view class="demo-title">
        Cell-group 组合单元格
      </view>
      <view class="demo-desc">
        cell的组合单元格
      </view>

      <view>
        <t-cell-group title="01 基础用法">
          <t-cell
            title="单行标题"
            required
          />
          <t-cell
            title="单行标题"
            hover
            note="辅助信息"
          />
          <t-cell
            title="单行标题"
            hover
            arrow
          />
          <t-cell
            title="单行标题"
            hover
            note="辅助信息"
            arrow
          />
        </t-cell-group>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './cell-group.less';
</style>
