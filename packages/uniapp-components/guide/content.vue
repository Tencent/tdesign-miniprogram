<template>
  <!-- #ifdef VUE2 -->
  <view>
    <!-- #endif -->
    <slot
      v-if="!title && !body"
      :name="'content-' + current"
    />
    <block v-else>
      <view :class="tClassTooltip">
        <view
          v-if="title"
          :class="tClassTitle + ' ' + classPrefix + '__title--' + modeType"
        >
          {{ title }}
        </view>
        <slot
          v-else
          :name="'title-' + current"
        />
        <view
          v-if="body"
          :class="tClassBody + ' ' + classPrefix + '__body--' + modeType"
        >
          {{ body }}
        </view>
        <slot
          v-else
          :name="'body-' + current"
        />
      </view>
      <view
        v-if="current !== -1"
        :class="tClassFooter + ' ' + classPrefix + '__footer ' + classPrefix + '__footer--' + modeType"
      >
        <block
          v-if="current < steps.length - 1 && !hideSkip"
          name="button"
        >
          <t-button
            :t-id="skipButton.tId"
            :custom-style="skipButton.style"
            :block="skipButton.block"
            :t-class="useVirtualHost ? skipButton.tClass : ''"
            :class="!useVirtualHost ? skipButton.tClass : ''"
            :disabled="skipButton.disabled"
            :data-type="skipButton.dataType"
            :data-extra="skipButton.dataExtra"
            :custom-dataset="skipButton.customDataset"
            :content="skipButton.content"
            :icon="skipButton.icon"
            :loading="skipButton.loading"
            :loading-props="skipButton.loadingProps"
            :theme="skipButton.theme"
            :ghost="skipButton.ghost"
            :shape="skipButton.shape"
            :size="skipButton.size"
            :variant="skipButton.variant"
            :open-type="skipButton.openType"
            :hover-class="skipButton.hoverClass"
            :hover-stop-propagation="skipButton.hoverStopPropagation"
            :hover-start-time="skipButton.hoverStartTime"
            :hover-stay-time="skipButton.hoverStayTime"
            :lang="skipButton.lang"
            :session-from="skipButton.sessionFrom"
            :send-message-title="skipButton.sendMessageTitle"
            :send-message-path="skipButton.sendMessagePath"
            :send-message-img="skipButton.sendMessageImg"
            :app-parameter="skipButton.appParameter"
            :show-message-card="skipButton.showMessageCard"
            :aria-label="skipButton.ariaLabel"
            @click="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @getuserinfo="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @contact="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @getphonenumber="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @error="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @opensetting="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @launchapp="(e) => onTplButtonTap(e, { type: skipButton.type })"
            @agreeprivacyauthorization="(e) => onTplButtonTap(e, { type: skipButton.type })"
          />
        </block>
        <block
          v-else-if="current === steps.length - 1 && !hideBack"
          name="button"
        >
          <t-button
            :t-id="backButton.tId"
            :custom-style="backButton.style"
            :block="backButton.block"
            :t-class="useVirtualHost ? backButton.tClass : ''"
            :class="!useVirtualHost ? backButton.tClass : ''"
            :disabled="backButton.disabled"
            :data-type="backButton.dataType"
            :data-extra="backButton.dataExtra"
            :custom-dataset="backButton.customDataset"
            :content="backButton.content"
            :icon="backButton.icon"
            :loading="backButton.loading"
            :loading-props="backButton.loadingProps"
            :theme="backButton.theme"
            :ghost="backButton.ghost"
            :shape="backButton.shape"
            :size="backButton.size"
            :variant="backButton.variant"
            :open-type="backButton.openType"
            :hover-class="backButton.hoverClass"
            :hover-stop-propagation="backButton.hoverStopPropagation"
            :hover-start-time="backButton.hoverStartTime"
            :hover-stay-time="backButton.hoverStayTime"
            :lang="backButton.lang"
            :session-from="backButton.sessionFrom"
            :send-message-title="backButton.sendMessageTitle"
            :send-message-path="backButton.sendMessagePath"
            :send-message-img="backButton.sendMessageImg"
            :app-parameter="backButton.appParameter"
            :show-message-card="backButton.showMessageCard"
            :aria-label="backButton.ariaLabel"
            @click="(e) => onTplButtonTap(e, { type: backButton.type })"
            @getuserinfo="(e) => onTplButtonTap(e, { type: backButton.type })"
            @contact="(e) => onTplButtonTap(e, { type: backButton.type })"
            @getphonenumber="(e) => onTplButtonTap(e, { type: backButton.type })"
            @error="(e) => onTplButtonTap(e, { type: backButton.type })"
            @opensetting="(e) => onTplButtonTap(e, { type: backButton.type })"
            @launchapp="(e) => onTplButtonTap(e, { type: backButton.type })"
            @agreeprivacyauthorization="(e) => onTplButtonTap(e, { type: backButton.type })"
          />
        </block>
        <block
          v-if="current < steps.length - 1"
          name="button"
        >
          <t-button
            :t-id="nextButton.tId"
            :custom-style="nextButton.style"
            :block="nextButton.block"
            :t-class="useVirtualHost ? nextButton.tClass : ''"
            :class="!useVirtualHost ? nextButton.tClass : ''"
            :disabled="nextButton.disabled"
            :data-type="nextButton.dataType"
            :data-extra="nextButton.dataExtra"
            :custom-dataset="nextButton.customDataset"
            :content="nextButton.content"
            :icon="nextButton.icon"
            :loading="nextButton.loading"
            :loading-props="nextButton.loadingProps"
            :theme="nextButton.theme"
            :ghost="nextButton.ghost"
            :shape="nextButton.shape"
            :size="nextButton.size"
            :variant="nextButton.variant"
            :open-type="nextButton.openType"
            :hover-class="nextButton.hoverClass"
            :hover-stop-propagation="nextButton.hoverStopPropagation"
            :hover-start-time="nextButton.hoverStartTime"
            :hover-stay-time="nextButton.hoverStayTime"
            :lang="nextButton.lang"
            :session-from="nextButton.sessionFrom"
            :send-message-title="nextButton.sendMessageTitle"
            :send-message-path="nextButton.sendMessagePath"
            :send-message-img="nextButton.sendMessageImg"
            :app-parameter="nextButton.appParameter"
            :show-message-card="nextButton.showMessageCard"
            :aria-label="nextButton.ariaLabel"
            @click="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @getuserinfo="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @contact="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @getphonenumber="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @error="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @opensetting="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @launchapp="(e) => onTplButtonTap(e, { type: nextButton.type })"
            @agreeprivacyauthorization="(e) => onTplButtonTap(e, { type: nextButton.type })"
          />
        </block>
        <block
          v-else
          name="button"
        >
          <t-button
            :t-id="finishButton.tId"
            :custom-style="finishButton.style"
            :block="finishButton.block"
            :t-class="useVirtualHost ? finishButton.tClass : ''"
            :class="!useVirtualHost ? finishButton.tClass : ''"
            :disabled="finishButton.disabled"
            :data-type="finishButton.dataType"
            :data-extra="finishButton.dataExtra"
            :custom-dataset="finishButton.customDataset"
            :content="finishButton.content"
            :icon="finishButton.icon"
            :loading="finishButton.loading"
            :loading-props="finishButton.loadingProps"
            :theme="finishButton.theme"
            :ghost="finishButton.ghost"
            :shape="finishButton.shape"
            :size="finishButton.size"
            :variant="finishButton.variant"
            :open-type="finishButton.openType"
            :hover-class="finishButton.hoverClass"
            :hover-stop-propagation="finishButton.hoverStopPropagation"
            :hover-start-time="finishButton.hoverStartTime"
            :hover-stay-time="finishButton.hoverStayTime"
            :lang="finishButton.lang"
            :session-from="finishButton.sessionFrom"
            :send-message-title="finishButton.sendMessageTitle"
            :send-message-path="finishButton.sendMessagePath"
            :send-message-img="finishButton.sendMessageImg"
            :app-parameter="finishButton.appParameter"
            :show-message-card="finishButton.showMessageCard"
            :aria-label="finishButton.ariaLabel"
            @click="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @getuserinfo="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @contact="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @getphonenumber="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @error="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @opensetting="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @launchapp="(e) => onTplButtonTap(e, { type: finishButton.type })"
            @agreeprivacyauthorization="(e) => onTplButtonTap(e, { type: finishButton.type })"
          />
        </block>
      </view>
    </block>
  <!-- #ifdef VUE2 -->
  </view>
  <!-- #endif -->
</template>
<script>
import TButton from '../button/button.vue';
import { canUseVirtualHost } from '../common/version';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    current: {
      type: [String, Number],
      default: '',
    },
    classPrefix: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
    tClassTooltip: {
      type: String,
      default: '',
    },
    tClassBody: {
      type: String,
      default: '',
    },
    tClassTitle: {
      type: String,
      default: '',
    },
    tClassFooter: {
      type: String,
      default: '',
    },
    skipButton: {
      type: [Object, null],
      default: null,
    },
    backButton: {
      type: [Object, null],
      default: null,
    },
    nextButton: {
      type: [Object, null],
      default: null,
    },
    finishButton: {
      type: [Object, null],
      default: null,
    },
    modeType: {
      type: String,
      default: '',
    },
    hideSkip: {
      type: Boolean,
      default: false,
    },
    hideBack: {
      type: Boolean,
      default: false,
    },
    steps: {
      type: Array,
      default: () => ([]),
    },
  },
  emits: [
    'onTplButtonTap',
  ],
  data() {
    return {
      useVirtualHost: canUseVirtualHost(),
    };
  },
  methods: {
    onTplButtonTap(...args) {
      this.$emit('onTplButtonTap', ...args);
    },
  },
};
</script>
<style scoped>
@import './guide.css';
</style>
