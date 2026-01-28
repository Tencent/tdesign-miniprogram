<template>
  <view>
    <t-checkbox-group
      :default-value="['checkbox1']"
      disabled
    >
      <t-checkbox
        value="checkbox1"
        label="选项禁用-已选"
      />
      <t-checkbox
        value="checkbox2"
        label="选项禁用-默认"
      />
    </t-checkbox-group>
  </view>
</template>

<script>
import TCheckboxGroup from '@tdesign/uniapp/checkbox-group/checkbox-group.vue';
import TCheckbox from '@tdesign/uniapp/checkbox/checkbox.vue';
export default {
  components: {
    TCheckboxGroup,
    TCheckbox,
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
