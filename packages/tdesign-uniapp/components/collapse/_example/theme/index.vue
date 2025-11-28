<template>
  <view>
    <t-collapse
      theme="card"
      :default-value="[3]"
      expand-icon
    >
      <t-collapse-panel
        header="折叠面板标题"
        :value="0"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        :value="1"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        :value="2"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        disabled
        :value="3"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
    </t-collapse>
  </view>
</template>

<script>
import tCollapse from 'tdesign-uniapp/collapse/collapse.vue';
import tCollapsePanel from 'tdesign-uniapp/collapse-panel/collapse-panel.vue';
export default {
  components: {
    tCollapse,
    tCollapsePanel,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
