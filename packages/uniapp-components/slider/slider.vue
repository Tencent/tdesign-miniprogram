<template>
  <view
    :style="tools._style([customStyle])"
    :class="
      tools.cls(classPrefix, [
        ['top', label || scaleTextArray.length],
        ['disabled', disabled],
        ['range', range]
      ]) +
        '  ' +
        tClass +
        ' ' +
        (vertical ? classPrefix + '--vertical' : '')
    "
  >
    <block v-if="!range">
      <text
        v-if="showExtremeValue"
        :class="classPrefix + '__value ' + classPrefix + '__value--min'"
      >
        {{ label ? getValue(label, min) : min }}
      </text>
      <view
        id="sliderLine"
        :class="tools.cls(classPrefix + '__bar', [['disabled', disabled], theme, ['marks', isScale && theme == 'capsule']]) + ' ' + tClassBar"
        @click="onSingleLineTap"
      >
        <block v-if="isScale">
          <view
            v-for="(item, index) in scaleArray"
            :key="index"
            :class="
              tools.cls(classPrefix + '__scale-item', [
                ['active', _value >= item.val],
                ['disabled', disabled],
                theme,
                ['hidden', ((index == 0 || index == scaleArray.length - 1) && theme == 'capsule') || value == item.val]
              ])
            "
            :style="(vertical ? 'top' : 'left') + ':' + item.left + 'px; ' + (vertical ? 'transform: translate(-50%, -50%);' : 'transform: translateX(-50%);')"
            :aria-hidden="true"
          >
            <view
              v-if="scaleTextArray.length"
              :class="tools.cls(classPrefix + '__scale-desc', [theme])"
            >
              {{ scaleTextArray[index] }}
            </view>
          </view>
        </block>
        <view
          :class="tools.cls(classPrefix + '__line', [['disabled', disabled], theme, 'single']) + ' ' + tClassBarActive"
          :style="(vertical ? 'height' : 'width') + ': ' + lineBarWidth"
        >
          <view
            id="singleDot"
            :class="classPrefix + '__dot ' + tClassCursor"
            @touchstart.stop.prevent="onTouchStart"
            @touchmove.stop.prevent="onSingleLineTap"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
          >
            <view
              v-if="label || isVisibleToScreenReader"
              :class="tools.cls(classPrefix + '__dot-value', [['sr-only', !label]])"
              aria-role="alert"
              aria-live="assertive"
              :aria-hidden="!isVisibleToScreenReader"
            >
              {{ getValue(label, _value) || _value }}
            </view>
            <view
              :class="classPrefix + '__dot-slider'"
              aria-role="slider"
              :aria-disabled="disabled"
              :aria-valuemax="max"
              :aria-valuemin="min"
              :aria-valuenow="_value"
              :aria-valuetext="getValue(label, _value) || _value"
            />
          </view>
        </view>
      </view>
      <text
        v-if="showExtremeValue"
        :class="classPrefix + '__value ' + classPrefix + '__value--max'"
      >
        {{ label ? getValue(label, max) : max }}
      </text>
    </block>
    <block v-if="range">
      <view
        v-if="showExtremeValue"
        :class="classPrefix + '__range-extreme ' + classPrefix + '__range-extreme--min'"
      >
        {{ min }}
      </view>
      <view
        id="sliderLine"
        :class="tools.cls(classPrefix + '__bar', [['disabled', disabled], theme, ['marks', isScale && theme == 'capsule']]) + ' ' + tClassBar"
        @click="onLineTap"
      >
        <block v-if="isScale">
          <view
            v-for="(item, index) in scaleArray"
            :key="index"
            :class="
              tools.cls(classPrefix + '__scale-item', [
                ['active', dotTopValue[1] >= item.val && item.val >= dotTopValue[0]],
                ['disabled', disabled],
                theme,
                ['hidden', ((index == 0 || index == scaleArray.length - 1) && theme == 'capsule') || value == item.val]
              ])
            "
            :style="(vertical ? 'top' : 'left') + ':' + item.left + 'px; ' + (vertical ? 'transform: translate(-50%, -50%);' : 'transform: translateX(-50%);')"
            :aria-hidden="true"
          >
            <view
              v-if="scaleTextArray.length"
              :class="tools.cls(classPrefix + '__scale-desc', [theme])"
            >
              {{ scaleTextArray[index] }}
            </view>
          </view>
        </block>
        <view
          :class="tools.cls(classPrefix + '__line', [['disabled', disabled], theme]) + ' ' + tClassBarActive"
          :style="(vertical ? 'top' : 'left') + ': ' + lineLeft + 'px; ' + (vertical ? 'bottom' : 'right') + ': ' + lineRight + 'px'"
        >
          <view
            id="leftDot"
            :class="classPrefix + '__dot ' + classPrefix + '__dot--left ' + tClassCursor"
            @touchstart.stop.prevent="onTouchStart"
            @touchmove.stop.prevent="onTouchMoveLeft"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
          >
            <view
              v-if="label || isVisibleToScreenReader"
              :class="tools.cls(classPrefix + '__dot-value', [['sr-only', !label]])"
              aria-role="alert"
              aria-live="assertive"
              :aria-hidden="!isVisibleToScreenReader"
            >
              {{ getValue(label, dotTopValue[0]) || dotTopValue[0] }}
            </view>
            <view
              :class="classPrefix + '__dot-slider'"
              aria-role="slider"
              :aria-disabled="disabled"
              :aria-valuemax="max"
              :aria-valuemin="min"
              :aria-valuenow="dotTopValue[0]"
              :aria-valuetext="getValue(label, dotTopValue[0]) || dotTopValue[0]"
            />
          </view>
          <view
            id="rightDot"
            :class="classPrefix + '__dot ' + classPrefix + '__dot--right ' + tClassCursor"
            @touchstart.stop.prevent="onTouchStart"
            @touchmove.stop.prevent="onTouchMoveRight"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
          >
            <view
              v-if="label || isVisibleToScreenReader"
              :class="tools.cls(classPrefix + '__dot-value', [['sr-only', !label]])"
              aria-role="alert"
              aria-live="assertive"
              :aria-hidden="!isVisibleToScreenReader"
            >
              {{ getValue(label, dotTopValue[1]) || dotTopValue[1] }}
            </view>
            <view
              :class="classPrefix + '__dot-slider'"
              aria-role="slider"
              :aria-disabled="disabled"
              :aria-valuemax="max"
              :aria-valuemin="min"
              :aria-valuenow="dotTopValue[1]"
              :aria-valuetext="getValue(label, dotTopValue[1]) || dotTopValue[1]"
            />
          </view>
        </view>
      </view>
      <view
        v-if="showExtremeValue"
        :class="classPrefix + '__range-extreme ' + classPrefix + '__range-extreme--max'"
      >
        {{ max }}
      </view>
    </block>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { trimSingleValue, trimValue } from './tool';
import props from './props';
import { getRect, coalesce, nextTick } from '../common/utils';
import Bus from '../common/bus';
import tools from '../common/utils.wxs';
import { getValue } from './computed.js';
import { isString, isFunction } from '../common/validator';


const name = `${prefix}-slider`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-bar`,
    `${prefix}-class-bar-active`,
    `${prefix}-class-bar-disabled`,
    `${prefix}-class-cursor`,
  ],
  props: {
    ...props,
  },
  data() {
    return {
      // 按钮样式列表
      sliderStyles: '',
      classPrefix: name,
      initialLeft: null,
      initialRight: null,
      activeLeft: 0,
      activeRight: 0,
      maxRange: 0,
      lineLeft: 0,
      lineRight: 0,
      dotTopValue: [0, 0],
      _value: 0,
      blockSize: 20,
      isScale: false,
      scaleArray: [],
      scaleTextArray: [],
      prefix,
      realLabel: '',
      extremeLabel: [],
      isVisibleToScreenReader: false,
      identifier: [-1, -1],
      __inited: false,
      tools,

      lineBarWidth: 0,
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.handlePropsChange(newValue);
      },
      // immediate: true,
      deep: true,
    },
    _value: {
      handler(newValue) {
        this.bus.on('initial', () => this.renderLine(newValue));
        this.toggleA11yTips();
      },
      // immediate: true,
      deep: true,
    },
    marks: {
      handler(val) {
        this.bus.on('initial', () => this.handleMark(val));
      },
      // immediate: true,
      deep: true,
    },
    label: {
      handler(val) {
        this.isShowLabel = Boolean(val);
      },
      immediate: true,
    },
    showExtremeValue: 'getwExtremeLabel',
    min: 'getwExtremeLabel',
    max: 'getwExtremeLabel',
  },
  created() {
    this.bus = new Bus();
    this.bus.on('initial', () => this.handleMark(this.marks));
    this.bus.on('initial', () => {
      nextTick().then(() => {
        this.renderLine(this._value);
      });
    });
    this.toggleA11yTips();
  },
  mounted() {
    const { value, defaultValue } = this;
    // if (!value)
    this.handlePropsChange(coalesce(value, defaultValue, 0));
    this.init();
    this.injectPageScroll();
  },

  methods: {
    getValue,
    getwExtremeLabel() {
      const { showExtremeValue, min, max } = this;
      if (!showExtremeValue) return;

      this.extremeLabel = [this.getLabelByValue(Number(min), 'min'), this.getLabelByValue(Number(max), 'max')];
    },
    injectPageScroll() {
      const { range, vertical } = this;
      if (!range || !vertical) return;
      const pages = getCurrentPages() || [];
      let curPage = null;
      if (pages && pages.length - 1 >= 0) {
        curPage = pages[pages.length - 1];
      }
      if (!curPage) return;
      const originPageScroll = curPage?.onPageScroll;
      curPage.onPageScroll = (rest) => {
        originPageScroll?.call(this, rest);
        this.observerScrollTop(rest);
      };
    },

    observerScrollTop(rest) {
      const { scrollTop } = rest || {};
      this.pageScrollTop = scrollTop;
    },

    toggleA11yTips() {
      this.isVisibleToScreenReader = true;

      setTimeout(() => {
        this.isVisibleToScreenReader = false;
      }, 2000);
    },

    renderLine(val) {
      const { min, max, range } = this;
      const { maxRange } = this;

      if (range) {
        const left = (maxRange * (val[0] - Number(min))) / (Number(max) - Number(min));
        const right = (maxRange * (Number(max) - val[1])) / (Number(max) - Number(min));
        // 因为要计算点相对于线的绝对定位，所以要取整条线的长度而非可滑动的范围
        this.setLineStyle(left, right);
      } else {
        this.setSingleBarWidth(val);
      }
    },

    triggerValue(value) {
      if (this.preval === value) return;
      const { min, max, range } = this;

      this.preval = value;
      const parsed = trimValue(value, {
        min, max, range,
      });
      this._trigger('change', {
        value: parsed,
      });
      if (this._selfControlled) {
        this._value = parsed;
      }
    },

    getLabelByValue(value, position) {
      const { label } = this;

      if (isString(label)) {
        let text = String(value);
        try {
          const rule = /\${value}%/g;
          const enableToReplace = rule.test(label);
          if (enableToReplace) {
            text = label.replace(rule, String(value));
          } else {
            text = label;
            throw new Error();
          }
        } catch (e) {

        }
        return text;
      }

      if (isFunction(label)) {
        return label(value, position);
      }

      return String(value);
    },

    handlePropsChange(newValue) {
      const { min, max, range } = this;

      const value = trimValue(newValue, {
        min, max, range,
      });


      const realLabel = this.getLabelByValue(value);

      this.triggerValue(value);

      const setValueAndTrigger = () => {
        this._value = value;
        this.realLabel = realLabel;
      };

      // 基本样式未初始化，等待初始化后在改变数据。
      if (this.maxRange === 0) {
        this.init().then(setValueAndTrigger);
        return;
      }

      setValueAndTrigger();
    },

    valueToPosition(value) {
      const { min, max, theme } = this;
      const { blockSize, maxRange } = this;
      const halfBlock = (theme) === 'capsule' ? Number(blockSize) / 2 : 0;

      return Math.round(((Number(value) - Number(min)) / (Number(max) - Number(min))) * maxRange) + halfBlock;
    },

    handleMark(marks) {
      const calcPos = arr => arr.map(item => ({
        val: item,
        left: this.valueToPosition(item),
      }));

      if (marks?.length && Array.isArray(marks)) {
        this.isScale = true;
        this.scaleArray = calcPos(marks);
        this.scaleTextArray = [];
      }

      if (Object.prototype.toString.call(marks) === '[object Object]') {
        const scaleArray = Object.keys(marks).map(item => Number(item));
        const scaleTextArray = scaleArray.map(item => marks[item]);

        this.isScale = scaleArray.length > 0;
        this.scaleArray = calcPos(scaleArray);
        this.scaleTextArray = scaleTextArray;
      }
    },

    setSingleBarWidth(value) {
      const width = this.valueToPosition(value);

      this.lineBarWidth = `${width}px`;
    },

    async init() {
      if (this.__inited) return;
      await this.getInitialInfo();
      this.__inited = true;
      this.bus.emit('initial');
    },

    async getInitialInfo() {
      const line = await getRect(this, '#sliderLine');
      const { blockSize } = this;
      const { theme, vertical } = this;
      const halfBlock = Number(blockSize) / 2;
      const { top, bottom, right, left } = line;
      let maxRange = vertical ? bottom - top : right - left;
      let initialLeft = vertical ? top : left;
      let initialRight = vertical ? bottom : right;
      if (initialLeft === 0 && initialRight === 0) return;

      if ((theme) === 'capsule') {
        maxRange = maxRange - Number(blockSize) - 6; // 6 是边框宽度
        initialLeft -= halfBlock;
        initialRight -= halfBlock;
      }

      this.maxRange = maxRange;
      this.initialLeft = initialLeft;
      this.initialRight = initialRight;
    },

    stepValue(value) {
      const { step, min, max } = this;
      const decimal = String(step).indexOf('.') > -1 ? String(step).length - String(step).indexOf('.') - 1 : 0;
      const closestStep = trimSingleValue(
        Number((Math.round(value / Number(step)) * Number(step)).toFixed(decimal)),
        Number(min),
        Number(max),
      );
      return closestStep;
    },

    // 点击滑动条的事件
    async onSingleLineTap(e) {
      await this.getInitialInfo();
      const { disabled } = this;
      if (disabled) return;
      const isSingleLineTap = this.identifier[0] === -1; // 区分点击滑动条和单游标的滑动
      if (isSingleLineTap) {
        const [touch] = e.changedTouches;
        this.identifier[0] = touch.identifier;
      }
      const value = await this.getSingleChangeValue(e);

      if (isSingleLineTap) {
        this.identifier[0] = -1;
      }
      this.triggerValue(value);
    },

    async getSingleChangeValue(e) {
      // await this.getInitialInfo();
      const { min, max, theme, vertical } = this;
      const { initialLeft, maxRange, blockSize } = this;
      const touch = e.changedTouches.find(item => item.identifier === this.identifier[0]);
      if (!touch) return;
      const pagePosition = this.getPagePosition(touch);

      let offset = 0;
      if ((theme) === 'capsule') {
        offset = Number(blockSize);
        if (vertical) {
        }
        offset += 3;
      } else if (vertical) {
      }

      const currentLeft = pagePosition - initialLeft - offset;
      let value = 0;
      if (currentLeft <= 0) {
        value = Number(min);
      } else if (currentLeft >= maxRange) {
        value = Number(max);
      } else {
        value = (currentLeft / maxRange) * (Number(max) - Number(min)) + Number(min);
      }
      return this.stepValue(value);
    },

    /**
   * 将位置转换为值
   *
   * @param {number} posValue 位置数据
   * @param {(0 | 1)} dir 方向： 0-left， 1-right
   * @return  {number}
   * @memberof Slider
   */
    convertPosToValue(posValue, dir) {
      const { maxRange } = this;
      const { max, min } = this;
      return dir === 0
        ? (posValue / maxRange) * (Number(max) - Number(min)) + Number(min)
        : Number(max) - (posValue / maxRange) * (Number(max) - Number(min));
    },

    // 点击范围选择滑动条的事件
    onLineTap(e) {
      const { disabled, theme, vertical } = this;
      const { initialLeft, initialRight, maxRange, blockSize } = this;
      if (disabled) return;

      const [touch] = e.changedTouches;
      const pagePosition = this.getPagePosition(touch);
      const halfBlock = (theme) === 'capsule' ? Number(blockSize) / 2 : 0;

      const currentLeft = pagePosition - initialLeft;
      const currentRight = -(pagePosition - initialRight);
      if (currentLeft < 0 || currentRight > maxRange + Number(blockSize)) return;

      Promise.all([getRect(this, '#leftDot'), getRect(this, '#rightDot')]).then(([leftDot, rightDot]) => {
        const pageScrollTop = this.pageScrollTop || 0;
        // 点击处-halfblock 与 leftDot左侧的距离（绝对值）
        const leftDotPosition = vertical ? leftDot.top + pageScrollTop : leftDot.left;
        const distanceLeft = Math.abs(pagePosition - leftDotPosition - halfBlock);
        // 点击处-halfblock 与 rightDot左侧的距离（绝对值）
        const rightDotPosition = vertical ? rightDot.top + pageScrollTop : rightDot.left;
        const distanceRight = Math.abs(rightDotPosition - pagePosition + halfBlock);
        // 哪个绝对值小就移动哪个Dot
        const isMoveLeft = distanceLeft < distanceRight;

        let offset = 0;
        if ((theme) === 'capsule') {
          offset = Number(blockSize);
          if (vertical) {
            offset *= 2;
          }
          offset += 6;
        } else if (vertical) {
          offset = Number(blockSize);
        }

        if (isMoveLeft) {
        // 当前leftdot中心 + 左侧偏移量 = 目标左侧中心距离
          const left = pagePosition - initialLeft - offset;
          const leftValue = this.convertPosToValue(left, 0);
          this.triggerValue([this.stepValue(leftValue), this._value[1]]);
        } else {
          let right = -(pagePosition - initialRight);
          if (vertical) {
            right += offset / 2;
          }
          const rightValue = this.convertPosToValue(right, 1);

          this.triggerValue([this._value[0], this.stepValue(rightValue)]);
        }
      });
    },

    async onTouchStart(e) {
      await this.getInitialInfo();
      this.$emit('dragstart', { e });
      const [touch] = e.changedTouches;
      if (e.currentTarget.id === 'rightDot') {
        this.identifier[1] = touch.identifier;
      } else {
        this.identifier[0] = touch.identifier;
      }
    },

    onTouchMoveLeft(e) {
      const { disabled, theme } = this;
      const { initialLeft, _value, blockSize } = this;
      if (disabled) return;

      const touch = e.changedTouches.find(item => item.identifier === this.identifier[0]);
      if (!touch) return;
      const pagePosition = this.getPagePosition(touch);
      let offset = 0;
      if ((theme) === 'capsule') {
        offset = Number(blockSize) + 3;
      }
      const currentLeft = pagePosition - initialLeft - offset;

      const newData = [...(_value)];
      const leftValue = this.convertPosToValue(currentLeft, 0);

      newData[0] = this.stepValue(leftValue);

      this.triggerValue(newData);
    },

    onTouchMoveRight(e) {
      const { disabled, vertical, theme } = this;
      const { initialRight, _value } = this;
      if (disabled) return;

      const touch = e.changedTouches.find(item => item.identifier === this.identifier[1]);
      if (!touch) return;

      const pagePosition = this.getPagePosition(touch);
      let offset = 0;
      if ((theme) === 'capsule') {
        offset -= 3;
      } else if (vertical) {
      }
      const currentRight = -(pagePosition - initialRight - offset);

      const newData = [...(_value)];
      const rightValue = this.convertPosToValue(currentRight, 1);
      newData[1] = this.stepValue(rightValue);

      this.triggerValue(newData);
    },

    setLineStyle(left, right) {
      const { theme } = this;
      const { blockSize, maxRange } = this;
      const halfBlock = (theme) === 'capsule' ? Number(blockSize) / 2 : 0;
      const [a, b] = this._value ;
      const cut = v => parseInt(v, 10);

      this.dotTopValue = [a, b];
      this.realLabel = [this.getLabelByValue(a, 'start'), this.getLabelByValue(b, 'end')];

      if (left + right <= maxRange) {
        this.lineLeft = cut(left + halfBlock);
        this.lineRight = cut(right + halfBlock);
      } else {
        this.lineLeft = cut(maxRange + halfBlock - right);
        this.lineRight = cut(maxRange - left + halfBlock * 1.5);
      }
    },

    onTouchEnd(e) {
      this.$emit('dragend', { e, value: this._value });
      if (e.currentTarget.id === 'rightDot') {
        this.identifier[1] = -1;
      } else {
        this.identifier[0] = -1;
      }
    },

    getPagePosition(touch) {
      const { clientX, clientY } = touch;
      const { vertical } = this;
      return vertical ? clientY : clientX;
    },
  },
});
</script>
<style scoped>
@import './slider.css';
</style>
