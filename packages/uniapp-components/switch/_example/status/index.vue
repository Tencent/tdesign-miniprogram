<template>
  <view>
    <view class="demo-desc">
      加载状态
    </view>

    <view class="group">
      <t-cell title="加载状态">
        <template
          #note
        >
          <t-switch
            :default-value="false"
            loading
          />
        </template>
      </t-cell>
      <t-cell
        title="加载状态"
        :bordered="false"
      >
        <template
          #note
        >
          <t-switch
            :default-value="true"
            loading
          />
        </template>
      </t-cell>
    </view>

    <view class="demo-desc">
      禁用状态
    </view>

    <view class="group">
      <t-cell title="禁用状态">
        <template
          #note
        >
          <t-switch
            disabled
          />
        </template>
      </t-cell>
      <t-cell
        title="禁用状态"
        :bordered="false"
      >
        <template
          #note
        >
          <t-switch
            :default-value="true"
            disabled
          />
        </template>
      </t-cell>
    </view>
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TSwitch from '@tdesign/uniapp/switch/switch.vue';
export default {
  components: {
    TCell,
    TSwitch,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.group {
    margin-top: 32rpx;
}

.group + .demo-desc {
    margin-top: 48rpx;
}
</style>
