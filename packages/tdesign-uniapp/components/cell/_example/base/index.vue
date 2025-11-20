<template>
  <view>
    <t-cell
      title="单行标题"
      hover
      :arrow="true"
    />
    <t-cell
      title="单行标题"
      hover
      required
      arrow
    />
    <t-cell
      title="单行标题"
      hover
      arrow
      aria-label="单行标题，有16条消息"
    >
      <template
        #note
      >
        <t-badge
          :count="16"
          style="display: inline-flex;"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      hover
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      hover
      note="辅助信息"
      arrow
    />
    <t-cell
      title="单行标题"
      hover
      arrow
      left-icon="app"
      :bordered="false"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tBadge from 'tdesign-uniapp/badge/badge.vue';
import tSwitch from 'tdesign-uniapp/switch/switch.vue';
export default {
  components: {
    tCell,
    tBadge,
    tSwitch,
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
