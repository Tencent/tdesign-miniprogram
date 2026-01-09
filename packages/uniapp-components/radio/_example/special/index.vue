<template>
  <view>
    <t-radio-group
      :value="value"
      allow-uncheck
      @change="onChange"
    >
      <view
        v-for="(item, index) in 3"
        :key="index"
        :class="'card ' + (value == index ? 'card--active' : '')"
      >
        <t-icon
          v-if="value == index"
          name="check"
          :t-class="cardIconTClass"
          :class="cardIconClass"
        />

        <t-radio
          :value="index"
          label="单选"
          content="描述信息描述信息描述信息描述信息描述信息"
          icon="none"
          borderless
        />
      </view>
    </t-radio-group>

    <view
      class="demo-desc"
      style="margin: 48rpx 32rpx 32rpx"
    >
      横向卡片单选框
    </view>

    <t-radio-group
      :t-class="horBoxTClass"
      :class="horBoxClass"
      :custom-style="horBoxCustomStyle"
      :value="value1"
      @change="onChange1"
    >
      <view
        v-for="(item, index) in 3"
        :key="index"
        :class="'card ' + (value1 == index ? 'card--active' : '')"
      >
        <t-icon
          v-if="value1 == index"
          name="check"
          :t-class="cardIconTClass"
          :class="cardIconClass"
          custom-style="font-size: 12px;"
        />

        <t-radio
          :value="index"
          label="单选"
          icon="none"
          borderless
        />
      </view>
    </t-radio-group>
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group.vue';
import tRadio from 'tdesign-uniapp/radio/radio.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import { canUseVirtualHost } from 'tdesign-uniapp/common/version';
import tools from 'tdesign-uniapp/common/utils.wxs';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tRadioGroup,
    tRadio,
    tIcon,
  },
  data() {
    return {
      value: 0,
      value1: 0,
    };
  },
  computed: {
    cardIconTClass() {
      return canUseVirtualHost() ? this.cardIconRealClass : '';
    },
    cardIconClass() {
      return !canUseVirtualHost() ? this.cardIconRealClass : '';
    },
    cardIconRealClass() {
      return 'card__icon';
    },
    horBoxTClass() {
      return canUseVirtualHost() ? this.horBoxRealClass : '';
    },
    horBoxClass() {
      return !canUseVirtualHost() ? this.horBoxRealClass : '';
    },
    horBoxRealClass() {
      return 'horizontal-box';
    },
    horBoxCustomStyle() {
      return tools._style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: '16px',
      });
    },
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
      console.log('[change] e:', e);
    },
    onChange1(e) {
      this.value1 = e.value;
      console.log('[change] e:', e);
    },
  },
};
</script>
<style>
.card {
    position: relative;
    margin: 32rpx;
    border-radius: 12rpx;
    overflow: hidden;
    box-sizing: border-box;
    border: 3rpx solid var(--td-bg-color-container, #fff);
}

.card--active {
    border-color: var(--td-brand-color, #0052d9);
}

.card--active::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    border-width: 28px 28px 28px 0;
    border-style: solid;
    border-color: var(--td-brand-color, #0052d9) transparent transparent transparent;
}

.card__icon {
    color: var(--td-bg-color-container, #fff);
    position: absolute;
    left: 1.5px;
    top: 1.5px;
    z-index: 1;
    font-size: 16px;
}

/* 横向布局 */
/* .horizontal-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 32rpx;
} */

.horizontal-box .card {
    flex: 0 0 calc(33.33% - 12rpx);
    margin: 0 0 24rpx 0;
}
</style>
