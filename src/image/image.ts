import { SuperComponent, wxComponent } from '../common/src/index';
import imageMogr from './imageMogr';

@wxComponent()
export default class WrImage extends SuperComponent {
  externalClasses = ['wr-class'];
  options = {
    multipleSlots: true,
  };
  properties = {
    src: {
      type: String,
      observer(this: WrImage) {
        this.update();
      },
    },
    imgStyle: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: true,
    },
    width: Number,
    height: Number,
    lazyLoad: Boolean,
    loadingImage: String,
    useLoadingSlot: Boolean,
    loadFailedImage: {
      type: String,
      value: 'jiazaishibai',
    },
    useLoadFailedSlot: Boolean,
    noImgMogr: Boolean,
    noInlineSize: Boolean,
  };
  data = {
    src: '',
    loading: true,
    failed: false,
    url: '',
    widthStyle: '', // 自动计算的图片宽度样式（兼容基础库版本2.10.3以下的版本不支持heightFix模式）
  };
  lifetimes = {
    attached(this: WrImage) {
      this.update();
    },
  };
  onLoaded(e: any) {
    const sdkVersion = wx.getSystemInfoSync().SDKVersion;
    const versionArray = sdkVersion.split('.').map((v) => parseInt(v));
    // 版本号低于2.10.3时组件内部实现heightFix模式
    if (
      versionArray[0] < 2 ||
      (versionArray[0] === 2 && versionArray[1] < 10) ||
      (versionArray[0] === 2 && versionArray[1] === 10 && versionArray[2] < 3)
    ) {
      const mode = this.properties.mode as any as string;
      if (mode === 'heightFix') {
        // 实现heightFix模式，保持高度和宽高比，设置对应的宽度
        const { height: picHeight, width: picWidth } = e.detail;
        const query = this.createSelectorQuery();
        query
          .select('#image')
          .boundingClientRect((res) => {
            const { height } = res;
            const resultWidth = ((height / picHeight) * picWidth).toFixed(2);
            this.setData({ widthStyle: `width: ${resultWidth}px;` });
          })
          .exec();
      }
    }
    this.setData({
      loading: false,
      failed: false,
    });
    this.triggerEvent('load', e.detail);
  }
  onLoadError(e: any) {
    this.setData({
      loading: false,
      failed: true,
    });
    this.triggerEvent('error', e.detail);
  }
  buildUrl() {
    const { src, webp, mode, width = '', height = '', noImageMogr } = this.properties as any;
    if (src) {
      this.setData({
        url: noImageMogr ? src : imageMogr({ url: src, webp, mode, width, height }),
        loading: true,
        failed: false,
      });
    } else {
      this.onLoadError({ detail: { errMsg: '图片地址为空' } });
    }
  }
  update() {
    const { src } = this.properties as any;
    if (!src) {
      // 链接为空时直接触发加载失败
      this.onLoadError({ errMsg: '图片链接为空' });
      console.error('图片链接为空');
    } else {
      this.buildUrl();
    }
  }
}
