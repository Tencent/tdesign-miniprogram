import { SuperComponent, wxComponent } from '../common/src/index';
import ImageProps from './props';
import config from '../common/config';
import { addUnit } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-image`;
@wxComponent()
export default class Image extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-load`];

  options = {
    multipleSlots: true,
  };

  properties = ImageProps;

  data = {
    prefix,
    isLoading: true,
    isFailed: false,
    innerStyle: '',
    classPrefix: name,
  };

  preSrc = ''; // 保留上一次的src,防止在src相同时重复update

  lifetimes = {
    attached() {
      const { width, height } = this.data;
      let innerStyle = '';
      this.update();

      if (width) {
        innerStyle += `width: ${addUnit(width)};`;
      }
      if (height) {
        innerStyle += `height: ${addUnit(height)};`;
      }
      this.setData({
        innerStyle,
      });
    },
  };

  observers = {
    src() {
      if (this.preSrc === this.properties.src) return;
      this.update();
    },
  };

  methods = {
    onLoaded(e: any) {
      const sdkVersion = wx.getSystemInfoSync().SDKVersion;
      const versionArray = sdkVersion.split('.').map((v) => parseInt(v, 10));
      const { mode } = this.properties;
      const isInCompatible =
        versionArray[0] < 2 ||
        (versionArray[0] === 2 && versionArray[1] < 10) ||
        (versionArray[0] === 2 && versionArray[1] === 10 && versionArray[2] < 3);
      // 版本号低于2.10.3时组件内部实现heightFix模式
      if (mode === 'heightFix' && isInCompatible) {
        // 实现heightFix模式，保持高度和宽高比，设置对应的宽度
        const { height: picHeight, width: picWidth } = e.detail;
        const query = this.createSelectorQuery();
        query
          .select('#image')
          .boundingClientRect((res) => {
            const { height } = res;
            const resultWidth = ((height / picHeight) * picWidth).toFixed(2);
            this.setData({ innerStyle: `height: ${addUnit(height)}; width: ${resultWidth}px;` });
          })
          .exec();
      }
      this.setData({
        isLoading: false,
        isFailed: false,
      });
      this.triggerEvent('load', e.detail);
    },

    onLoadError(e: any) {
      this.setData({
        isLoading: false,
        isFailed: true,
      });
      this.triggerEvent('error', e.detail);
    },

    update() {
      const { src } = this.properties;
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
    },
  };
}
