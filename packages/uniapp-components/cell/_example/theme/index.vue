<template>
  <view>
    <t-cell-group theme="card">
      <t-cell
        title="单行标题"
        left-icon="service"
        hover
        arrow
      />
      <t-cell
        title="单行标题"
        left-icon="internet"
        hover
        arrow
      />
      <t-cell
        title="单行标题"
        left-icon="lock-on"
        hover
        arrow
      />
    </t-cell-group>
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TCellGroup from '@tdesign/uniapp/cell-group/cell-group.vue';
export default {
  components: {
    TCellGroup,
    TCell,
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
