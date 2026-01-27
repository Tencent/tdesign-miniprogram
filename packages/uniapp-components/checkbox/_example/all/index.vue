<template>
  <view>
    <t-checkbox-group
      :options="options"
      :default-value="checkAllValues"
      :relation-key="relationKey"
      @change="onCheckAllChange"
    />
  </view>
</template>

<script>
import TCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group.vue';
export default {
  components: {
    TCheckboxGroup,
  },
  data() {
    return {
      relationKey: `${Math.random()}`,
      options: [
        {
          label: '全选',
          checkAll: true,
        },
        {
          label: '多选',
          value: 1,
        },
        {
          label: '多选',
          value: 2,
        },
        {
          label: '多选',
          value: 3,
          content: '单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息',
        },
      ],
      checkAllValues: [1, 2, 3, ''],
    };
  },
  created() {},
  methods: {
    onCheckAllChange(event) {
      console.log('change: ', event);
      this.checkAllValues = event.value;
    },
  },
};
</script>
<style>
</style>
