<template>
  <view>
    <t-radio-group
      allow-uncheck
      :value="current"
      :options="options"
      :relation-key="relationKey"
      @change="onChange"
    />
  </view>
</template>

<script>
import TRadioGroup from 'tdesign-uniapp/radio-group/radio-group.vue';

export default {
  components: {
    TRadioGroup,
  },
  data() {
    return {
      relationKey: `${Math.random()}`,
      current: 1,
      options: [
        {
          value: 0,
          label: '单选',
        },
        {
          value: 1,
          label: '单选',
        },
        {
          value: 2,
          label: '单选单选单选单选单选单选单选单选单选单选单选单选单选单选',
        },
        {
          value: 3,
          label: '单选',
          content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(event) {
      console.log('[onChange]', event);
      const { value } = event;
      this.current = value;
      console.log('[current]', this.current);
    },
  },
};
</script>
<style>
</style>
