<template>
  <view>
    <view
      v-for="(list, index) in formatList"
      :key="index"
      class="format-line"
    >
      <view
        v-for="(item, index1) in list"
        :key="index1"
        :class="'format-item ' + (curFormat === item ? 'active' : '')"
        :data-format="item"
        @click.stop.prevent="clickFormat"
      >
        <t-icon
          v-if="curFormat === item"
          name="check"
          size="14"
          custom-style="position: absolute; top: 4rpx; left: 4rpx; color: #fff; z-index: 1;"
        />

        {{ item }}
      </view>
    </view>
    <t-color-picker
      enable-alpha
      type="multiple"
      :format="curFormat"
      :value="color"
      @change="onChange"
      @palette-bar-change="onPaletteBarChange"
    />
  </view>
</template>

<script>
import TColorPicker from '@tdesign/uniapp/color-picker/color-picker.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';
export default {
  components: {
    TColorPicker,
    TIcon,
  },
  data() {
    return {
      curFormat: 'CSS',
      color: '#7bd60b',
      formatList: [
        ['CSS', 'HEX', 'RGB'],
        ['HSL', 'HSV', 'CMYK'],
      ],
      list: [],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change', e);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e);
    },
    clickFormat(e) {
      this.curFormat = e.target.dataset.format;
    },
  },
};
</script>
<style>
.format-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 112rpx;
    margin: 0 32rpx 40rpx;
}

.format-item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 32rpx;
    width: 100%;
    height: 100%;
    line-height: 100%;
    background-color: var(--td-bg-color-container);
    border: 3rpx solid var(--td-bg-color-container);
    border-radius: 12rpx;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 16px;
}

.format-item.active {
    border-color: var(--td-brand-color);
}

.format-item.active::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
    border-top-left-radius: 12rpx;
    border-top: 56rpx solid var(--td-brand-color);
    border-right: 56rpx solid transparent;
    border-radius: 0;
}

.format-item:not(:last-child) {
    margin-right: 24rpx;
}
</style>
