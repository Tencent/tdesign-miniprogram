<template>
  <view>
    <view
      v-if="isShow"
      :style="tools._style([customStyle])"
      :class="[classPrefix + ' ', tClass]"
    >
      <view
        v-if="parsedRowCols.length"
        :class="classPrefix + '__content'"
      >
        <view
          v-for="(row, index) in parsedRowCols"
          :key="index"
          :class="[
            classPrefix + '__row ',
            tClassRow
          ]"
        >
          <view
            v-for="(col, index1) in row"
            :key="index1"
            :class="[col.class + ' ', tClassCol]"
            :style="tools._style(col.style)"
          />
        </view>
      </view>
    </view>
    <view
      v-else
      :class="classPrefix + '__content'"
    >
      <slot />
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { classNames } from '../common/utils';
import { isNumber } from '../common/validator';
import tools from '../common/utils.wxs';


const name = `${prefix}-skeleton`;


const ThemeMap = {
  avatar: [{
    type: 'circle',
    size: '96rpx',
  }],
  image: [{
    type: 'rect',
    size: '144rpx',
  }],
  text: [[{
    width: '24%',
    height: '32rpx',
    marginRight: '32rpx',
  }, {
    width: '76%',
    height: '32rpx',
  }], 1],
  paragraph: [1, 1, 1, {
    width: '55%',
  }],
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-col`,
    `${prefix}-class-row`,
  ],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      parsedRowCols: [],
      isShow: false,
      tools,
      timer: null,
    };
  },
  watch: {
    rowCol: {
      handler() {
        this.init();
      },
      immediate: true,
    },
    loading: 'isShowSkeleton',
    delay: 'isShowSkeleton',
  },
  mounted() {
    this.init();
    this.isShowSkeleton();
  },
  beforeUnMount() {
    this.clearTimer();
  },
  methods: {
    init() {
      const { theme, rowCol } = this;
      const rowCols = [];

      if (rowCol &&  rowCol.length) {
        rowCols.push(...rowCol);
      } else {
        rowCols.push(...ThemeMap[theme || 'text']);
      }

      const parsedRowCols = rowCols.map((item) => {
        if (isNumber(item)) {
          return new Array(item).fill({
            class: this.getColItemClass({ type: 'text' }),
            style: {},
          });
        }
        if (Array.isArray(item)) {
          return item.map(col => ({
            ...col,
            class: this.getColItemClass(col),
            style: this.getColItemStyle(col),
          }));
        }

        const nItem = item;
        return [
          {
            ...nItem,
            class: this.getColItemClass(nItem),
            style: this.getColItemStyle(nItem),
          },
        ];
      });

      this.parsedRowCols = parsedRowCols;
    },

    getColItemClass(obj) {
      return classNames([
        `${name}__col`,
        `${name}--type-${obj.type || 'text'}`,
        `${name}--animation-${this.animation}`,
      ]);
    },

    getColItemStyle(obj) {
      const styleName = [
        'width',
        'height',
        'marginRight',
        'marginLeft',
        'margin',
        'size',
        'background',
        'backgroundColor',
        'borderRadius',
      ];
      const style = {};
      styleName.forEach((name) => {
        if (name in obj) {
          const px = isNumber(obj[name]) ? `${obj[name]}px` : obj[name];
          if (name === 'size') {
            [style.width, style.height] = [px, px];
          } else {
            style[name] = px;
          }
        }
      });
      return style;
    },

    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },

    isShowSkeleton() {
      this.clearTimer();

      const { loading, delay } = this;

      if (!loading || delay === 0) {
        this.isShow = loading;
        return;
      }

      this.timer = setTimeout(() => {
        this.isShow = this.loading;
      }, delay);
    },
  },
});
</script>
<style scoped>
@import './skeleton.css';
</style>
