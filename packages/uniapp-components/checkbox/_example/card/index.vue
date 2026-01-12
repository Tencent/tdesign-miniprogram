<template>
  <view>
    <t-checkbox-group
      t-class="theme-card"
      :custom-style="cardCustomStyle"
      :default-value="['1', '2']"
    >
      <t-checkbox
        value="1"
        label="多选"
      />
      <t-checkbox
        value="2"
        label="多选"
      />
      <t-checkbox
        value="3"
        label="多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题"
      />
    </t-checkbox-group>
  </view>
</template>

<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group.vue';
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox.vue';
import tools from 'tdesign-uniapp/common/utils.wxs';


export default {
  components: {
    tCheckboxGroup,
    tCheckbox,
  },
  data() {
    return {
      checked: true,
    };
  },
  computed: {
    cardCustomStyle() {
      return tools._style({
        borderRadius: '24rpx',
        margin: '16px',
        overflow: 'hidden',
      });
    },
  },
  methods: {
    changeChecked(e) {
      this.checked = e.checked;
    },
  },
};
</script>
<style>
/* .theme-card {
    border-radius: 24rpx;
    margin: 32rpx;
    overflow: hidden;
} */
</style>
