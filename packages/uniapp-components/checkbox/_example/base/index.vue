<template>
  <view>
    <t-checkbox-group
      :value="current"
      :options="options"
      :relation-key="relationKey"
      @change="handleGroupChange"
    />
  </view>
</template>

<script>
import TCheckboxGroup from '@tdesign/uniapp/checkbox-group/checkbox-group.vue';

export default {
  components: {
    TCheckboxGroup,
  },
  data() {
    return {
      relationKey: `${Math.random()}`,
      current: ['checkbox1', 'checkbox2'],
      options: [
        {
          label: '多选',
          value: 'checkbox1',
        },
        {
          label: '多选',
          value: 'checkbox2',
        },
        {
          label: '多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行',
          value: 'checkbox3',
          maxLabelRow: 2,
        },
        {
          label: '多选',
          value: 'checkbox4',
          content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
          maxContentRow: 2,
        },
      ],
    };
  },
  created() {},
  methods: {
    handleGroupChange(event) {
      console.log('change: ', event);
      const { value } = event;
      this.current = value;
    },
  },
};
</script>
<style>
</style>
