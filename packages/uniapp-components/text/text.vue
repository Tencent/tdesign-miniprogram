<template>
  <view
    :class="className + ' ' + tClass + ' ' + wrapperClass(classPrefix, ellipsis)"
    :style="(ellipsis ? '' : 'display:inline;') + tools._style([customStyle]) + (ellipsis ? '' : markStyle(mark))"
  >
    <view
      v-if="ellipsis"
      :class="
        classPrefix +
        '__ellipsis-content ' +
        decorClass(classPrefix, strong, underline, dataDelete, code, mark, keyboard, italic)
      "
      :style="ellipsisStyle(ellipsis, isExpanded) + markStyle(mark)"
    >
      <text v-if="content">
        {{ content }}
      </text>
      <slot v-else />
    </view>
    <block v-else>
      <view
        :class="'' + decorClass(classPrefix, strong, underline, dataDelete, code, mark, keyboard, italic)"
        style="display: inline"
      >
        <text v-if="content">
          {{ content }}
        </text>
        <slot v-else />
      </view>
    </block>

    <!-- 展开/收起按钮 -->
    <view
      v-if="ellipsis && !isExpanded && ellipsis.expandable"
      :class="classPrefix + '-ellipsis-symbol'"
      :style="copyable ? 'margin-right:16rpx;' : ''"
      @click="onExpand"
    >
      {{ globalConfig.expandText }}
    </view>
    <view
      v-else-if="ellipsis && isExpanded && ellipsis.expandable && ellipsis.collapsible"
      :class="classPrefix + '-ellipsis-symbol'"
      :style="copyable ? 'margin-right:16rpx;' : ''"
      @click="onCollapse"
    >
      {{ globalConfig.collapseText }}
    </view>

    <!-- 复制按钮 -->
    <view v-if="copyable" :class="classPrefix + '__copy ' + tClassCopy" @click="onCopy">
      <block v-if="isCopied">
        <t-icon name="check" />
      </block>
      <block v-else-if="copyable && copyable.suffix">
        <slot name="suffix" />
      </block>
      <block v-else>
        <t-icon name="file-copy" />
      </block>
    </view>
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';

import tools from '../common/utils.wxs';
import TIcon from '../icon/icon';
import usingConfig from '../mixins/using-config';
import { ellipsisStyle, wrapperClass, decorClass, markStyle } from '../paragraph/computed.js';

import props from './props';

const componentName = 'typography';
const name = `${prefix}-${componentName}`;

export default {
  components: {
    TIcon,
  },
  ...uniComponent({
    name,
    mixins: [usingConfig({ componentName })],
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`, `${prefix}-class-copy`],
    props: {
      ...props,
    },
    emits: ['expand', 'copy'],
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
        className: '',
        // delete 是 JS 关键字，避免使用，使用 dataDelete 透传
        dataDelete: this.delete,
        isExpanded: false,
        isCopied: false,
      };
    },
    watch: {
      theme: 'updateClass',
      disabled: 'updateClass',
      delete(val) {
        this.dataDelete = val;
      },
    },
    mounted() {
      this.updateClass();
    },
    methods: {
      ellipsisStyle,
      wrapperClass,
      decorClass,
      markStyle,
      updateClass() {
        const { classPrefix, theme, disabled } = this;
        const classList = [classPrefix];

        if (disabled) {
          classList.push(`${classPrefix}--disabled`);
        } else if (theme && ['primary', 'secondary', 'success', 'warning', 'error'].includes(theme)) {
          classList.push(`${classPrefix}--${theme}`);
        }

        this.className = classList.join(' ');
      },
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
      onCopy() {
        if (this.isCopied) return;

        const { copyable, content } = this;
        let text = content || '';

        if (typeof copyable === 'object' && copyable !== null && copyable.text) {
          text = copyable.text;
        }

        uni.setClipboardData({
          data: text,
          success: () => {
            this.isCopied = true;
            this.$emit('copy', { text });
            setTimeout(() => {
              this.isCopied = false;
            }, 1500);
          },
        });
      },
    },
  }),
};
</script>
<style scoped src="./text.css"></style>
