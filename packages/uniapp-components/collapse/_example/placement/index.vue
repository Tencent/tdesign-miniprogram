<template>
  <view class="wrapper">
    <t-collapse
      :value="activeValues"
      @change="handleChange"
    >
      <t-collapse-panel
        header="折叠面板标题"
        placement="top"
        :value="0"
        expand-icon
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
    return {
      activeValues: [0],
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      this.activeValues = e.value;
    },
  },
};
</script>
<style>
</style>
