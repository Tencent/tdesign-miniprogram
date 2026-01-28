<template>
  <view>
    <view class="skyline">
      <t-demo-navbar
        title="Fab"
      />
      <scroll-view
        scroll-y
        type="list"
        class="scroll-view"
      >
        <view class="demo">
          <view class="demo-title">
            Fab 悬浮按钮
          </view>
          <view class="demo-desc">
            当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮，例如：添加、发布
          </view>
          <t-demo
            title="01 组件类型"
            desc="纯图标悬浮按钮"
          >
            <view class="wrapper">
              <t-button
                theme="primary"
                size="large"
                block
                variant="outline"
                data-type="base"
                @click="handleChange($event, { type: 'base' })"
              >
                纯图标悬浮按钮
              </t-button>
            </view>
          </t-demo>
          <t-demo desc="图标加文字悬浮按钮">
            <view class="wrapper">
              <t-button
                theme="primary"
                size="large"
                block
                variant="outline"
                data-type="advance"
                @click="handleChange($event, { type: 'advance' })"
              >
                图标加文字悬浮按钮
              </t-button>
            </view>
          </t-demo>
          <t-demo desc="可移动悬浮按钮">
            <view class="wrapper">
              <t-button
                theme="primary"
                size="large"
                block
                variant="outline"
                data-type="movable"
                @click="handleChange($event, { type: 'movable' })"
              >
                可移动悬浮按钮
              </t-button>
            </view>
          </t-demo>
        </view>
      </scroll-view>
    </view>

    <BaseDemo v-if="type == 'base'" />
    <AdvanceDemo v-else-if="type == 'advance'" />
    <DraggableDemo v-else />
  </view>
</template>

<script>

import TButton from '@tdesign/uniapp/button/button.vue';
import BaseDemo from '../base/index.vue';
import Advance from '../advance/index.vue';
import Draggable from '../draggable/index.vue';

export default {
  components: {
    TButton,
    BaseDemo,
    AdvanceDemo,
    DraggableDemo,
  },
  data() {
    return {
      type: 'base',
    };
  },
  methods: {
    handleChange(e, { type }) {
      this.type = type;
    },
  },
};
</script>
<style lang="less">
@import './fab.less';
</style>
