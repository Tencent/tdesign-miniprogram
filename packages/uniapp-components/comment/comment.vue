<template>
  <view :style="'' + tools._style([customStyle])" :class="[classPrefix, tClass]">
    <view
      :class="[tools.cls(classPrefix + '__inner', [['active', innerActive]])]"
      @longpress="handleLongPress"
      @touchend="handlePressEnd"
      @touchcancel="handlePressEnd"
    >
      <view :class="classPrefix + '__avatar ' + tClassAvatar">
        <t-avatar
          v-if="avatarData"
          :t-class="avatarData.tClass || ''"
          :t-class-image="avatarData.tClassImage || ''"
          :t-class-icon="avatarData.tClassIcon || ''"
          :t-class-alt="avatarData.tClassAlt || ''"
          :t-class-content="avatarData.tClassContent || ''"
          :alt="avatarData.alt || ''"
          :badge-props="avatarData.badgeProps || {}"
          :bordered="avatarData.bordered || false"
          :hide-on-load-failed="avatarData.hideOnLoadFailed || false"
          :icon="avatarData.icon || ''"
          :image="avatarData.image || ''"
          :image-props="avatarData.imageProps || null"
          :shape="avatarData.shape || ''"
          :size="avatarData.size || ''"
        />
        <slot v-else name="avatar" />
      </view>
      <view :class="classPrefix + '__detail'">
        <view :class="classPrefix + '__author ' + tClassAuthor">
          <block v-if="author">{{ author }}</block>
          <slot v-else name="author" />
        </view>
        <view :class="classPrefix + '__content ' + tClassContent">
          <block v-if="content">{{ content }}</block>
          <slot v-else name="content" />
        </view>
        <view
          v-if="datetime || (actions && actions.length) || $slots.datetime || $slots.actions"
          :class="classPrefix + '__bottom'"
        >
          <view v-if="datetime" :class="classPrefix + '__date ' + tClassDatetime">{{ datetime }}</view>
          <view v-else-if="$slots.datetime" :class="classPrefix + '__date ' + tClassDatetime">
            <slot name="datetime" />
          </view>
          <view :class="classPrefix + '__actions ' + tClassActions">
            <block v-if="actions && actions.length">
              <view v-for="group in actionGroups" :key="group.placement" :class="classPrefix + '__actions-block'">
                <view
                  v-for="action in group.items"
                  :key="action.key"
                  :class="[
                    tools.cls(classPrefix + '__actions-item', [
                      ['with-icon', action.iconData],
                      ['disabled', action.disabled],
                    ]),
                  ]"
                  @click="handleClickActions(action, $event)"
                >
                  <t-icon
                    v-if="action.iconData"
                    :custom-style="action.iconData.style || ''"
                    :t-class="action.iconData.tClass || ''"
                    :prefix="action.iconData.prefix || ''"
                    :name="action.iconData.name || ''"
                    :size="action.iconData.size || ''"
                    :color="action.iconData.color || ''"
                    :aria-hidden="!!action.iconData.ariaHidden"
                    :aria-label="action.iconData.ariaLabel || ''"
                    :aria-role="action.iconData.ariaRole || ''"
                    @click="action.iconData.click || ''"
                  />
                  {{ action.content }}
                </view>
              </view>
            </block>
            <slot v-else name="actions" />
          </view>
        </view>
      </view>
    </view>

    <view :class="classPrefix + '__reply'">
      <view :class="classPrefix + '__reply-body'" :style="replyBodyStyle">
        <view :id="replyInnerId" :class="classPrefix + '__reply-inner'">
          <slot />
          <slot name="reply" />
        </view>
      </view>
      <view v-if="showFolds" :class="classPrefix + '__folds'">
        <view
          v-for="item in foldItems"
          :key="item.key"
          :class="classPrefix + '__folds-item'"
          @click="handleClickFold(item.expand, $event)"
        >
          <text>{{ item.content }}</text>
          <t-icon :name="item.icon" :t-class="classPrefix + '__folds-item-icon'" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import { calcIcon, coalesce } from '../common/utils';
import tools from '../common/utils.wxs';
import usingConfig from '../mixins/using-config';
import TAvatar from '../avatar/avatar';
import TIcon from '../icon/icon';

import props from './props';

const name = `${prefix}-comment`;
const componentName = 'comment';

const DEFAULT_STEP = 3;

const DEFAULT_FOLDS = {
  state: 'collapsed',
  total: 0,
  step: DEFAULT_STEP,
};

let uid = 0;

export default {
  components: {
    TAvatar,
    TIcon,
  },
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [
      `${prefix}-class`,
      `${prefix}-class-avatar`,
      `${prefix}-class-author`,
      `${prefix}-class-content`,
      `${prefix}-class-datetime`,
      `${prefix}-class-actions`,
    ],
    controlledProps: [
      {
        key: 'folds',
        event: 'folds',
      },
    ],
    mixins: [usingConfig({ componentName })],
    props: {
      ...props,
    },
    data() {
      uid += 1;
      const id = `${name}-${Date.now()}-${uid}`;
      return {
        prefix,
        classPrefix: name,
        tools,

        replyInnerId: `${id}-reply-inner`,
        replyBodyHeight: '',

        dataFolds: coalesce(this.folds, this.defaultFolds),
        foldSteps: 0,
        innerActive: false,
        observer: null,
      };
    },
    computed: {
      // 字符串头像作为图片地址，对象头像作为 AvatarProps 透传
      avatarData() {
        const { avatar } = this;
        if (typeof avatar === 'string' && avatar) {
          return { image: avatar };
        }
        return avatar && typeof avatar === 'object' ? avatar : null;
      },
      actionsData() {
        return (this.actions || []).map((action) => {
          const iconData = calcIcon(action.icon);
          return {
            ...action,
            iconData,
          };
        });
      },
      // 按 placement 分组，未指定 placement 归入 start
      actionGroups() {
        const start = [];
        const end = [];
        this.actionsData.forEach((action) => {
          if (action.placement === 'end') {
            end.push(action);
          } else {
            start.push(action);
          }
        });
        return [
          { placement: 'start', items: start },
          { placement: 'end', items: end },
        ];
      },
      curFolds() {
        return this.dataFolds || DEFAULT_FOLDS;
      },
      // 文案优先取业务传入的 content，缺省回退到全局国际化配置
      commentFolds() {
        const userContent = this.curFolds.content || {};
        const globalConfig = this.globalConfig || {};
        const content = {
          collapsed: coalesce(userContent.collapsed, globalConfig.collapsedText),
          partial: coalesce(userContent.partial, [globalConfig.expandMoreText, globalConfig.collapseText]),
          expanded: coalesce(userContent.expanded, globalConfig.collapseText),
        };
        return { ...this.curFolds, content };
      },
      foldState() {
        return this.curFolds.state || 'collapsed';
      },
      showFolds() {
        return (this.commentFolds.total || 0) > 1;
      },
      foldItems() {
        const content = this.commentFolds.content || {};
        const createItem = (key, text, expand) => ({
          key,
          content: text,
          expand,
          icon: expand ? 'chevron-down' : 'chevron-up',
        });

        if (this.foldState === 'partial') {
          const { partial } = content;
          const isText = typeof partial === 'string';
          return [
            createItem('expand', (isText ? partial : partial && partial[0]) || '展开更多回复', true),
            createItem('collapse', isText ? '' : (partial && partial[1]) || '收起', false),
          ];
        }
        if (this.foldState === 'expanded') {
          return [createItem('collapse', content.expanded || '收起', false)];
        }
        return [createItem('expand', content.collapsed || '展开回复', true)];
      },
      replyBodyStyle() {
        return this.replyBodyHeight ? `height:${this.replyBodyHeight}` : '';
      },
    },
    watch: {
      folds: {
        handler(folds) {
          this.dataFolds = folds;
        },
        immediate: true,
      },
      foldState: {
        handler(state) {
          const { step = DEFAULT_STEP } = this.curFolds;
          if (state === 'collapsed') {
            this.foldSteps = 0;
          } else if (state === 'expanded') {
            this.foldSteps = step - 1;
          }
        },
        immediate: true,
      },
      dataFolds: {
        handler() {
          this.$nextTick(() => this.updateReplyHeight());
        },
      },
    },
    mounted() {
      this.initObserver();
    },
    beforeUnmount() {
      this.disconnectObserver();
    },
    // #ifdef VUE2
    beforeDestroy() {
      this.disconnectObserver();
    },
    // #endif
    methods: {
      handleLongPress() {
        this.innerActive = true;
      },
      handlePressEnd() {
        if (this.innerActive) {
          this.innerActive = false;
        }
      },
      handleClickActions(action, e) {
        if (action.disabled) return;
        const eventAction = { ...action };
        delete eventAction.iconData;
        this.$emit('actions', { action: eventAction, e });
      },
      handleClickFold(expand, e) {
        if (expand !== true && expand !== 'true') {
          this.foldSteps = 0;
          this.emitFold({ ...this.curFolds, state: 'collapsed' }, e);
          return;
        }

        const foldSteps = this.foldSteps + 1;
        const step = this.commentFolds.step || DEFAULT_STEP;
        const nextState = foldSteps >= step - 1 ? 'expanded' : 'partial';
        this.foldSteps = foldSteps;
        this.emitFold({ ...this.curFolds, state: nextState }, e);
      },
      emitFold(fold, e) {
        if (this.folds === null || this.folds === undefined) {
          this.dataFolds = fold;
        }
        this.$emit('update:folds', fold);
        this.$emit('folds', { fold, e });
      },
      // 测量回复区内容高度，驱动展开/收起的高度过渡动画
      updateReplyHeight() {
        uni
          .createSelectorQuery()
          .in(this)
          .select(`#${this.replyInnerId}`)
          .boundingClientRect()
          .exec((res) => {
            const [rect] = res || [];
            if (rect) {
              this.replyBodyHeight = `${rect.height}px`;
            }
          });
      },
      initObserver() {
        this.$nextTick(() => this.updateReplyHeight());

        // H5 端监听回复区内容高度变化
        // #ifdef H5
        if (typeof ResizeObserver !== 'undefined') {
          this.observer = new ResizeObserver(() => this.updateReplyHeight());
          this.$nextTick(() => {
            const innerNode = document.querySelector(`#${this.replyInnerId}`);
            if (this.observer && innerNode) {
              this.observer.observe(innerNode);
            }
          });
        }
        // #endif
      },
      disconnectObserver() {
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }
      },
    },
  }),
};
</script>
<style scoped src="./comment.css"></style>
