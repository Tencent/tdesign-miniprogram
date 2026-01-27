<template>
  <view>
    <t-radio-group
      t-class="theme-card"
      :custom-style="cardCustomStyle"
      default-value="radio1"
    >
      <t-radio
        label="单选"
        value="radio1"
        default-checked
      />
      <t-radio
        label="单选"
        value="radio2"
      />
      <t-radio
        label="单选标题多行单选标题多行单选标题多行单选标题多行单选标题多行"
        value="radio3"
      />
    </t-radio-group>
  </view>
</template>

<script>
import TRadioGroup from 'tdesign-uniapp/radio-group/radio-group.vue';
import TRadio from 'tdesign-uniapp/radio/radio.vue';
import tools from 'tdesign-uniapp/common/utils.wxs';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TRadioGroup,
    TRadio,
  },
  /**
     * 组件的属性列表
     */
  props: {},
  data() {
    return {};
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
  created() {},
  methods: {
    onChange() {},
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
