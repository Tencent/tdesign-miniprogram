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
          <template v-if="innerCancel">
            <t-button
              :t-id="innerCancel.tId"
              :custom-style="innerCancel.style"
              :block="innerCancel.block"
              :t-class="innerCancel.tClass"
              :class="innerCancel.class"
              :disabled="innerCancel.disabled"
              :data-type="'cancel'"
              :data-extra="innerCancel.index"
              :custom-dataset="innerCancel.customDataset"
              :content="innerCancel.content"
              :icon="innerCancel.icon"
              :loading="innerCancel.loading"
              :loading-props="innerCancel.loadingProps"
              :theme="innerCancel.theme"
              :ghost="innerCancel.ghost"
              :shape="innerCancel.shape"
              :size="innerCancel.size"
              :variant="innerCancel.variant"
              :open-type="innerCancel.openType"
              :hover-class="innerCancel.hoverClass"
              :hover-stop-propagation="innerCancel.hoverStopPropagation"
              :hover-start-time="innerCancel.hoverStartTime"
              :hover-stay-time="innerCancel.hoverStayTime"
              :lang="innerCancel.lang"
              :session-from="innerCancel.sessionFrom"
              :send-message-title="innerCancel.sendMessageTitle"
              :send-message-path="innerCancel.sendMessagePath"
              :send-message-img="innerCancel.sendMessageImg"
              :app-parameter="innerCancel.appParameter"
              :show-message-card="innerCancel.showMessageCard"
              :aria-label="innerCancel.ariaLabel"
              @click="onCancel($event, { type: 'action', extra: 0 })"
              @getuserinfo="onCancel($event, { type: 'action', extra: 0 })"
              @contact="onCancel($event, { type: 'action', extra: 0 })"
              @getphonenumber="onCancel($event, { type: 'action', extra: 0 })"
              @error="onCancel($event, { type: 'action', extra: 0 })"
              @opensetting="onCancel($event, { type: 'action', extra: 0 })"
              @launchapp="onCancel($event, { type: 'action', extra: 0 })"
              @agreeprivacyauthorization="onCancel($event, { type: 'action', extra: 0 })"
            >
              <slot v-if="innerCancel.useDefaultSlot || false" />
            </t-button>
          </template>
          <slot name="cancel-btn" />
          <template v-if="innerConfirm">
            <t-button
              :t-id="innerConfirm.tId"
              :custom-style="innerConfirm.style"
              :block="innerConfirm.block"
              :t-class="innerConfirm.tClass"
              :class="innerConfirm.class"
              :disabled="innerConfirm.disabled"
              :data-type="'confirm'"
              :data-extra="innerConfirm.index"
              :custom-dataset="innerConfirm.customDataset"
              :content="innerConfirm.content"
              :icon="innerConfirm.icon"
              :loading="innerConfirm.loading"
              :loading-props="innerConfirm.loadingProps"
              :theme="innerConfirm.theme || 'primary'"
              :ghost="innerConfirm.ghost"
              :shape="innerConfirm.shape"
              :size="innerConfirm.size"
              :variant="innerConfirm.variant"
              :open-type="innerConfirm.openType"
              :hover-class="innerConfirm.hoverClass"
              :hover-stop-propagation="innerConfirm.hoverStopPropagation"
              :hover-start-time="innerConfirm.hoverStartTime"
              :hover-stay-time="innerConfirm.hoverStayTime"
              :lang="innerConfirm.lang"
              :session-from="innerConfirm.sessionFrom"
              :send-message-title="innerConfirm.sendMessageTitle"
              :send-message-path="innerConfirm.sendMessagePath"
              :send-message-img="innerConfirm.sendMessageImg"
              :app-parameter="innerConfirm.appParameter"
              :show-message-card="innerConfirm.showMessageCard"
              :aria-label="innerConfirm.ariaLabel"
              @click="onConfirm($event, { type: 'action', extra: 0 })"
              @getuserinfo="onConfirm($event, { type: 'action', extra: 0 })"
              @contact="onConfirm($event, { type: 'action', extra: 0 })"
              @getphonenumber="onConfirm($event, { type: 'action', extra: 0 })"
              @error="onTplButtonConfirmonTap($event, { type: 'action', extra: 0 })"
              @opensetting="onConfirm($event, { type: 'action', extra: 0 })"
              @launchapp="onConfirm($event, { type: 'action', extra: 0 })"
              @agreeprivacyauthorization="onConfirm($event, { type: 'action', extra: 0 })"
            >
              <slot v-if="innerConfirm.useDefaultSlot || false" />
            </t-button>
          </template>
          <slot name="confirm-btn" />
        </view>
      </view>
    </template>
  </t-popup>
</template>
<script>
import TPopup from '../popup/popup';
import TIcon from '../icon/icon';
import TButton from '../button/button';
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
    TPopup,
    TIcon,
    TButton,
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

      innerConfirm: null,
      innerCancel: null,
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
<style scoped src="./dialog.css"></style>
