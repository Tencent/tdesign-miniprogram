import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-pull-down-refresh`;
console.log(name);

TComponent({
  options: {
    multipleSlots: true,
  },

  externalClasses: ['t-class'],

  properties: {
    maxBarHeight: Number,
    normalBarHeight: Number,
    refreshTimeout: Number,
    background: {
      type: String,
      value: '#F5F5F5',
    },
    loadingColorType: {
      type: String,
      observer(this: any, loadingColorType: string) {
        let loadingImg = './loading.png';
        if (loadingColorType === 'white') {
          loadingImg = './loading-white.png';
        }
        this.setData({ loadingImg });
      },
    },
    color: {
      type: String,
      value: '#999999',
    },
    loadingSize: String,
    // 字体size，会按比例计算loading size
    fontSize: {
      type: String,
      value: '24rpx',
      observer(this: any, fontSize: string) {
        // 没有定义loadingSize的情况下，自动根据字体size按比例缩放loading
        if (this.properties.loadingSize as any as string) return;
        const res = fontSize.match(/([\d\\.]+)([^\d]*)/);
        if (!res) return;
        // eslint-disable-next-line prefer-destructuring
        const unit = res[2];
        let loadingSize = parseFloat(res[1]);
        if (loadingSize > 0) {
          loadingSize = loadingSize * (40 / 24);
          this.setData({ loadingSize: loadingSize + unit });
        }
      },
    },
    useLoadingSlot: Boolean,
    loadingTexts: {
      type: Array,
      value: ['下拉刷新', '释放刷新', '正在刷新', '刷新完成', ''],
    },
  },

  data: {
    classPrefix: name,
    loadingSize: '40rpx',
    loadingImg: './loading.png',
    barHeight: 0,
    refreshStatus: 0, // 0-未开始，1释放可刷新，2-刷新中，3-刷新成功，4-结束中
    rotate: 0, // 旋转角度，refreshStatus为0、1时根据下拉距离动态计算得出
    useLoadingSlot: false,
  },

  lifetimes: {
    created() {
      this.isScrollToTop = true;
      this.pixelRatio = 1; // 像素比(rpx与px在此设备上的比值)
      // startPoint: { pageX: number; pageY: number } | null = null;
      this.startPoint = null; // 下拉开始的起点，主要用于计算下拉高度
      this.isPulling = false; // 是否下拉中
      this.DefaultBarHeight = 0; // 下拉效果的默认高度
      this.MaxBarHeight = 200; // 最大下拉高度，单位 rpx
      // 触发刷新的下拉高度，单位rpx
      // 松开时下拉高度大于这个值即会触发刷新，触发刷新后松开，会恢复到这个高度并保持，直到刷新结束
      this.NormalBarHeight = 150;

      this.RefreshTimeout = 2000; // 刷新超时时间，超过没有回调刷新成功，会自动结束刷新动画。单位 ms

      /** 开始刷新 - 刷新成功/失败 最小间隔时间setTimeout句柄 */
      this.minRefreshTimeFlag = 0;
      /** 刷新成功/失败 - 关闭刷新动画 最小间隔时间setTimeout句柄 */
      this.minRefreshStatusShowTimeFlag = 0;
      /** 开始刷新 - 刷新成功/失败 最大间隔时间setTimeout句柄 */
      this.maxRefreshAnimateTimeFlag = 0;
      /** 关闭动画耗时setTimeout句柄 */
      this.closingAnimateTimeFlag = 0;
    },

    attached() {
      const systemInfo = wx.getSystemInfoSync();
      // 计算像素比
      this.screenWidth = systemInfo.screenWidth;
      this.pixelRatio = 750 / systemInfo.screenWidth;
      // 判断是否ios
      this.ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);

      // 自定义拉下宽度
      const maxBarHeight = this.properties.maxBarHeight as any as number;
      if (maxBarHeight) {
        this.MaxBarHeight = maxBarHeight;
      }
      const normalBarHeight = this.properties.normalBarHeight as any as number;
      if (normalBarHeight) {
        this.NormalBarHeight = normalBarHeight;
      }
      const refreshTimeout = this.properties.refreshTimeout as any as number;
      if (refreshTimeout) {
        this.RefreshTimeout = refreshTimeout;
      }
    },

    detached() {
      this.cleanTimeFlag();
    },
  },

  methods: {
    onPageScroll(e) {
      const { scrollTop } = e;
      this.isScrollToTop = scrollTop === 0;
    },

    /** 清理timeout */
    cleanTimeFlag() {
      clearTimeout(this.minRefreshTimeFlag);
      clearTimeout(this.minRefreshStatusShowTimeFlag);
      clearTimeout(this.maxRefreshAnimateTimeFlag);
      clearTimeout(this.closingAnimateTimeFlag);
    },

    onTouchStart(e: any) {
      // 如果页面没滚动到顶部，不做处理
      // 如果下拉效果没有结束，不做处理
      if (!this.isScrollToTop || this.isPulling) return;
      const { touches } = e;
      if (touches.length !== 1) return;
      // eslint-disable-next-line prefer-destructuring
      const { pageX, pageY } = touches[0];
      this.startPoint = { pageX, pageY }; // 设置起点
      this.isPulling = true; // 进入下拉状态
    },

    onTouchMove(e) {
      // 如果页面没滚到顶部，不做处理
      // 如果没有起点，不做处理
      if (!this.isScrollToTop || !this.startPoint) return;
      const { touches } = e;
      if (touches.length !== 1) return;
      // eslint-disable-next-line prefer-destructuring
      const { pageY } = touches[0];
      const offset = pageY - this.startPoint.pageY;
      const barHeight = this.toRpx(offset);
      if (barHeight > 0) {
        if (barHeight > this.MaxBarHeight) {
          // 限高
          this.setRefreshBarHeight(this.MaxBarHeight);
          this.startPoint.pageY = pageY - this.toPx(this.MaxBarHeight); // 限高的同时修正起点，避免触摸点上移时无效果
        } else {
          this.setRefreshBarHeight(barHeight);
        }
      }
    },

    onTouchEnd(e) {
      // 如果没有起点，不做处理
      if (!this.startPoint) return;
      const { changedTouches } = e;
      if (changedTouches.length !== 1) return;
      // eslint-disable-next-line prefer-destructuring
      const { pageY } = changedTouches[0];
      const barHeight = this.toRpx(pageY - this.startPoint.pageY);
      this.startPoint = null; // 清掉起点，之后将忽略touchMove、touchEnd事件
      // 松开时高度超过阈值则触发刷新
      if (barHeight > this.NormalBarHeight) {
        this.setData({
          barHeight: this.NormalBarHeight,
          rotate: 0,
          refreshStatus: 2,
        }); // 正在刷新
        const startTime = Date.now();
        const callback = () => {
          // 正在刷新效果至少持续1秒钟
          const remainTime = 1000 - (Date.now() - startTime);
          this.minRefreshTimeFlag = setTimeout(
            () => {
              // 清理自身timeout
              this.minRefreshTimeFlag = 0;

              // 如果还没超时
              if (this.maxRefreshAnimateTimeFlag) {
                // 清理超时setup
                clearTimeout(this.maxRefreshAnimateTimeFlag);
                this.maxRefreshAnimateTimeFlag = 0;

                // 执行成功状态展示
                this.setData({ refreshStatus: 3 }); // 刷新成功
                this.minRefreshStatusShowTimeFlag = setTimeout(() => {
                  this.minRefreshStatusShowTimeFlag = 0;

                  this.close();
                }, 1000) as any as number; // 刷新成功展示持续一段时间后再结束
              }
            },
            remainTime > 0 ? remainTime : 0,
          ) as any as number;
        };
        this.triggerEvent('refresh', { callback });
        this.maxRefreshAnimateTimeFlag = setTimeout(() => {
          // 清理自身timeout
          this.maxRefreshAnimateTimeFlag = 0;

          if (this.data.refreshStatus === 2) {
            this.close(); // 超时仍未被回调，则直接结束下拉
          }
        }, this.RefreshTimeout) as any as number;
      } else {
        this.close();
      }
    },

    toRpx(v: number) {
      return v * this.pixelRatio;
    },

    toPx(v: number) {
      return v / this.pixelRatio;
    },

    setRefreshBarHeight(barHeight: number): Promise<number> {
      const data = { barHeight };
      if (barHeight >= this.NormalBarHeight) {
        data.refreshStatus = 1;
        data.rotate = 720; // 大于正常高度后不再旋转
      } else {
        data.refreshStatus = 0;
        data.rotate = (barHeight / this.NormalBarHeight) * 720; // 小于正常高度时随下拉高度旋转720度
      }
      return new Promise((resolve) => {
        this.setData(data, () => resolve(barHeight));
      });
    },

    close() {
      this.setData({ barHeight: this.DefaultBarHeight, refreshStatus: 4 }); // 结束下拉
      this.closingAnimateTimeFlag = setTimeout(() => {
        // 清理自身timeout
        this.closingAnimateTimeFlag = 0;

        if (this.minRefreshStatusShowTimeFlag) {
          clearTimeout(this.minRefreshStatusShowTimeFlag);
          this.minRefreshStatusShowTimeFlag = 0;
        }

        this.setData({ refreshStatus: 0 });
        this.isPulling = false; // 退出下拉状态
      }, 1000) as any as number;
    },
  },
});
