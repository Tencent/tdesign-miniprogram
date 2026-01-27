<template>
  <view>
    <t-tabs
      :default-value="0"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
    </t-tabs>

    <t-tabs
      :default-value="0"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="上限六个文字"
        value="2"
      />
    </t-tabs>

    <t-tabs
      :default-value="0"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="上限四字"
        value="3"
      />
    </t-tabs>

    <t-tabs
      :default-value="0"
      sticky
      :sticky-props="stickyProps"
      t-class="custom-tabs"
      @change="onTabsChange"
      @click="onTabsClick"
      @scroll="onStickyScroll"
    >
      <t-tab-panel
        label="选项"
        value="0"
      />
      <t-tab-panel
        label="选项"
        value="1"
      />
      <t-tab-panel
        label="选项"
        value="2"
      />
      <t-tab-panel
        label="选项"
        value="3"
      />
      <t-tab-panel
        label="上限四字"
        value="4"
      />
    </t-tabs>
  </view>
</template>

<script>
import TTabs from 'tdesign-uniapp/tabs/tabs.vue';
import TTabPanel from 'tdesign-uniapp/tab-panel/tab-panel.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TTabs,
    TTabPanel,
  },
  props: {
    stickyOffset: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    stickyProps() {
      return {
        zIndex: 100,
        offsetTop: this.stickyOffset,

      };
    },
  },
  created() {},
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.value}.`);
    },
    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.value}.`);
    },
    onStickyScroll(event) {
      console.log('sticky scroll: ', event);
    },
  },
};
</script>
<style>

.custom-tabs {
    margin-bottom: 32rpx;
}
</style>
