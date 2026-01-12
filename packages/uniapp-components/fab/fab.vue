<template>
  <t-draggable
    v-if="draggable"
    ref="draggable"
    :custom-style="tools._style(['right: 16px; bottom: 32px;', customStyle, moveStyle])"
    :direction="draggable === true ? 'all' : draggable"
    :t-class="tClass"
    @start="onStart"
    @move="onMove"
    @end="onEnd"
  >
    <slot v-if="!buttonData.content && !buttonData.icon" />
    <block
      v-else
      name="button"
    >
      <t-button
        :t-id="buttonData.tId"
        :custom-style="buttonData.style || ''"
        :block="buttonData.block"
        :class="getActionClass(classPrefix, buttonData.buttonLayout) || ''"
        :t-class="buttonData.tClass"
        :disabled="buttonData.disabled"
        :data-type="'action'"
        :data-extra="buttonData.index"
        :custom-dataset="buttonData.customDataset"
        :content="buttonData.content"
        :icon="buttonData.icon"
        :loading="buttonData.loading"
        :loading-props="buttonData.loadingProps"
        :theme="buttonData.theme"
        :ghost="buttonData.ghost"
        :shape="buttonData.shape"
        :size="buttonData.size"
        :variant="buttonData.variant"
        :open-type="buttonData.openType"
        :hover-class="buttonData.hoverClass"
        :hover-stop-propagation="buttonData.hoverStopPropagation"
        :hover-start-time="buttonData.hoverStartTime"
        :hover-stay-time="buttonData.hoverStayTime"
        :lang="buttonData.lang"
        :session-from="buttonData.sessionFrom"
        :send-message-title="buttonData.sendMessageTitle"
        :send-message-path="buttonData.sendMessagePath"
        :send-message-img="buttonData.sendMessageImg"
        :app-parameter="buttonData.appParameter"
        :show-message-card="buttonData.showMessageCard"
        :aria-label="buttonData.ariaLabel"
        @click="onTplButtonTap"
        @getuserinfo="onTplButtonTap"
        @contact="onTplButtonTap"
        @getphonenumber="onTplButtonTap"
        @error="onTplButtonTap"
        @opensetting="onTplButtonTap"
        @launchapp="onTplButtonTap"
        @agreeprivacyauthorization="onTplButtonTap"
      >
        <slot v-if="true || false" />
      </t-button>
    </block>
  </t-draggable>

  <view
    v-else
    :class="[classPrefix, tClass]"
    :style="tools._style(['right: 16px; bottom: 32px;', customStyle])"
  >
    <slot v-if="!buttonData || !buttonData.content && !buttonData.icon" />
    <t-button
      v-else
      :t-id="buttonData.tId"
      :custom-style="buttonData.style || ''"
      :block="buttonData.block"
      :class="getActionClass(classPrefix, buttonData.buttonLayout) || ''"
      :t-class="buttonData.tClass"
      :disabled="buttonData.disabled"
      :data-type="'action'"
      :data-extra="buttonData.index"
      :custom-dataset="buttonData.customDataset"
      :content="buttonData.content"
      :icon="buttonData.icon"
      :loading="buttonData.loading"
      :loading-props="buttonData.loadingProps"
      :theme="buttonData.theme"
      :ghost="buttonData.ghost"
      :shape="buttonData.shape"
      :size="buttonData.size"
      :variant="buttonData.variant"
      :open-type="buttonData.openType"
      :hover-class="buttonData.hoverClass"
      :hover-stop-propagation="buttonData.hoverStopPropagation"
      :hover-start-time="buttonData.hoverStartTime"
      :hover-stay-time="buttonData.hoverStayTime"
      :lang="buttonData.lang"
      :session-from="buttonData.sessionFrom"
      :send-message-title="buttonData.sendMessageTitle"
      :send-message-path="buttonData.sendMessagePath"
      :send-message-img="buttonData.sendMessageImg"
      :app-parameter="buttonData.appParameter"
      :show-message-card="buttonData.showMessageCard"
      :aria-label="buttonData.ariaLabel"
      @click="onTplButtonTap"
      @getuserinfo="onTplButtonTap"
      @contact="onTplButtonTap"
      @getphonenumber="onTplButtonTap"
      @error="onTplButtonTap"
      @opensetting="onTplButtonTap"
      @launchapp="onTplButtonTap"
      @agreeprivacyauthorization="onTplButtonTap"
    >
      <slot />
    </t-button>
  </view>
</template>

<script>
import tButton from '../button/button';
import TDraggable from '../draggable/draggable.vue';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';
import { unitConvert, getWindowInfo } from '../common/utils';
import tools from '../common/utils.wxs';

const name = `${prefix}-fab`;

const baseButtonProps = {
  size: 'large',
  shape: 'circle',
  theme: 'primary',
  tClass: `${prefix}-fab__button`,
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`, `${prefix}-class-button`],
  mixins: [useCustomNavbar],
  components: {
    tButton,
    TDraggable,
  },
  props: {
    ...props,
  },
  emits: [
    'move',
    'start',
    'end',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      moveStyle: null,
      tools,
      systemInfo: getWindowInfo(),
    };
  },
  computed: {
    buttonData() {
      return {
        ...baseButtonProps,
        shape: this.text ? 'round' : 'circle',
        ...this.buttonProps,
        icon: this.icon,
        content: this.text,
        ariaLabel: this.ariaLabel,
      };
    },
  },
  watch: {
    icon: 'computedSize',
    ariaLabel: 'computedSize',
    yBounds: 'computedSize',
    buttonProps: 'computedSize',
    text: {
      handler(val) {
        this.content = val;
        this.computedSize();
      },
      immediate: true,
    },
  },
  methods: {
    onTplButtonTap(e) {
      this.$emit('click', { e  });
    },
    onStart(t) {
      this.$emit('drag-start', t);
    },
    onMove(e) {
      const {
        yBounds,
        distanceTop,
        systemInfo,
      } = this;

      const { x, y, rect } = e;
      const maxX = systemInfo.windowWidth - rect.width; // 父容器宽度 - 拖动元素宽度
      const maxY = systemInfo.windowHeight - Math.max(distanceTop, unitConvert(yBounds[0])) - rect.height; // 父容器高度 - 拖动元素高度
      const right = Math.max(0, Math.min(x, maxX));
      const bottom = Math.max(0, unitConvert(yBounds[1]), Math.min(y, maxY));


      this.moveStyle = `right: ${right}px; bottom: ${bottom}px;`;
    },
    onEnd(t) {
      this.$emit('drag-end', t);
    },
    computedSize() {
      if (!this.draggable) return;

      setTimeout(() => {
        const insChild = this.$refs.draggableTemplate?.$refs?.draggable;


        // button 更新时，重新获取其尺寸
        if (this?.yBounds?.[1]) {
          this.moveStyle = `bottom: ${unitConvert(this.yBounds[1])}px`;
          insChild?.computedRect();
        } else {
          insChild?.computedRect();
        }
      });
    },
    getActionClass(a, b) {
      return `${a}-${b}`;
    },
  },
});
</script>
<style scoped>
@import './fab.css';
</style>
