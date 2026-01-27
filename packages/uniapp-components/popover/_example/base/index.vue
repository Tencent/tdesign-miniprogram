<template>
  <view class="row">
    <view class="demo-block__header-desc">
      带箭头的弹出气泡
    </view>
    <t-popover
      v-model:visible="visible.normal"
      placement="top"
      theme="dark"
      data-target="normal"
      :close-on-click-outside="false"
    >
      <template #content>
        <view>
          弹出气泡内容
        </view>
      </template>

      <view class="popover-example__content">
        <t-button
          theme="primary"
          variant="outline"
          size="large"
          data-target="normal"
          @click="showPopover($event, { target: 'normal' })"
        >
          带箭头
        </t-button>
      </view>
    </t-popover>

    <view
      class="demo-block__header-desc"
      style="margin-top: 32rpx"
    >
      不带箭头的弹出气泡
    </view>
    <t-popover
      v-model:visible="visible.noArrow"
      placement="top"
      theme="dark"
      content="弹出气泡内容"
      :show-arrow="false"
      data-target="noArrow"
    >
      <view class="popover-example__content">
        <t-button
          theme="primary"
          variant="outline"
          size="large"
          data-target="noArrow"
          @click="showPopover($event, { target: 'noArrow' })"
        >
          不带箭头
        </t-button>
      </view>
    </t-popover>

    <view
      class="demo-block__header-desc"
      style="margin-top: 32rpx"
    >
      自定义内容弹出气泡
    </view>
    <view class="custom">
      <t-popover
        v-model:visible="visible.custom"
        placement="top"
        theme="dark"
        data-target="custom"
      >
        <template #content>
          <view class="custom__list">
            <view
              v-for="(item, index) in 3"
              :key="index"
              class="custom__item"
            >
              选项{{ index + 1 }}
            </view>
          </view>
        </template>


        <view class="popover-example__content">
          <t-button
            theme="primary"
            variant="outline"
            size="large"
            data-target="custom"
            @click="showPopover($event, { target: 'custom' })"
          >
            自定义内容
          </t-button>
        </view>
      </t-popover>
    </view>
  </view>
</template>

<script>
import TPopover from 'tdesign-uniapp/popover/popover.vue';
import TButton from 'tdesign-uniapp/button/button.vue';

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
        normal: false,
        noArrow: false,
        custom: false,
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
<style lang="scss" scoped>
.row {
    display: flex;
    flex-direction: column;

  :deep(.t-popover__wrapper) {
      width: 100%;
  }
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
    display: flex;
    justify-content: center;
}

.custom {
    display: flex;
    justify-content: center;
    --td-popover-padding: 0;
}

.custom__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}

.custom__item {
    width: 105px;
    line-height: 24px;
    text-align: center;
    padding: 12px;
}

.custom__item:not(:last-child) {
    border-bottom: 1px solid #fff;
}

</style>
