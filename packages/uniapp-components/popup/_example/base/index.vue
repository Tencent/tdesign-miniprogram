<template>
  <view>
    <t-popup
      v-model:visible="visible"
      :using-custom-navbar="!isMPAlipay"
      :placement="cur.value || 'top'"
    >
      <view :class="'block block--' + cur.value">
        {{ cur.text }}
      </view>
    </t-popup>

    <t-button
      v-for="(item, index) in position"
      :key="index"
      block
      size="large"
      variant="outline"
      theme="primary"
      :data-item="item"
      :custom-style="index === item.length - 1 ? '' : 'margin-bottom: 16px;'"
      @click="handlePopup($event, { item })"
    >
      {{ item.text }}
    </t-button>
  </view>
</template>

<script>
import tPopup from 'tdesign-uniapp/popup/popup.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tPopup,
    tButton,
  },
  data() {
    return {
      cur: {
        value: '',
        text: '',
      },

      position: [
        {
          value: 'top',
          text: '顶部弹出',
        },
        {
          value: 'left',
          text: '左侧弹出',
        },
        {
          value: 'center',
          text: '中间弹出',
        },
        {
          value: 'bottom',
          text: '底部弹出',
        },
        {
          value: 'right',
          text: '右侧弹出',
        },
      ],

      visible: false,
    };
  },
  created() {},
  methods: {
    handlePopup(e, { item }) {
      this.cur = item;

      setTimeout(() => {
        this.visible = true;
      });
    },
  },
};
</script>
<style scoped>
.block {
    color: var(--td-text-color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
}

.block--top,
.block--bottom {
    width: 100vw;
    height: 240px;
}

.block--left,
.block--right {
    width: 280px;
    height: 100%;
}

.block--center {
    width: 240px;
    height: 240px;
}
</style>
