<template>
  <view>
    <view class="popover-example-row">
      <view class="demo-block__header-desc">
        顶部弹出气泡
      </view>
      <view class="row">
        <view class="popover-example__content">
          <t-popover
            :visible="visible.topLeft"
            placement="top-left"
            theme="dark"
            data-target="topLeft"
            @update:visible="(e) => visible.topLeft = e"
          >
            <template #content>
              <view>
                弹出气泡内容
              </view>
            </template>

            <view class="popover-example__content">
              <t-button
                t-class="button-width--small"
                theme="primary"
                variant="outline"
                size="large"
                data-target="topLeft"
                @click="(e) => showPopover(e, { target: 'topLeft' })"
              >
                顶部左
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.top"
            placement="top"
            theme="dark"
            data-target="top"
            @update:visible="(e) => visible.top = e"
          >
            <template #content>
              <view>
                弹出气泡内容
              </view>
            </template>

            <view class="popover-example__content">
              <t-button
                t-class="button-width--small"
                theme="primary"
                variant="outline"
                size="large"
                data-target="top"
                @click="(e) => showPopover(e, { target: 'top' })"
              >
                顶部中
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.topRight"
            placement="top-right"
            theme="dark"
            data-target="topRight"
            @update:visible="(e) => visible.topRight = e"
          >
            <template #content>
              <view>
                弹出气泡内容
              </view>
            </template>

            <view class="popover-example__content">
              <t-button
                t-class="button-width--small"
                theme="primary"
                variant="outline"
                size="large"
                data-target="topRight"
                @click="(e) => showPopover(e, { target: 'topRight' })"
              >
                顶部右
              </t-button>
            </view>
          </t-popover>
        </view>
      </view>
    </view>

    <view class="popover-example-row">
      <view class="demo-block__header-desc">
        底部弹出气泡
      </view>
      <view class="row">
        <view class="popover-example__content">
          <t-popover
            :visible="visible.bottomLeft"
            placement="bottom-left"
            theme="dark"
            data-target="bottomLeft"
            @update:visible="(e) => visible.bottomLeft = e"
          >
            <template #content>
              <view>
                弹出气泡内容
              </view>
            </template>

            <view class="popover-example__content">
              <t-button
                t-class="button-width--small"
                theme="primary"
                variant="outline"
                size="large"
                data-target="bottomLeft"
                @click="(e) => showPopover(e, { target: 'bottomLeft' })"
              >
                底部左
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.bottom"
            placement="bottom"
            theme="dark"
            data-target="bottom"
            @update:visible="(e) => visible.bottom = e"
          >
            <template #content>
              <view>
                弹出气泡内容
              </view>
            </template>

            <view class="popover-example__content">
              <t-button
                t-class="button-width--small"
                theme="primary"
                variant="outline"
                size="large"
                data-target="bottom"
                @click="(e) => showPopover(e, { target: 'bottom' })"
              >
                底部中
              </t-button>
            </view>
          </t-popover>
        </view>

        <view class="popover-example__content">
          <t-popover
            :visible="visible.bottomRight"
            placement="bottom-right"
            theme="dark"
            data-target="bottomRight"
            @update:visible="(e) => visible.bottomRight = e"
          >
            <template #content>
              <view>
                弹出气泡内容
              </view>
            </template>


            <view class="popover-example__content">
              <t-button
                t-class="button-width--small"
                theme="primary"
                variant="outline"
                size="large"
                data-target="bottomRight"
                @click="(e) => showPopover(e, { target: 'bottomRight' })"
              >
                底部右
              </t-button>
            </view>
          </t-popover>
        </view>
      </view>
    </view>

    <view class="popover-example-row">
      <view class="demo-block__header-desc">
        右侧弹出气泡
      </view>
      <view class="column">
        <view class="popover-example__content">
          <t-popover
            :visible="visible.rightTop"
            placement="right-top"
            theme="dark"
            data-target="rightTop"
            @update:visible="(e) => visible.rightTop = e"
          >
            <template #content>
              <view>
                气泡内容
              </view>
            </template>


            <view class="popover-example__content">
              <t-button
                t-class="button-width--large"
                theme="primary"
                variant="outline"
                size="large"
                data-target="rightTop"
                @click="(e) => showPopover(e, { target: 'rightTop' })"
              >
                右侧上
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.right"
            placement="right"
            theme="dark"
            data-target="right"
            @update:visible="(e) => visible.right = e"
          >
            <template #content>
              <view>
                气泡内容
              </view>
            </template>
            <view class="popover-example__content">
              <t-button
                t-class="button-width--large"
                theme="primary"
                variant="outline"
                size="large"
                data-target="right"
                @click="(e) => showPopover(e, { target: 'right' })"
              >
                右侧中
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.rightBottom"
            placement="right-bottom"
            theme="dark"
            data-target="rightBottom"
            @update:visible="(e) => visible.rightBottom = e"
          >
            <template #content>
              <view>
                气泡内容
              </view>
            </template>
            <view class="popover-example__content">
              <t-button
                t-class="button-width--large"
                theme="primary"
                variant="outline"
                size="large"
                data-target="rightBottom"
                @click="(e) => showPopover(e, { target: 'rightBottom' })"
              >
                右侧下
              </t-button>
            </view>
          </t-popover>
        </view>
      </view>
    </view>

    <view class="flex-end popover-example-row">
      <view class="demo-block__header-desc">
        左侧弹出气泡
      </view>
      <view class="column">
        <view class="popover-example__content">
          <t-popover
            :visible="visible.leftTop"
            placement="left-top"
            theme="dark"
            data-target="leftTop"
            @update:visible="(e) => visible.leftTop = e"
          >
            <template #content>
              <view>
                气泡内容
              </view>
            </template>
            <view class="popover-example__content">
              <t-button
                t-class="button-width--large"
                theme="primary"
                variant="outline"
                size="large"
                data-target="leftTop"
                @click="(e) => showPopover(e, { target: 'leftTop' })"
              >
                左侧上
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.left"
            placement="left"
            theme="dark"
            data-target="left"
            @update:visible="(e) => visible.left = e"
          >
            <template #content>
              <view>
                气泡内容
              </view>
            </template>
            <view class="popover-example__content">
              <t-button
                t-class="button-width--large"
                theme="primary"
                variant="outline"
                size="large"
                data-target="left"
                @click="(e) => showPopover(e, { target: 'left' })"
              >
                左侧中
              </t-button>
            </view>
          </t-popover>
        </view>
        <view class="popover-example__content">
          <t-popover
            :visible="visible.leftBottom"
            placement="left-bottom"
            theme="dark"
            data-target="leftBottom"
            @update:visible="(e) => visible.leftBottom = e"
          >
            <template #content>
              <view>
                气泡内容
              </view>
            </template>
            <view class="popover-example__content">
              <t-button
                t-class="button-width--large"
                theme="primary"
                variant="outline"
                size="large"
                data-target="leftBottom"
                @click="(e) => showPopover(e, { target: 'leftBottom' })"
              >
                左侧下
              </t-button>
            </view>
          </t-popover>
        </view>
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
        topLeft: false,
        top: false,
        topRight: false,
        bottomLeft: false,
        bottom: false,
        bottomRight: false,
        leftTop: false,
        left: false,
        leftBottom: false,
        rightTop: false,
        right: false,
        rightBottom: false,
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
.popover-example-row {
    display: flex;
    flex-direction: column;
    padding: 0 32rpx;
    margin-bottom: 48rpx;
}

.row {
    display: flex;
    flex-direction: row;
    gap: 32rpx;
}

.column {
    display: flex;
    flex-direction: column;
    gap: 32rpx;
}

.flex-end .column {
    align-items: flex-end;
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

:deep(.button-width--small) {
    width: 204rpx;
}

:deep(.button-width--large) {
    width: 446rpx;
}

</style>
