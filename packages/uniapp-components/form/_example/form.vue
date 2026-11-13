<template>
  <view class="tdesign-mobile-demo">
    <view class="custom-navbar">
      <t-demo-navbar custom-class="demo-navbar" title="Form" />
    </view>
    <t-demo-header
      title="Form 表单"
      desc="用以收集、校验和提交数据，一般由输入框、单选框、复选框、选择器等控件组成。"
      notice="渲染框架支持情况：Skyline、WebView"
    />

    <t-sticky :offset-top="navbarHeight">
      <view class="form-demo-sticky">
        <t-tabs :value="layout" theme="tag" @change="onLayoutChange">
          <t-tab-panel label="水平排布" value="horizontal" />
          <t-tab-panel label="竖向排布" value="vertical" />
        </t-tabs>
        <t-cell title="禁用态">
          <template #note>
            <t-switch :value="disabled" @change="onDisabledChange" />
          </template>
        </t-cell>
      </view>
    </t-sticky>

    <t-demo title="01 组件类型" desc="基础表单">
      <base-demo :label-align="labelAlign" :disabled="disabled" />
    </t-demo>

    <t-demo title="02 组件状态" desc="提示">
      <help-demo :label-align="labelAlign" :disabled="disabled" />
    </t-demo>

    <t-demo desc="校验规则">
      <rules-demo :label-align="labelAlign" :disabled="disabled" />
    </t-demo>

    <template v-if="isHorizontal">
      <t-demo title="03 组件样式" desc="标签对齐样式">
        <label-align-demo :disabled="disabled" />
      </t-demo>
      <t-demo desc="标签带冒号">
        <colon-demo :label-align="labelAlign" :disabled="disabled" />
      </t-demo>
      <t-demo desc="标签必填位置">
        <required-mark-demo :label-align="labelAlign" :disabled="disabled" />
      </t-demo>
      <t-demo desc="标签宽度">
        <label-width-demo :disabled="disabled" />
      </t-demo>
      <t-demo desc="标签内容对齐样式">
        <content-align-demo :label-align="labelAlign" :disabled="disabled" />
      </t-demo>
    </template>

    <template v-else>
      <t-demo title="03 组件样式" desc="标签必填位置">
        <required-mark-demo :label-align="labelAlign" :disabled="disabled" />
      </t-demo>
      <t-demo desc="标签带冒号">
        <colon-demo :label-align="labelAlign" :disabled="disabled" />
      </t-demo>
      <t-demo desc="标签内容对齐样式">
        <content-align-demo :label-align="labelAlign" :disabled="disabled" />
      </t-demo>
    </template>
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TSticky from '@tdesign/uniapp/sticky/sticky.vue';
import TSwitch from '@tdesign/uniapp/switch/switch.vue';
import TTabPanel from '@tdesign/uniapp/tab-panel/tab-panel.vue';
import TTabs from '@tdesign/uniapp/tabs/tabs.vue';

import BaseDemo from './base/index.vue';
import ColonDemo from './colon/index.vue';
import ContentAlignDemo from './content-align/index.vue';
import HelpDemo from './help/index.vue';
import LabelAlignDemo from './label-align/index.vue';
import LabelWidthDemo from './label-width/index.vue';
import RequiredMarkDemo from './required-mark/index.vue';
import RulesDemo from './rules/index.vue';

export default {
  components: {
    TSticky,
    TTabs,
    TTabPanel,
    TCell,
    TSwitch,
    BaseDemo,
    HelpDemo,
    RulesDemo,
    LabelAlignDemo,
    ColonDemo,
    RequiredMarkDemo,
    LabelWidthDemo,
    ContentAlignDemo,
  },
  data() {
    return {
      layout: 'horizontal',
      disabled: false,
      navbarHeight: 0,
    };
  },
  computed: {
    isHorizontal() {
      return this.layout === 'horizontal';
    },
    labelAlign() {
      return this.isHorizontal ? 'left' : 'top';
    },
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.navbarHeight = height;
      });
    },
    onLayoutChange(e) {
      this.layout = e.value;
    },
    onDisabledChange(e) {
      this.disabled = e.value;
    },
  },
};
</script>
<style lang="less">
@import './form.less';
</style>
