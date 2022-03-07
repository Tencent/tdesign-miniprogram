import { SuperComponent, wxComponent } from '../common/src/index';
import ImageProps from './props';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-image`;
@wxComponent()
export default class Image extends SuperComponent {
  externalClasses = ['t-class', 't-class-load'];

  options = {
    multipleSlots: true,
  };

  properties = ImageProps;

  data = {
    isLoading: true,
    isFailed: false,
    widthStyle: '', // 自动计算的图片宽度样式（兼容基础库版本2.10.3以下的版本不支持heightFix模式）
    classPrefix: name,
  };

  preSrc = ''; // 保留上一次的src,防止在src相同时重复update

  lifetimes = {
    attached(this: Image) {
      this.update();
    },
  };

  observers = {
    src() {
      if (this.preSrc === this.properties.src) return;
      this.update();
    },
  };

  onLoaded(e: any) {
    const sdkVersion = wx.getSystemInfoSync().SDKVersion;
    const versionArray = sdkVersion.split('.').map((v) => parseInt(v, 10));
    // 版本号低于2.10.3时组件内部实现heightFix模式
    if (
      versionArray[0] < 2 ||
      (versionArray[0] === 2 && versionArray[1] < 10) ||
      (versionArray[0] === 2 && versionArray[1] === 10 && versionArray[2] < 3)
    ) {
      const mode = (this.properties.mode as any) as string;
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
      isLoading: false,
      isFailed: false,
    });
    this.triggerEvent('load', e.detail);
  }

  onLoadError(e: any) {
    this.setData({
      isLoading: false,
      isFailed: true,
    });
    this.triggerEvent('error', e.detail);
  }

  update() {
    const { src } = this.properties as any;
    this.preSrc = src;
    if (!src) {
      // 链接为空时直接触发加载失败
      this.onLoadError({ errMsg: '图片链接为空' });
    } else {
      this.setData({
        isLoading: true,
        isFailed: false,
      });
    }
  }
}
