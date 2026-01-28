<template>
  <view
    :class="[classPrefix, placement === 'longpress' ? classPrefix + '__inner--popover' : '']"
    :style="_._style([customStyle])"
  >
    <view :class="classPrefix + '__inner ' + classPrefix + '__inner--column'">
      <view :class="classPrefix + '__item ' + classPrefix + '__left'">
        <slot name="prefix" />
      </view>
      <block
        v-for="(item, index) in actions"
        :key="index"
      >
        <!-- 分享按钮使用 button 标签 -->

        <button
          v-if="item.name === 'share'"
          :data-name="item.name"
          :class="_.cls(classPrefix + '__item', [['active', item.isActive]])"
          :open-type="content ? 'share' : 'none'"
          :data-chat-id="chatId"
          @click="handleActionClick"
        >
          <t-icon
            :name="item.isActive ? iconActiveMap[item.name] : iconMap[item.name]"
            size="40rpx"
          />
        </button>

        <!-- 其他按钮使用 view 标签 -->

        <view
          v-else
          :data-name="item.name"
          :class="_.cls(classPrefix + '__item', [['active', item.isActive]])"
          @click.stop="handleActionClick"
        >
          <t-icon
            :name="item.isActive ? iconActiveMap[item.name] : iconMap[item.name]"
            size="40rpx"
          />
        </view>
      </block>
    </view>
  </view>
</template>
<script>
import tIcon from '@tdesign/uniapp/icon/icon.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';
import { uniComponent } from '@tdesign/uniapp/common/src/index';
import _ from '@tdesign/uniapp/common/utils.wxs';


const name = `${prefix}-chat-actionbar`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    tIcon,
  },

  props: {
    ...props,
  },

  data() {
    return {
      actions: [],
      classPrefix: name,
      pComment: '',
      iconMap: {
        good: 'thumb-up',
        bad: 'thumb-down',
        replay: 'refresh',
        copy: 'copy',
        share: 'share-1',
      },
      iconActiveMap: {
        good: 'thumb-up-filled',
        bad: 'thumb-down-filled',
      },

      _,
    };
  },

  watch: {
    comment: {
      handler(newVal) {
        this.pComment = newVal || '';
      },
      immediate: true,
      deep: true,
    },
    actionBar: {
      handler() {
        this.setActions();
      },
      immediate: true,
      deep: true,
    },
    pComment: {
      handler() {
        this.setActions();
      },
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    this.pComment = this.comment || '';
    this.setActions();
  },

  methods: {
    filterSpecialChars(content) {
      // 保留段落、换行和缩进 - 不处理换行符和行首空白
      let result = content;

      // 先处理表格格式 - 保留表格语法
      const tableRegex = /^(\s*\|.*\|.*\n\s*\|[-: ]+\|.*\n(\s*\|.*\|.*\n)*)/gm;
      const tables = [];
      result = result.replace(tableRegex, (match) => {
        // 在表格内容中去除特殊引用格式和强调语法
        const cleanedTable = match
          .replace(/\[\d+(?:,\d+)*\]\(@ref\)/g, '')
          .replace(/(\*\*|__)(.*?)\1|(\*|_)(.*?)\3/g, '$2$4')
        // 替换表格中的<br>标签为换行符
          .replace(/<br\s*\/?>/gi, '\n');
        tables.push(cleanedTable);
        return `%%TABLE${tables.length - 1}%%`; // 用占位符临时替换表格
      });

      // 替换标题（保留行首缩进）
      result = result.replace(/^(\s*)#{1,6}\s+/gm, '$1');
      // 替换强调语法
      result = result.replace(/(\*\*|__)(.*?)\1|(\*|_)(.*?)\3/g, '$2$4');
      // 替换图片
      result = result.replace(/!\[.*?\]\(.*?\)/g, '');
      // 处理特殊引用格式（非表格部分）
      result = result.replace(/\[\d+(?:,\d+)*\]\(@ref\)/g, '');
      // 处理其他特殊字符但保留列表标记(-*+)、换行符和缩进
      const specialChars = /(\\|`|\{|\}|\[|\]|\(|\)|\||！|@ref|\([@#]\w+\))/g;
      result = result.replace(specialChars, '');
      // 处理可能剩余的 [数字] 格式
      result = result.replace(/\[\d+\]/g, '');
      // 替换非表格部分的<br>标签为换行符
      result = result.replace(/<br\s*\/?>/gi, '\n');

      // 恢复表格格式
      result = result.replace(/%%TABLE(\d+)%%/g, (match, index) => tables[parseInt(index, 10)] || '');

      // 清理多余的空行但保留单个换行和缩进
      return result.replace(/\n{3,}/g, '\n\n').trim();
    },

    handleActionClick(e) {
      const { name } = e.currentTarget.dataset;
      if (name === 'copy' && this.content) {
        this.handleCopy();
      } else if (name === 'good') {
        const isActive = this.pComment === 'good';
        this.pComment = isActive ? undefined : 'good';

        this.$emit('actions', {
          name,
          active: !isActive,
        });
      } else if (name === 'bad') {
        const isActive = this.pComment === 'bad';
        this.pComment = isActive ? undefined : 'bad';

        this.$emit('actions', {
          name,
          active: !isActive,
        });
      } else {
        this.$emit('actions', {
          name,
        });
      }
    },

    handleCopy() {
      if (!this.content) return;
      const copyContent = this.copyMode === 'markdown' ? this.content : this.filterSpecialChars(this.content);
      this.$emit('actions', {
        name: 'copy',
        data: copyContent,
      });
    },

    setActions() {
      const baseActions = [];
      if (Array.isArray(this.actionBar)) {
        this.actionBar.forEach((item) => {
          if (item === 'good' || item === 'bad') {
            baseActions.push({
              name: item,
              isActive: this.pComment === item,
            });
          } else {
            baseActions.push({
              name: item,
              isActive: false,
            });
          }
        });
      }
      this.actions = baseActions;
    },
  },
});
</script>
<style scoped>
@import './chat-actionbar.css';
</style>
