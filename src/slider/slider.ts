import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-slider`;

TComponent({
  properties: {
    label: {
      type: String,
      value: '范围',
    },
    min: {
      type: Number,
      value: 0,
    },
    showMax: {
      type: Boolean,
      value: false,
    },
    showMin: {
      type: Boolean,
      value: false,
    },
    max: {
      type: Number,
      value: 100,
    },
    step: {
      type: Number,
      value: 1,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    value: {
      type: [Number, Array],
      value: 0,
    },
    backgroundColor: {
      type: String,
      value: '#cccccc',
    },
    // 已选择的颜色
    activeColor: {
      type: String,
      value: '#0252d9',
    },
    // 滑块的大小，取值范围为 12 - 28
    blockSize: {
      type: Number,
      value: 28,
    },
    // 滑块的颜色
    blockColor: {
      type: String,
      value: '#ffffff',
    },
    showValue: {
      type: Boolean,
      value: false,
    },
    showExtremValue: {
      type: Boolean,
      value: false,
    },
    range: {
      type: Boolean,
      value: false,
    },
  },
  // 组件的内部数据
  data: {
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
    dotTopValue: [0, 0]
  },

  lifetimes: {
    attached() {
      if (this.data.range) {
        this.getInitialStyle();
      }
    },
  },

  methods: {
    getSelectorQuery(id) {
      return new Promise((resolve, reject) => {
        this.createSelectorQuery()
          .select(`#${id}`)
          .boundingClientRect((rect) => {
            if (rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    },
    getInitialStyle() {
      this.getSelectorQuery('sliderLine').then((line) => {
        const { blockSize } = this.data;
        const halfBlock = blockSize / 2;
        this.setData({
          maxRange: line.right - line.left - blockSize,
          initialLeft: line.left - halfBlock,
          initialRight: line.right + halfBlock,
        });

        this.setValueToDot();
      });
    },
    setValueToDot() {
      if (!Array.isArray(this.data.value)) {
        throw Error('slider范围组件的value应为数组');
      }

      const { value, maxRange, blockSize, min, max } = this.data;
      let [valueMin, valueMax] = value;

      if (valueMin > valueMax) {
        throw Error('slider范围组件中左侧参数不应大于右侧参数');
      }

      valueMin = valueMin < min ? min : valueMin;
      valueMax = valueMax > max ? max : valueMax;

      const fullLineWidth = maxRange + blockSize;
      // 因为要计算点相对于线的绝对定位，所以要取整条线的长度而非可滑动的范围
      this.setDotStyle(fullLineWidth * (valueMin - min) / (max - min), fullLineWidth * (max - valueMax) / (max - min));
    },
    setDotStyle(left, right) {
      const halfBlock = this.data.blockSize / 2;
      if (left !== null) {
        this.setData({
          activeLeft: left - halfBlock,
        });
      }

      if (right !== null) {
        this.setData({
          activeRight: right - halfBlock,
        });
      }

      this.setLineStyle();
      this.emitValue();

      let [a, b] = this.data.value;
      const { activeLeft, activeRight, maxRange } = this.data;
      if (activeLeft + activeRight > maxRange) {
        const tem = a;
        a = b;
        b = tem;
      }
      this.setData({
        dotTopValue: [a, b]
      });
    },
    emitValue() {
      let { activeLeft, activeRight } = this.data;
      const { maxRange, max, min, blockSize } = this.data;
      const halfBlock = blockSize / 2;
      const fullLineWidth = maxRange + blockSize;

      let changePos = activeLeft + activeRight >= maxRange;
      if (changePos) {
        const temp = activeLeft;
        activeLeft = fullLineWidth - activeRight - blockSize;
        activeRight = fullLineWidth - temp - blockSize;
      }

      let left = Math.round((max - min) * (activeLeft + halfBlock) / fullLineWidth) + min;
      let right = Math.round(max - (max - min) * (activeRight + halfBlock) / fullLineWidth);

      if (left < min) left = min;
      if (left > max) left = max;
      if (right < min) right = min;
      if (right > max) right = max;

      this.triggerEvent('sliderchanging', {
        value: [left < min ? min : left, right > max ? max : right]
      });
    },
    stepValue(value) {
      const { step, min, max } = this.data;

      if (step < 1 || step > max - min) return value;
      const remainderValue = Math.floor(value) % step;

      remainderValue < step / 2 ? value -= remainderValue : value += step - remainderValue;

      if (value < min) return min;
      if (value > max) return max
      return value;
    },
    sliderchange(e) {
      const value = this.stepValue(e.detail.value);
      this.setData({
        value
      });
      e.detail.value = value;

      this.triggerEvent('sliderchange', e.detail);
    },
    sliderchanging(e) {
      const value = this.stepValue(e.detail.value);
      this.setData({
        value
      });
      this.triggerEvent('sliderchanging', e.detail);
    },
    onTouchStart(e) {
      const { pageX } = e.changedTouches[0];
      if (this.data.initialLeft === null) {
        this.setData({
          initialLeft: pageX,
        });
      }
    },
    onTouchStartRight(e) {
      const { pageX } = e.changedTouches[0];
      if (this.data.initialRight === null) {
        this.setData({
          initialRight: pageX,
        });
      }
    },
    onTouchMove(e) {
      const { disabled, initialLeft, maxRange, blockSize } = this.data;
      if (disabled) return;

      const { pageX } = e.changedTouches[0];
      const currentLeft = pageX - initialLeft;


      if (currentLeft <= 0) {
        this.setDotStyle(0, null);
      } else if (currentLeft >= this.data.maxRange + blockSize) {
        this.setDotStyle(maxRange + blockSize, null);
      } else {
        this.setDotStyle(currentLeft, null);
      }
    },
    onLineTap(e) {
      const { disabled, activeLeft, activeRight } = this.data;
      if (disabled) return;

      const { pageX } = e.changedTouches[0];
      const halfBlock = this.data.blockSize / 2;

      this.getSelectorQuery('leftDot').then((leftDot) => {
        this.getSelectorQuery('rightDot').then((rightDot) => {
          const distanceLeft = Math.abs(pageX - leftDot.left - halfBlock);
          const distanceRight = Math.abs(rightDot.left - pageX + halfBlock);

          const isMoveLeft = distanceLeft < distanceRight;
          let moveDistance = isMoveLeft ? pageX - leftDot.left - halfBlock : rightDot.left - pageX + halfBlock;
          if (isMoveLeft) {
            this.setDotStyle(activeLeft + halfBlock + moveDistance, null);
          } else {
            this.setDotStyle(null, activeRight + halfBlock + moveDistance);
          }
        });
      });
    },
    onTouchMoveRight(e) {
      const { disabled, initialRight, maxRange, blockSize } = this.data;
      if (disabled) return;

      const { pageX } = e.changedTouches[0];
      const currentRight = pageX - initialRight;
      if (currentRight >= 0) {
        this.setDotStyle(null, 0);
      } else if (currentRight < 0 && currentRight > -(maxRange + blockSize)) {
        this.setDotStyle(null, -currentRight);
      } else {
        this.setDotStyle(null, maxRange + blockSize);
      }
    },
    setLineStyle() {
      const { activeLeft, activeRight, blockSize, maxRange } = this.data;
      const halfBlock = blockSize / 2;
      if (activeLeft + activeRight <= maxRange) {
        this.setData({
          lineLeft: activeLeft + halfBlock,
          lineRight: activeRight + halfBlock,
        });
      } else {
        this.setData({
          lineLeft: maxRange + halfBlock - activeRight,
          lineRight: maxRange -  activeLeft + 1.5 * halfBlock,
        });
      }
    },
  },
});
