<template>
  <!-- 普通模式 -->
  <view v-if="placement !== 'longpress'" :class="[classPrefix, placement]" :style="_._style([customStyle])">
    <view :class="classPrefix + '__inner ' + classPrefix + '__inner--column'">
      <view :class="classPrefix + '__left ' + classPrefix + '__item'">
        <slot name="prefix" />
      </view>
      <block v-for="(item, index) in actions" :key="index">
        <!-- 分享按钮使用 button 标签 -->
        <button
          v-if="item.name === 'share'"
          :data-name="item.name"
          :class="_.cls(classPrefix + '__item', [['active', item.isActive]])"
          :open-type="content ? 'share' : 'none'"
          :data-chat-id="chatId"
          @click="handleActionClick"
        >
          <t-icon :name="item.isActive ? iconActiveMap[item.name] : iconMap[item.name]" size="40rpx" />
        </button>

        <!-- 其他按钮使用 view 标签 -->
        <view
          v-else
          :data-name="item.name"
          :class="_.cls(classPrefix + '__item', [['active', item.isActive]])"
          @click="handleActionClick"
        >
          <t-icon :name="item.isActive ? iconActiveMap[item.name] : iconMap[item.name]" size="40rpx" />
        </view>
      </block>
    </view>
  </view>

  <!-- 长按弹出层模式 -->
  <view v-else :class="[classPrefix, classPrefix + '__popover-skeleton']" :style="popoverPosition">
    <t-popover
      ref="popover"
      placement="bottom"
      theme="dark"
      :visible="longpressVisible"
      :custom-style="popoverStyle"
      @visible-change="onVisibleChange"
    >
      <view :class="[classPrefix, classPrefix + '__popover-skeleton__inner']" />
      <template #content>
        <view
          :class="[classPrefix, classPrefix + '--popover', 'popover-visible']"
          :style="_._style([customStyle, widthStyle])"
        >
          <view :class="classPrefix + '__inner ' + classPrefix + '__inner--column'">
            <view :class="classPrefix + '__left ' + classPrefix + '__item--popover'">
              <slot name="prefix" />
            </view>
            <block v-for="(item, index) in actions" :key="index">
              <!-- 分享按钮使用 button 标签 -->
              <button
                v-if="item.name === 'share'"
                :data-name="item.name"
                :class="_.cls(classPrefix + '__item--popover', [['active', item.isActive]])"
                :open-type="content ? 'share' : 'none'"
                :data-chat-id="chatId"
                @click="handleActionClick"
              >
                <t-icon :name="iconMap[item.name]" size="40rpx" />
                <view :class="classPrefix + '__item__text'">
                  {{ item.text }}
                </view>
              </button>

              <!-- 其他按钮使用 view 标签 -->
              <view
                v-else
                :data-name="item.name"
                :class="_.cls(classPrefix + '__item--popover', [['active', item.isActive]])"
                @click="handleActionClick"
              >
                <t-icon
                  :name="iconMap[item.name]"
                  size="40rpx"
                  :custom-style="item.name === 'quote' ? 'transform: scaleX(-1)' : ''"
                />
                <view :class="classPrefix + '__item__text'">
                  {{ item.text }}
                </view>
              </view>
            </block>
          </view>
        </view>
      </template>
    </t-popover>
  </view>
</template>
<script>
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import tPopover from 'tdesign-uniapp/popover/popover.vue';
import { prefix } from 'tdesign-uniapp/common/config';
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
    tPopover,
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
        quote: 'enter',
      },
      iconActiveMap: {
        good: 'thumb-up-filled',
        bad: 'thumb-down-filled',
      },
      widthStyle: '',
      popoverStyle: 'transition: none;position: fixed;',
      popoverPosition: '',
      longpressVisible: false,

      _,
    };
  },

  watch: {
    comment: {
      handler(newVal) {
        this.setPComment(newVal);
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
    placement: {
      handler() {
        this.setActions();
      },
      immediate: true,
      deep: true,
    },
    longPressPosition(newVal) {
      if (this.placement === 'longpress') {
        if (newVal) {
          this.showPopover(newVal);
        } else {
          this.hidePopover();
        }
      }
    },
  },

  mounted() {
    this.setPComment(this.comment);
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
          chatId: this.chatId,
        });
      } else if (name === 'bad') {
        const isActive = this.pComment === 'bad';
        this.pComment = isActive ? undefined : 'bad';

        this.$emit('actions', {
          name,
          active: !isActive,
          chatId: this.chatId,
        });
      } else {
        this.$emit('actions', {
          name,
          chatId: this.chatId,
        });
      }

      this.onVisibleChange({ detail: { visible: false } });
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
      const text = {
        replay: '刷新',
        copy: '复制',
        good: '点赞',
        bad: '点踩',
        share: '分享',
        quote: '引用',
      };

      const baseActions = [];
      let dataActions = [];
      if (this.placement === 'longpress') {
        dataActions = ['quote', 'copy', 'share'];
      } else if (Array.isArray(this.actionBar)) {
        dataActions = this.actionBar;
      }
      dataActions.forEach((item) => {
        if (item === 'good' || item === 'bad') {
          baseActions.push({
            name: item,
            isActive: this.pComment === item,
            text: text[item] || item,
          });
        } else {
          baseActions.push({
            name: item,
            isActive: false,
            text: text[item] || item,
          });
        }
      });
      this.actions = baseActions;
    },

    setPComment(newVal) {
      this.pComment = newVal || '';
    },

    showPopover(pos) {
      this.widthStyle = `width: ${this.actions.length * 128 + (this.actions.length - 1) * 8}rpx`;
      this.popoverPosition = `top:${pos.y}px;left:${pos.x}px`;
      this.longpressVisible = true;

      // 延迟检查边界，确保popover已经渲染
      this.$nextTick(() => {
        setTimeout(() => {
          const child = this.$refs.popover;
          const query = uni.createSelectorQuery().in(child);

          query.select('.t-popover').boundingClientRect();
          query.exec((res) => {
            const [rect] = res;
            console.log('meowres', res);
            if (rect) {
              // 获取屏幕宽度
              const systemInfo = uni.getSystemInfoSync();
              const { screenWidth } = systemInfo;
              const elementRightEdge = rect.left + rect.width;

              if (elementRightEdge > screenWidth) {
                // 超出右边界，调整到右侧
                this.popoverStyle = 'transition: none;position:fixed; left: unset !important; right: 16rpx !important;';
              } else if (rect.left <= 0) {
                // 超出左边界，调整到左侧
                this.popoverStyle = 'transition: none;position:fixed; left: 16rpx !important;';
              }
            }
          });
        }, 200);
      });
    },

    hidePopover() {
      this.onVisibleChange({ detail: { visible: false } });
    },

    onVisibleChange(e) {
      const visible = e.detail ? e.detail.visible : e.visible;
      this.longpressVisible = visible;
      if (!visible) {
        setTimeout(() => {
          this.popoverPosition = '';
          this.popoverStyle = 'transition: none;position: fixed;';
        }, 200);
      }
    },
  },
});
</script>
<style scoped>
@import './chat-actionbar.css';
</style>
