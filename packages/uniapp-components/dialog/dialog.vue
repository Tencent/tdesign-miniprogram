<template>
  <t-popup
    name="dialog"
    :custom-style="tools._style([customStyle])"
    :t-class="classPrefix + '__wrapper'"
    :visible="dataVisible"
    :show-overlay="dataShowOverlay"
    :close-on-overlay-click="dataCloseOnOverlayClick"
    :prevent-scroll-through="dataPreventScrollThrough"
    :overlay-props="dataOverlayProps"
    :z-index="dataZIndex"
    placement="center"
    :using-custom-navbar="dataUsingCustomNavbar"
    @visible-change="overlayClick"
  >
    <template #content>
      <view
        :class="classPrefix + ' ' + tClass"
      >
        <slot name="top" />
        <view
          v-if="dataCloseBtn"
          :class="classPrefix + '__close-btn'"
          @click="onClose"
        >
          <template
            v-if="tools.isObject(dataCloseBtn)"
          >
            <t-icon
              :custom-style="dataCloseBtn.style || ''"
              :prefix="dataCloseBtn.prefix"
              :name="dataCloseBtn.name || 'close'"
              :size="dataCloseBtn.size || 22"
              :color="dataCloseBtn.color"
              :aria-hidden="true"
              :aria-label="dataCloseBtn.ariaLabel"
              :aria-role="dataCloseBtn.ariaRole"
            />
          </template>
          <t-icon
            v-else
            name="close"
            size="44rpx"
          />
        </view>
        <view :class="classPrefix + '__content ' + tClassContent">
          <view
            v-if="dataTitle"
            :class="classPrefix + '__header'"
          >
            {{ dataTitle }}
          </view>
          <slot name="title" />
          <view
            v-if="dataContent"
            :class="classPrefix + '__body'"
          >
            <text :class="classPrefix + '__body-text'">
              {{ dataContent }}
            </text>
          </view>
          <slot name="content" />
        </view>
        <slot name="middle" />
        <view
          :class="
            tools.cls(classPrefix + '__footer', [
              ['column', dataButtonLayout === 'vertical'],
              ['full', buttonVariant == 'text' && (!dataActions || dataActions.length == 0)]
            ])
          "
        >
          <template v-if="dataActions">
            <t-button
              v-for="(actionItem, index) in dataActions"
              :key="index"
              :t-id="actionItem.tId"
              :custom-style="actionItem.style"
              :block="coalesce(actionItem.block, true)"
              :t-class="useVirtualHost ? getActionClass(classPrefix, dataButtonLayout, actionItem, tClassAction) : ''"
              :class="!useVirtualHost ? getActionClass(classPrefix, dataButtonLayout, actionItem, tClassAction) : ''"
              :disabled="actionItem.disabled"
              :data-type="'action'"
              :data-extra="coalesce(actionItem.index, index)"
              :custom-dataset="actionItem.customDataset"
              :content="actionItem.content"
              :icon="actionItem.icon"
              :loading="actionItem.loading"
              :loading-props="actionItem.loadingProps"
              :theme="actionItem.theme"
              :ghost="actionItem.ghost"
              :shape="actionItem.shape"
              :size="actionItem.size"
              :variant="actionItem.variant"
              :open-type="actionItem.openType"
              :hover-class="actionItem.hoverClass"
              :hover-stop-propagation="actionItem.hoverStopPropagation"
              :hover-start-time="actionItem.hoverStartTime"
              :hover-stay-time="actionItem.hoverStayTime"
              :lang="actionItem.lang"
              :session-from="actionItem.sessionFrom"
              :send-message-title="actionItem.sendMessageTitle"
              :send-message-path="actionItem.sendMessagePath"
              :send-message-img="actionItem.sendMessageImg"
              :app-parameter="actionItem.appParameter"
              :show-message-card="actionItem.showMessageCard"
              :aria-label="actionItem.ariaLabel"
              @click="onTplButtonTap($event, { type: 'action', extra: index })"
              @getuserinfo="onTplButtonTap($event, { type: 'action', extra: index })"
              @contact="onTplButtonTap($event, { type: 'action', extra: index })"
              @getphonenumber="onTplButtonTap($event, { type: 'action', extra: index })"
              @error="onTplButtonTap($event, { type: 'action', extra: index })"
              @opensetting="onTplButtonTap($event, { type: 'action', extra: index })"
              @launchapp="onTplButtonTap($event, { type: 'action', extra: index })"
              @agreeprivacyauthorization="onTplButtonTap($event, { type: 'action', extra: index })"
            >
              <slot v-if="actionItem.useDefaultSlot || false" />
            </t-button>
          </template>
          <slot name="actions" />
          <template v-if="_cancel">
            <t-button
              :t-id="_cancel.tId"
              :custom-style="_cancel.style"
              :block="_cancel.block"
              :t-class="_cancel.tClass"
              :class="_cancel.class"
              :disabled="_cancel.disabled"
              :data-type="'cancel'"
              :data-extra="_cancel.index"
              :custom-dataset="_cancel.customDataset"
              :content="_cancel.content"
              :icon="_cancel.icon"
              :loading="_cancel.loading"
              :loading-props="_cancel.loadingProps"
              :theme="_cancel.theme"
              :ghost="_cancel.ghost"
              :shape="_cancel.shape"
              :size="_cancel.size"
              :variant="_cancel.variant"
              :open-type="_cancel.openType"
              :hover-class="_cancel.hoverClass"
              :hover-stop-propagation="_cancel.hoverStopPropagation"
              :hover-start-time="_cancel.hoverStartTime"
              :hover-stay-time="_cancel.hoverStayTime"
              :lang="_cancel.lang"
              :session-from="_cancel.sessionFrom"
              :send-message-title="_cancel.sendMessageTitle"
              :send-message-path="_cancel.sendMessagePath"
              :send-message-img="_cancel.sendMessageImg"
              :app-parameter="_cancel.appParameter"
              :show-message-card="_cancel.showMessageCard"
              :aria-label="_cancel.ariaLabel"
              @click="onCancel($event, { type: 'action', extra: 0 })"
              @getuserinfo="onCancel($event, { type: 'action', extra: 0 })"
              @contact="onCancel($event, { type: 'action', extra: 0 })"
              @getphonenumber="onCancel($event, { type: 'action', extra: 0 })"
              @error="onCancel($event, { type: 'action', extra: 0 })"
              @opensetting="onCancel($event, { type: 'action', extra: 0 })"
              @launchapp="onCancel($event, { type: 'action', extra: 0 })"
              @agreeprivacyauthorization="onCancel($event, { type: 'action', extra: 0 })"
            >
              <slot v-if="_cancel.useDefaultSlot || false" />
            </t-button>
          </template>
          <slot name="cancel-btn" />
          <template v-if="_confirm">
            <t-button
              :t-id="_confirm.tId"
              :custom-style="_confirm.style"
              :block="_confirm.block"
              :t-class="_confirm.tClass"
              :class="_confirm.class"
              :disabled="_confirm.disabled"
              :data-type="'confirm'"
              :data-extra="_confirm.index"
              :custom-dataset="_confirm.customDataset"
              :content="_confirm.content"
              :icon="_confirm.icon"
              :loading="_confirm.loading"
              :loading-props="_confirm.loadingProps"
              :theme="_confirm.theme || 'primary'"
              :ghost="_confirm.ghost"
              :shape="_confirm.shape"
              :size="_confirm.size"
              :variant="_confirm.variant"
              :open-type="_confirm.openType"
              :hover-class="_confirm.hoverClass"
              :hover-stop-propagation="_confirm.hoverStopPropagation"
              :hover-start-time="_confirm.hoverStartTime"
              :hover-stay-time="_confirm.hoverStayTime"
              :lang="_confirm.lang"
              :session-from="_confirm.sessionFrom"
              :send-message-title="_confirm.sendMessageTitle"
              :send-message-path="_confirm.sendMessagePath"
              :send-message-img="_confirm.sendMessageImg"
              :app-parameter="_confirm.appParameter"
              :show-message-card="_confirm.showMessageCard"
              :aria-label="_confirm.ariaLabel"
              @click="onConfirm($event, { type: 'action', extra: 0 })"
              @getuserinfo="onConfirm($event, { type: 'action', extra: 0 })"
              @contact="onConfirm($event, { type: 'action', extra: 0 })"
              @getphonenumber="onConfirm($event, { type: 'action', extra: 0 })"
              @error="onTplButtonConfirmonTap($event, { type: 'action', extra: 0 })"
              @opensetting="onConfirm($event, { type: 'action', extra: 0 })"
              @launchapp="onConfirm($event, { type: 'action', extra: 0 })"
              @agreeprivacyauthorization="onConfirm($event, { type: 'action', extra: 0 })"
            >
              <slot v-if="_confirm.useDefaultSlot || false" />
            </t-button>
          </template>
          <slot name="confirm-btn" />
        </view>
      </view>
    </template>
  </t-popup>
</template>
<script>
import tPopup from '../popup/popup';
import tIcon from '../icon/icon';
import tButton from '../button/button';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { toCamel, coalesce } from '../common/utils';
import { isObject } from '../common/validator';
import useCustomNavbar from '../mixins/using-custom-navbar';
import tools from '../common/utils.wxs';
import { getActionClass } from './computed.js';
import { getFunctionalMixin } from '../common/functional/mixin';
import { canUseVirtualHost } from '../common/version';

const name = `${prefix}-dialog`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-confirm`,
    `${prefix}-class-cancel`,
    `${prefix}-class-action`,
  ],
  mixins: [getFunctionalMixin(props), useCustomNavbar],
  components: {
    tPopup,
    tIcon,
    tButton,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      buttonVariant: 'text',
      tools,

      _confirm: null,
      _cancel: null,
      useVirtualHost: canUseVirtualHost(),
    };
  },
  watch: {
    dataConfirmBtn: {
      handler() {
        this.onWatchBtn(this.dataConfirmBtn, this.dataCancelBtn);
      },
      immediate: true,
    },
    dataCancelBtn: {
      handler() {
        this.onWatchBtn(this.dataConfirmBtn, this.dataCancelBtn);
      },
      immediate: true,
    },
  },
  methods: {
    coalesce,
    getActionClass,
    onWatchBtn(confirm, cancel) {
      const { prefix, classPrefix, dataButtonLayout } = this;
      const rect = { buttonVariant: 'text' };
      const useBaseVariant = [confirm, cancel].some(item => isObject(item) && item.variant && item.variant !== 'text');
      const buttonMap = { confirm, cancel };
      const cls = [`${classPrefix}__button`];
      const externalCls = [];

      if (useBaseVariant) {
        rect.buttonVariant = 'base';
        cls.push(`${classPrefix}__button--${dataButtonLayout}`);
      } else {
        cls.push(`${classPrefix}__button--text`);
        externalCls.push(`${classPrefix}-button`);
      }

      const useVirtualHost = canUseVirtualHost();

      Object.keys(buttonMap).forEach((key) => {
        const btn = buttonMap[key];
        const rootClass = [...cls, `${classPrefix}__button--${key}`];
        const tClass = [...externalCls, this[toCamel(`${prefix}-class-${key}`)], ...rootClass].join(' ');

        const base = {
          block: true,
          rootClass,

          tClass: useVirtualHost ? tClass : '',
          class: !useVirtualHost ? tClass : '',

          variant: rect.buttonVariant,
          openType: '',
        };

        if (key === 'cancel' && rect.buttonVariant === 'base') {
          base.theme = 'light';
        }

        if (typeof btn === 'string') {
          rect[`_${key}`] = { ...base, content: btn };
        } else if (btn && typeof btn === 'object') {
          rect[`_${key}`] = { ...base, ...btn };
        } else {
          rect[`_${key}`] = null;
        }
      });

      Object.keys(rect).forEach((key) => {
        this[key] = rect[key];
      });
    },
    onTplButtonTap(e, { type, extra }) {
      const evtType = e.type;
      const button = this[`_${type}`];
      const cbName = `bind${evtType}`;

      if (type === 'action') {
        this.onActionTap(extra);
        return;
      }

      if (typeof button?.[cbName] === 'function') {
        const closeFlag = button[cbName](e);
        if (closeFlag) {
          this.close();
        }
      }

      const hasOpenType = !!button?.openType;
      if (!hasOpenType && ['confirm', 'cancel'].includes(type)) {
        this[toCamel(`on-${type}`)]?.(type);
      }

      if (evtType !== 'click') {
        const success = e.detail?.errMsg?.indexOf('ok') > -1;
        this.$emit(success ? 'open-type-event' : 'open-type-error-event', e.detail);
      }
    },

    onConfirm(e) {
      this.$emit('confirm', { e });

      if (this._onConfirm) {
        this._onConfirm({ trigger: 'confirm' });
        this.close();
      }
    },

    onCancel(e) {
      const trigger = { trigger: 'cancel' };

      this.$emit('cancel', { e });
      this.$emit('close', trigger);

      if (this._onCancel) {
        this._onCancel(trigger);
        this.close();
      }
    },

    onClose() {
      const trigger = { trigger: 'close-btn' };

      this.$emit('close', trigger);
      this._onCancel?.(trigger);
      this.close();
    },

    close() {
      this.dataVisible = false;
    },

    overlayClick(e) {
      this.$emit('overlay-click', { e });

      if (this.dataCloseOnOverlayClick) {
        const trigger = { trigger: 'overlay' };

        this.$emit('close', trigger);
        this._onCancel?.(trigger);
        this.close();
      }
    },

    onActionTap(index) {
      this.$emit('action', { index });
      if (this._onAction) {
        this._onAction({ index });
        this.close();
      }
    },
  },
});
</script>
<style scoped>
@import './dialog.css';
</style>
