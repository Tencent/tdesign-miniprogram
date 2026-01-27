<template>
  <view>
    <t-tabs
      :animation="{ duration: 0.6 }"
      :default-value="0"
      t-class="custom-tabs"
      t-class-content="custom-panel"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项一"
        value="0"
      >
        <view class="custom-panel__content">
          选项一内容
        </view>
      </t-tab-panel>
      <t-tab-panel
        label="选项二"
        value="1"
      >
        <view class="custom-panel__content">
          选项二内容
        </view>
      </t-tab-panel>
      <t-tab-panel
        label="选项三"
        value="2"
      >
        <view class="custom-panel__content">
          选项三内容
        </view>
      </t-tab-panel>
      <t-tab-panel
        label="选项四"
        value="3"
      >
        <view class="custom-panel__content">
          选项四内容
        </view>
      </t-tab-panel>
    </t-tabs>
  </view>
</template>

<script>
import TTabs from 'tdesign-uniapp/tabs/tabs.vue';
import TTabPanel from 'tdesign-uniapp/tab-panel/tab-panel.vue';
export default {
  components: {
    TTabs,
    TTabPanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.value}.`);
    },
    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.value}.`);
    },
  },
};
</script>
<style>
.custom-tabs {
    margin-bottom: 32rpx;
}

.custom-panel {
    color: var(--td-text-color-primary);
}

.custom-panel__content {
    height: 240rpx;
    font-size: 28rpx;
    color: var(--td-text-color-placeholder);
    padding: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
