<template>
  <view>
    <t-radio-group
      default-value="0"
      borderless
      :custom-style="boxCustomStyle"
    >
      <t-radio
        :block="false"
        label="单选标题"
        value="0"
      />
      <t-radio
        :block="false"
        label="单选标题"
        value="1"
      />
      <t-radio
        :block="false"
        label="上限四字"
        value="2"
      />
    </t-radio-group>
  </view>
</template>

<script>
import TRadioGroup from '@tdesign/uniapp/radio-group/radio-group.vue';
import TRadio from '@tdesign/uniapp/radio/radio.vue';
import tools from '@tdesign/uniapp/common/utils.wxs';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TRadioGroup,
    TRadio,
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    boxCustomStyle() {
      return tools._style({
        padding: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        backgroundColor: 'var(--td-bg-color-container, #fff)',
      });
    },
  },
  methods: {
    handleChange(e) {
      console.log('handleChange', e);
      this.checked = e.checked;
    },
  },
};
</script>
<style>
.box {
    padding: 32rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: var(--td-bg-color-container, #fff);
}
</style>
