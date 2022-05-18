import { styles } from '../common/utils';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-image-viewer`;

@wxComponent()
export default class ImageViewer extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = {
    ...props,
  };

  data = {
    prefix,
    classPrefix: name,
    currentSwiperIndex: 0,
    windowHeight: 0,
    windowWidth: 0,
    imagesShape: {},
  };

  options = {
    multipleSlots: true,
  };

  controlledProps = [
    {
      key: 'visible',
      event: 'close',
    },
  ];

  ready() {
    this.saveScreenSize();
  }

  observers = {
    visible(value) {
      this.setData({
        currentSwiperIndex: value ? this.properties.initialIndex : 0,
      });
    },
  };

  methods = {
    saveScreenSize() {
      const { windowHeight, windowWidth } = wx.getSystemInfoSync();
      this.setData({
        windowHeight,
        windowWidth,
      });
    },

    calcImageDisplayStyle(imageWidth, imageHeight) {
      const { windowWidth, windowHeight } = this.data;
      // 图片宽高都小于屏幕宽高
      if (imageWidth < windowWidth && imageHeight < windowHeight) {
        return {
          mode: 'scaleToFill',
          styleObj: {
            width: '100%',
            height: `${imageHeight * 2}rpx`,
          },
        };
      }

      // 图片宽高都大等于屏幕宽高
      if (imageWidth >= windowWidth && imageHeight >= windowHeight) {
        return {
          mode: 'aspectFit',
          styleObj: {
            width: '100%',
            height: `${(imageHeight / (imageWidth / windowWidth)) * 2}rpx`,
          },
        };
      }

      // 图片超高：图片宽小于屏幕宽，图片高大于等于屏幕高
      if (imageWidth < windowWidth && imageHeight >= windowHeight) {
        return {
          mode: 'widthFix',
          styleObj: {
            width: `${(imageWidth / (imageHeight / windowHeight)) * 2}rpx`,
            height: '100vh',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        };
      }

      // 图片超宽：图片宽大于等于屏幕宽，图片高小于屏幕高
      if (imageWidth >= windowWidth && imageHeight < windowHeight) {
        return {
          mode: 'heightFix',
          styleObj: {
            width: '100%',
            height: `${(imageHeight / (imageWidth / windowWidth)) * 2}rpx`,
          },
        };
      }
    },

    onImageLoadSuccess(e: WechatMiniprogram.TouchEvent) {
      const {
        detail: { width, height },
        currentTarget: {
          dataset: { index },
        },
      } = e;
      const { mode, styleObj } = this.calcImageDisplayStyle(width, height);
      const origin = this.data.imagesShape;
      this.setData({
        imagesShape: {
          ...origin,
          [index]: {
            mode,
            style: styles({ ...styleObj }),
          },
        },
      });
    },

    onSwiperChange(e: WechatMiniprogram.TouchEvent) {
      const {
        detail: { current },
      } = e;
      this.setData({
        currentSwiperIndex: current,
      });
      this._trigger('change', { index: current });
    },

    onClose(e: WechatMiniprogram.TouchEvent) {
      const {
        target: {
          dataset: { source },
        },
      } = e;
      this._trigger('close', { visible: false, trigger: source, index: this.data.currentSwiperIndex });
    },

    onDelete() {
      this._trigger('delete', { index: this.data.currentSwiperIndex });
    },
  };
}
