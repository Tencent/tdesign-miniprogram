<template>
  <view>
    <!-- 新的：接口对其了H5 -->
    <canvas
      v-if="isUseNewCanvas"
      type="2d"
      class="ec-canvas"
      :canvas-id="canvasId"
      @init="init"
      @touchstart="parseEventDynamicCode($event, ec.disableTouch ? '' : 'touchStart')"
      @touchmove="parseEventDynamicCode($event, ec.disableTouch ? '' : 'touchMove')"
      @touchend="parseEventDynamicCode($event, ec.disableTouch ? '' : 'touchEnd')"
    />
    <!-- 旧的 -->
    <canvas
      v-else
      class="ec-canvas"
      :canvas-id="canvasId"
      @init="init"
      @touchstart="parseEventDynamicCode($event, ec.disableTouch ? '' : 'touchStart')"
      @touchmove="parseEventDynamicCode($event, ec.disableTouch ? '' : 'touchMove')"
      @touchend="parseEventDynamicCode($event, ec.disableTouch ? '' : 'touchEnd')"
    />
  </view>
</template>

<script>
/* eslint-disable */
import WxCanvas from './wx-canvas';
import * as echarts from './echarts.js';

console.log('echarts', echarts.registerPreprocessor)
let ctx;
function compareVersion(v1, v2) {
    v1 = v1.split('.');
    v2 = v2.split('.');
    const len = Math.max(v1.length, v2.length);
    while (v1.length < len) {
        v1.push('0');
    }
    while (v2.length < len) {
        v2.push('0');
    }
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
}
export default {
    data() {
        return {
            isUseNewCanvas: false
        };
    },
    props: {
        canvasId: {
            type: String,
            default: 'ec-canvas'
        },
        ec: {
            type: Object
        },
        forceUseOldCanvas: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        // 处理小程序 ready 生命周期
        this.$nextTick(() => this.ready());
    },
    methods: {
        ready: function () {
            // Disable prograssive because drawImage doesn't support DOM as parameter
            // See https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.drawImage.html
            echarts.registerPreprocessor?.((option) => {
                if (option && option.series) {
                    if (option.series.length > 0) {
                        option.series.forEach((series) => {
                            series.progressive = 0;
                        });
                    } else if (typeof option.series === 'object') {
                        option.series.progressive = 0;
                    }
                }
            });
            if (!this.ec) {
                console.warn('组件需绑定 ec 变量，例：<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');
                return;
            }
            if (!this.ec.lazyLoad) {
                this.init();
            }
        },

        init: function (callback) {
            const version = uni.getSystemInfoSync().SDKVersion;
            const canUseNewCanvas = compareVersion(version, '2.9.0') >= 0;
            const forceUseOldCanvas = this.forceUseOldCanvas;
            const isUseNewCanvas = canUseNewCanvas && !forceUseOldCanvas;
                this.isUseNewCanvas = isUseNewCanvas;
                
            if (forceUseOldCanvas && canUseNewCanvas) {
                console.warn('开发者强制使用旧canvas,建议关闭');
            }
            if (isUseNewCanvas) {
                // console.log('微信基础库版本大于2.9.0，开始使用<canvas type="2d"/>');
                // 2.9.0 可以使用 <canvas type="2d"></canvas>
                this.initByNewWay(callback);
            } else {
                const isValid = compareVersion(version, '1.9.91') >= 0;
                if (!isValid) {
                    console.error(
                        '\u5FAE\u4FE1\u57FA\u7840\u5E93\u7248\u672C\u8FC7\u4F4E\uFF0C\u9700\u5927\u4E8E\u7B49\u4E8E 1.9.91\u3002\u53C2\u89C1\uFF1Ahttps://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82'
                    );
                    return;
                } else {
                    console.warn('建议将微信基础库调整大于等于2.9.0版本。升级后绘图将有更好性能');
                    this.initByOldWay(callback);
                }
            }
        },

        initByOldWay(callback) {
            // 1.9.91 <= version < 2.9.0：原来的方式初始化
            ctx = uni.createCanvasContext(this.canvasId, this);
            const canvas = new WxCanvas(ctx, this.canvasId, false);
            if (echarts.setPlatformAPI) {
                echarts.setPlatformAPI({
                    createCanvas: () => canvas
                });
            } else {
                echarts.setCanvasCreator(() => canvas);
            }
            // const canvasDpr = wx.getSystemInfoSync().pixelRatio // 微信旧的canvas不能传入dpr
            const canvasDpr = 1;
            var query = uni.createSelectorQuery().in(this);
            query
                .select('.ec-canvas')
                .boundingClientRect((res) => {
                    if (typeof callback === 'function') {
                        this.chart = callback(canvas, res.width, res.height, canvasDpr);
                    } else if (this.ec && typeof this.ec.onInit === 'function') {
                        this.chart = this.ec.onInit(canvas, res.width, res.height, canvasDpr);
                    } else {
                        this.$emit('init', {
                            detail: {
                                canvas: canvas,
                                width: res.width,
                                height: res.height,
                                canvasDpr: canvasDpr // 增加了dpr，可方便外面echarts.init
                            }
                        });
                    }
                })
                .exec();
        },

        initByNewWay(callback) {
            // version >= 2.9.0：使用新的方式初始化
            const query = uni.createSelectorQuery().in(this);
            query
                .select('.ec-canvas')
                .fields({
                    node: true,
                    size: true
                })
                .exec((res) => {
                    const canvasNode = res[0].node;
                    this.canvasNode = canvasNode;
                    const canvasDpr = uni.getSystemInfoSync().pixelRatio;
                    const canvasWidth = res[0].width;
                    const canvasHeight = res[0].height;
                    const ctx = canvasNode.getContext('2d');
                    const canvas = new WxCanvas(ctx, this.canvasId, true, canvasNode);
                    if (echarts.setPlatformAPI) {
                        echarts.setPlatformAPI({
                            createCanvas: () => canvas,
                            loadImage: (src, onload, onerror) => {
                                if (canvasNode.createImage) {
                                    const image = canvasNode.createImage();
                                    image.onload = onload;
                                    image.onerror = onerror;
                                    image.src = src;
                                    return image;
                                }
                                console.error('加载图片依赖 `Canvas.createImage()` API，要求小程序基础库版本在 2.7.0 及以上。');
                                // PENDING fallback?
                            }
                        });
                    } else {
                        echarts.setCanvasCreator(() => canvas);
                    }
                    if (typeof callback === 'function') {
                        this.chart = callback(canvas, canvasWidth, canvasHeight, canvasDpr);
                    } else if (this.ec && typeof this.ec.onInit === 'function') {
                        this.chart = this.ec.onInit(canvas, canvasWidth, canvasHeight, canvasDpr);
                    } else {
                        this.$emit('init', {
                            detail: {
                                canvas: canvas,
                                width: canvasWidth,
                                height: canvasHeight,
                                dpr: canvasDpr
                            }
                        });
                    }
                });
        },

        canvasToTempFilePath(opt) {
            if (this.isUseNewCanvas) {
                // 新版
                const query = uni.createSelectorQuery().in(this);
                query
                    .select('.ec-canvas')
                    .fields({
                        node: true,
                        size: true
                    })
                    .exec((res) => {
                        const canvasNode = res[0].node;
                        opt.canvas = canvasNode;
                        uni.canvasToTempFilePath(opt);
                    });
            } else {
                // 旧的
                if (!opt.canvasId) {
                    opt.canvasId = this.canvasId;
                }
                ctx.draw(true, () => {
                    uni.canvasToTempFilePath(opt, this);
                });
            }
        },

        touchStart(e) {
            if (this.chart && e.touches.length > 0) {
                var touch = e.touches[0];
                var handler = this.chart.getZr().handler;
                handler.dispatch('mousedown', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: () => {},
                    stopImmediatePropagation: () => {},
                    stopPropagation: () => {}
                });
                handler.dispatch('mousemove', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: () => {},
                    stopImmediatePropagation: () => {},
                    stopPropagation: () => {}
                });
                handler.processGesture(wrapTouch(e), 'start');
            }
        },

        touchMove(e) {
            if (this.chart && e.touches.length > 0) {
                var touch = e.touches[0];
                var handler = this.chart.getZr().handler;
                handler.dispatch('mousemove', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: () => {},
                    stopImmediatePropagation: () => {},
                    stopPropagation: () => {}
                });
                handler.processGesture(wrapTouch(e), 'change');
            }
        },

        touchEnd(e) {
            if (this.chart) {
                const touch = e.changedTouches ? e.changedTouches[0] : {};
                var handler = this.chart.getZr().handler;
                handler.dispatch('mouseup', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: () => {},
                    stopImmediatePropagation: () => {},
                    stopPropagation: () => {}
                });
                handler.dispatch('click', {
                    zrX: touch.x,
                    zrY: touch.y,
                    preventDefault: () => {},
                    stopImmediatePropagation: () => {},
                    stopPropagation: () => {}
                });
                handler.processGesture(wrapTouch(e), 'end');
            }
        }
    },
    created: function () {}
};
function wrapTouch(event) {
    for (let i = 0; i < event.touches.length; ++i) {
        const touch = event.touches[i];
        touch.offsetX = touch.x;
        touch.offsetY = touch.y;
    }
    return event;
}
</script>
<style>
.ec-canvas {
    width: 100%;
    height: 100%;
}

</style>
