<template>
  <div>
    <slot
      v-if="statusRender"
      name="statusRender"
    />

    <template v-else>
      <view
        v-if="status === 'expired'"
        :class="`${prefix}-expired`"
      >
        <view :class="`${prefix}-expired__text`">
          {{ locale.expiredText }}
          <view
            :class="`${prefix}-expired__button`"
            @click="handleRefresh"
          >
            <t-icon
              name="refresh"
              size="36rpx"
            />
            {{ locale.refreshText }}
          </view>
        </view>
      </view>

      <view
        v-else-if="status === 'loading'"
        :class="`${prefix}-loading-container`"
      >
        <t-loading
          size="64rpx"
          :theme="isSkyline ? 'spinner' : 'circular'"
        />
      </view>

      <view
        v-else-if="status === 'scanned'"
        :class="`${prefix}-scanned`"
      >
        <t-icon
          name="check-circle-filled"
          :class="`${prefix}-scanned__icon`"
          size="44rpx"
        />
        {{ locale.scannedText }}
      </view>
    </template>
  </div>
</template>

<script>
import TIcon from '../../../icon/icon';
import TLoading from '../../../loading/loading';
import props from './props';
import { prefix } from '../../../common/config';

const name = `${prefix}-qrcode`;

export default {
  name: 'QrcodeStatus',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TIcon,
    TLoading,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      isSkyline: false,
    };
  },
  mounted() {
    // 暂时忽略 skyline
    // this.isSkyline = false;
  },
  methods: {
    handleRefresh() {
      this.$emit('refresh');
    },
  },
};
</script>

<style lang="less" scoped>
@import './qrcode-status.css';
</style>
