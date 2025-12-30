<template>
  <view
    class="t-qrcode__canvas-wrapper"
    :class="tClass"
  >
    <canvas
      :id="canvasId"
      ref="qrcodeCanvas"
      type="2d"
      :canvas-id="canvasId"
      class="t-qrcode__canvas"
      :style="`width: ${size}px; height: ${size}px;`"
    />
  </view>
</template>

<script>
import props from './props';
import useQRCode from '../../hooks/useQRCode';
import { DEFAULT_MINVERSION, excavateModules, isSupportPath2d, generatePath } from '../../../common/shared/qrcode/utils';
import { uniComponent } from '../../../common/src/index';
import { prefix } from '../../../common/config';
import { loadImage } from '../../../common/canvas/index';
import { getWindowInfo, nextTick } from '../../../common/utils';

export default uniComponent({
  name: 'QrcodeCanvas',
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  props: {
    ...props,
  },
  emits: ['drawCompleted', 'drawError'],
  data() {
    return {
      canvas: null,
      ctx: null,
      canvasId: `qrcode-canvas-${Math.random().toString(36)
        .slice(2, 11)}`,
      isWeb: false,
    };
  },
  computed: {
    // 使用计算属性确保有默认值
    actualBgColor() {
      return this.bgColor || '#FFFFFF';
    },
    actualColor() {
      return this.color || '#000000';
    },
  },
  watch: {
    value() {
      this.renderQRCode();
    },
    icon() {
      this.renderQRCode();
    },
    size() {
      let interval = 0;
      // #ifdef APP-PLUS
      interval = 33;
      // #endif
      setTimeout(() => {
        this.renderQRCode();
      }, interval);
    },
    iconSize() {
      this.renderQRCode();
    },
    level() {
      this.renderQRCode();
    },
    bgColor() {
      this.renderQRCode();
    },
    color() {
      this.renderQRCode();
    },
  },
  created() {
    // 小程序不能使用响应式的this.canvas
    this._canvas = null;
    this._ctx = null;
  },
  mounted() {
    // 判断是否为小程序环境，否则默认为 H5
    // #ifdef MP
    this.isWeb = false;
    // #endif

    // #ifndef MP
    this.isWeb = true;
    // #endif

    this.initCanvas();
  },
  methods: {
    async initCanvas() {
      await nextTick();

      // #ifndef H5
      this.initMiniProgramCanvas();
      // #endif

      // #ifdef H5
      this.initH5Canvas();
      // #endif
    },

    // H5 环境初始化
    async initH5Canvas() {
      // 在 uniapp H5 环境中，canvas 会被包裹在 uni-canvas 内
      const uniCanvasElement = document.querySelector(`#${this.canvasId}`);
      let canvasElement = null;

      // 如果获取到的是 uni-canvas，需要找到内部的 canvas
      if (uniCanvasElement && uniCanvasElement.tagName === 'UNI-CANVAS') {
        canvasElement = uniCanvasElement.querySelector('canvas');

        // 设置 uni-canvas 的样式
        uniCanvasElement.style.width = `${this.size}px`;
        uniCanvasElement.style.height = `${this.size}px`;
        uniCanvasElement.style.overflow = 'visible';

        // 设置 wrapper 的样式
        const wrapper = uniCanvasElement.parentElement;
        if (wrapper) {
          wrapper.style.width = `${this.size}px`;
          wrapper.style.height = `${this.size}px`;
          wrapper.style.overflow = 'visible';
        }
      } else {
        canvasElement = uniCanvasElement;
      }

      if (canvasElement) {
        // 在初始化时设置 Canvas 的物理尺寸和显示尺寸
        const pixelRatio = window.devicePixelRatio || 1;
        const canvasSize = this.size * pixelRatio;

        // 设置物理尺寸（实际像素）
        canvasElement.width = canvasSize;
        canvasElement.height = canvasSize;

        // 设置显示尺寸（CSS 像素）
        canvasElement.style.width = `${this.size}px`;
        canvasElement.style.height = `${this.size}px`;

        // 添加 willReadFrequently 属性以优化性能并消除警告
        const ctx = canvasElement.getContext('2d', { willReadFrequently: true });
        this.canvas = canvasElement;
        this.ctx = ctx;
        await this.renderQRCode();
      } else {
        console.error('无法获取 canvas 元素');
      }
    },

    // 小程序环境初始化
    async initMiniProgramCanvas() {
      if (typeof uni !== 'undefined' && uni.createSelectorQuery) {
        const query = uni.createSelectorQuery().in(this);
        query
          .select(`#${this.canvasId}`)
          .fields({ node: true, size: true })
          .exec(async (res) => {
            if (!res || !res[0] || !res[0].node) {
              console.error('获取 canvas 节点失败');
              return;
            }

            const canvas = res[0].node;
            // 小程序环境也添加 willReadFrequently 属性
            try {
              let ctx;
              // #ifdef MP
              ctx = canvas.getContext('2d', { willReadFrequently: true });
              // #endif
              if (!ctx) {
                ctx = uni.createCanvasContext(this.canvasId, this);
              }
              this._canvas = canvas;
              this._ctx = ctx;
            } catch (e) {
              console.warn('获取 ctx 失败', e);
            }


            await this.renderQRCode();
          });
      }
    },

    async renderQRCode() {
      const canvas = this._canvas || this.canvas;
      const ctx = this._ctx || this.ctx;
      if (!canvas || !ctx) {
        return;
      }

      const sizeProp = this.getSizeProp(this.iconSize);

      try {
        const qrData = useQRCode({
          value: this.value,
          level: this.level,
          minVersion: DEFAULT_MINVERSION,
          includeMargin: this.includeMargin,
          marginSize: this.marginSize,
          size: this.size,
          imageSettings: this.icon
            ? {
              src: this.icon,
              width: sizeProp.width,
              height: sizeProp.height,
              excavate: true,
            }
            : undefined,
        });

        // 获取设备像素比
        let pixelRatio = 1;
        let canvasSize;
        let scale;

        // #ifndef H5
        // 小程序环境：获取真实的设备像素比并设置 Canvas 尺寸
        // 使用 getWindowInfo 替代已废弃的 getSystemInfoSync
        const windowInfo = getWindowInfo();
        pixelRatio = windowInfo.pixelRatio || 1;
        canvasSize = this.size * pixelRatio;
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        // 小程序环境：scale 计算方式（参考 TS 实现）
        scale = canvasSize / qrData.numCells;
        // #ifdef APP-PLUS
        scale /= pixelRatio;
        // #endif
        // #endif

        // #ifdef H5
        // H5 环境：每次渲染时重新设置 Canvas 尺寸（因为 size 可能变化）
        pixelRatio = window.devicePixelRatio || 1;
        canvasSize = this.size * pixelRatio;

        // 重新设置 Canvas 物理尺寸（会重置 canvas 状态）
        canvas.width = canvasSize;
        canvas.height = canvasSize;

        // 重新设置 Canvas 显示尺寸
        canvas.style.width = `${this.size}px`;
        canvas.style.height = `${this.size}px`;

        // H5 环境：scale 计算方式（基于物理尺寸）
        scale = canvasSize / qrData.numCells;
        // #endif

        // 重置变换矩阵并应用缩放
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(scale, scale);

        // 绘制背景
        ctx.fillStyle = this.actualBgColor;
        ctx.fillRect(0, 0, qrData.numCells, qrData.numCells);

        // 处理需要挖空的区域（如果有图标）
        let cellsToDraw = qrData.cells;
        if (this.icon && qrData.calculatedImageSettings?.excavation) {
          cellsToDraw = excavateModules(qrData.cells, qrData.calculatedImageSettings.excavation);
        }

        // 绘制二维码
        ctx.fillStyle = this.actualColor;

        // Web 环境优先使用 Path2D（性能更好）
        if (this.isWeb && isSupportPath2d) {
          ctx.fill(new Path2D(generatePath(cellsToDraw, qrData.margin)));
        } else {
          // 小程序环境或不支持 Path2D 时使用逐个绘制
          cellsToDraw.forEach((row, y) => {
            row.forEach((cell, x) => {
              if (cell) {
                ctx.fillRect(x + qrData.margin, y + qrData.margin, 1, 1);
              }
            });
          });
        }

        // 绘制中心图标
        if (this.icon && qrData.calculatedImageSettings) {
          await this.drawIcon(qrData, pixelRatio);
        }

        // #ifdef APP-PLUS
        ctx.draw();
        // #endif

        this.$emit('drawCompleted');
      } catch (err) {
        console.error('二维码绘制失败:', err);
        this.$emit('drawError', { error: err });
      }
    },

    async drawIcon(qrData, pixelRatio) {
      const ctx = this._ctx || this.ctx;
      const { calculatedImageSettings, margin } = qrData;

      if (!calculatedImageSettings) {
        return;
      }

      try {
        // 加载图标图片
        const img = await this.loadIconImage();

        if (!img) {
          console.error('无法加载图标图片');
          return;
        }

        const drawX = calculatedImageSettings.x + margin;
        const drawY = calculatedImageSettings.y + margin;

        // 设置透明度
        if (calculatedImageSettings.opacity !== null && calculatedImageSettings.opacity !== undefined) {
          ctx.globalAlpha = calculatedImageSettings.opacity;
        }

        // #ifdef H5
        ctx.scale(1 / pixelRatio, 1 / pixelRatio); // H5 环境：需要调整缩放
        // #endif

        // 绘制图标
        ctx.drawImage(
          img,
          drawX,
          drawY,
          calculatedImageSettings.w,
          calculatedImageSettings.h,
        );

        // 恢复透明度
        ctx.globalAlpha = 1;
      } catch (err) {
        console.error('图标绘制失败:', err);
      }
    },

    // 加载图标图片
    // 参考 TSX (H5) 和 TS (小程序) 的实现
    async loadIconImage() {
      const canvas = this._canvas || this.canvas;
      if (!this.icon || !canvas) {
        return null;
      }
      return loadImage({
        canvas,
        src: this.icon,
      });
    },

    getSizeProp(iconSize) {
      if (!iconSize) return { width: 0, height: 0 };
      if (typeof iconSize === 'number') {
        return {
          width: iconSize,
          height: iconSize,
        };
      }
      return {
        width: iconSize.width,
        height: iconSize.height,
      };
    },

    // 暴露 canvas 节点给父组件
    getCanvasNode() {
      let result;
      // #ifndef H5
      result = new Promise((resolve) => {
        if (typeof uni !== 'undefined' && uni.createSelectorQuery) {
          const query = uni.createSelectorQuery().in(this);
          query
            .select(`#${this.canvasId}`)
            .fields({ node: true, size: true })
            .exec((res) => {
              resolve(res[0]?.node);
            });
        } else {
          resolve(null);
        }
      });
      // #endif

      // #ifdef H5
      result = Promise.resolve(document.querySelector(`#${this.canvasId}`));
      // #endif

      return result;
    },
  },
});
</script>

<style lang="less" scoped>
@import './qrcode-canvas.css';
</style>
