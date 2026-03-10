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
            @update:visible="visible.topLeft = $event"
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
                @click="showPopover($event, { target: 'topLeft' })"
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
            @update:visible="visible.top = $event"
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
                @click="showPopover($event, { target: 'top' })"
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
            @update:visible="visible.topRight = $event"
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
                @click="showPopover($event, { target: 'topRight' })"
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
            @update:visible="visible.bottomLeft = $event"
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
                @click="showPopover($event, { target: 'bottomLeft' })"
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
            @update:visible="visible.bottom = $event"
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
                @click="showPopover($event, { target: 'bottom' })"
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
            @update:visible="visible.bottomRight = $event"
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
                @click="showPopover($event, { target: 'bottomRight' })"
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
            @update:visible="visible.rightTop = $event"
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
                @click="showPopover($event, { target: 'rightTop' })"
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
            @update:visible="visible.right = $event"
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
                @click="showPopover($event, { target: 'right' })"
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
            @update:visible="visible.rightBottom = $event"
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
                @click="showPopover($event, { target: 'rightBottom' })"
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
            @update:visible="visible.leftTop = $event"
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
                @click="showPopover($event, { target: 'leftTop' })"
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
            @update:visible="visible.left = $event"
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
                @click="showPopover($event, { target: 'left' })"
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
            @update:visible="visible.leftBottom = $event"
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
                @click="showPopover($event, { target: 'leftBottom' })"
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
