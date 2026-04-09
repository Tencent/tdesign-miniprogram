<template>
  <view>
    <view class="row">
      <view class="popover-example__content">
        <t-popover
          :visible="visible.dark"
          placement="top"
          theme="dark"
          content="弹出气泡内容"
          data-target="dark"
          @update:visible="visible.dark = $event"
        >
          <t-button
            class="button-width--small"
            theme="primary"
            variant="outline"
            size="large"
            data-target="dark"
            @click="showPopover($event, { target: 'dark' })"
          >
            深色
          </t-button>
        </t-popover>
      </view>
      <view class="popover-example__content">
        <t-popover
          :visible="visible.light"
          placement="top"
          theme="light"
          content="弹出气泡内容"
          data-target="light"
          @update:visible="visible.light = $event"
        >
          <t-button
            class="button-width--small"
            theme="primary"
            variant="outline"
            size="large"
            data-target="light"
            @click="showPopover($event, { target: 'light' })"
          >
            浅色
          </t-button>
        </t-popover>
      </view>
      <view class="popover-example__content">
        <t-popover
          :visible="visible.brand"
          placement="top"
          theme="brand"
          content="弹出气泡内容"
          data-target="brand"
          @update:visible="visible.brand = $event"
        >
          <t-button
            class="button-width--small"
            theme="primary"
            variant="outline"
            size="large"
            data-target="brand"
            @click="showPopover($event, { target: 'brand' })"
          >
            品牌色
          </t-button>
        </t-popover>
      </view>
    </view>
    <view
      class="row"
      style="margin-top: 32rpx"
    >
      <view class="popover-example__content">
        <t-popover
          :visible="visible.success"
          placement="top"
          theme="success"
          content="弹出气泡内容"
          data-target="success"
          @update:visible="visible.success = $event"
        >
          <t-button
            class="button-width--small"
            theme="primary"
            variant="outline"
            size="large"
            data-target="success"
            @click="showPopover($event, { target: 'success' })"
          >
            成功色
          </t-button>
        </t-popover>
      </view>
      <view class="popover-example__content">
        <t-popover
          :visible="visible.warning"
          placement="top"
          theme="warning"
          content="弹出气泡内容"
          data-target="warning"
          @update:visible="visible.warning = $event"
        >
          <t-button
            class="button-width--small"
            theme="primary"
            variant="outline"
            size="large"
            data-target="warning"
            @click="showPopover($event, { target: 'warning' })"
          >
            警告色
          </t-button>
        </t-popover>
      </view>
      <view class="popover-example__content">
        <t-popover
          :visible="visible.error"
          placement="top"
          theme="error"
          content="弹出气泡内容"
          data-target="error"
          @update:visible="visible.error = $event"
        >
          <t-button
            class="button-width--small"
            theme="primary"
            variant="outline"
            size="large"
            data-target="error"
            @click="showPopover($event, { target: 'error' })"
          >
            错误色
          </t-button>
        </t-popover>
      </view>
    </view>
  </view>
</template>

<script>
import TPopover from '@tdesign/uniapp/popover/popover.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TPopover,
    TButton,
  },
  data() {
    return {
      visible: {
        dark: false,
        light: false,
        success: false,
        brand: false,
        warning: false,
        error: false,
      },
    };
  },
  created() {},
  methods: {
    showPopover(e, { target }) {
      this.visible[target] = !this.visible[target];
    },
  },
};
</script>
<style scoped lang="less">
.row {
    display: flex;
    padding: 0 32rpx;
    gap: 32rpx;
}

.demo-block__header-desc {
    margin-top: var(--td-spacer, 16rpx);
    margin-bottom: 32rpx;
    font-size: var(--td-font-size-base, 28rpx);
    white-space: pre-line;
    color: var(--bg-color-demo-desc);
    line-height: 22px;
}

.popover-example__content {
    flex: 1;
}

.button-width--small {
    width: 204rpx;
}

</style>
