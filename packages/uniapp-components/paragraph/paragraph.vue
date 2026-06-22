<template>
  <view
    :class="classPrefix + ' ' + tClass + ' ' + (ellipsis ? classPrefix + '__ellipsis-wrapper' : '')"
    :style="'' + tools._style([customStyle])"
  >
    <view v-if="ellipsis" :class="classPrefix + '__ellipsis-content'" :style="'' + ellipsisStyle(ellipsis, isExpanded)">
      <text v-if="content">
        {{ content }}
      </text>
      <slot v-else />
    </view>
    <block v-else>
      <text v-if="content">
        {{ content }}
      </text>
      <slot v-else />
    </block>

    <!-- 展开/收起按钮 -->
    <block v-if="ellipsis && !isExpanded && ellipsis.expandable && ellipsis.suffix">
      <view :class="classPrefix + '-ellipsis-symbol'" @click="onExpand">
        <slot name="suffix" />
      </view>
    </block>
    <block v-else>
      <view
        v-if="ellipsis && !isExpanded && ellipsis.expandable"
        :class="classPrefix + '-ellipsis-symbol'"
        @click="onExpand"
      >
        {{ globalConfig.expandText }}
      </view>
      <view
        v-else-if="ellipsis && isExpanded && ellipsis.expandable && ellipsis.collapsible"
        :class="classPrefix + '-ellipsis-symbol'"
        @click="onCollapse"
      >
        {{ globalConfig.collapseText }}
      </view>
    </block>
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';

import tools from '../common/utils.wxs';
import usingConfig from '../mixins/using-config';

import { ellipsisStyle } from './computed.js';
import props from './props';

const componentName = 'typography';
const name = `${prefix}-${componentName}`;

export default {
  ...uniComponent({
    name,
    mixins: [usingConfig({ componentName })],
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`],
    props: {
      ...props,
    },
    emits: ['expand'],
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
        isExpanded: false,
      };
    },
    methods: {
      ellipsisStyle,
      onExpand() {
        this.isExpanded = true;
        if (typeof this.ellipsis === 'object') {
          this.$emit('expand', { expanded: true });
        }
      },
      onCollapse() {
        this.isExpanded = false;
        if (typeof this.ellipsis === 'object') {
          this.$emit('expand', { expanded: false });
        }
      },
    },
  }),
};
</script>
<style scoped src="./paragraph.css"></style>
