import { styles, setIcon } from '../common/utils';
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

    closeBtn(closeBtn) {
      const obj = setIcon('closeBtn', closeBtn, 'close');
      this.setData({
        ...obj,
      });
    },

    deleteBtn(deleteBtn) {
      const obj = setIcon('deleteBtn', deleteBtn, 'delete');
      this.setData({
        ...obj,
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
      const ratio = imageWidth / imageHeight;
      // 图片宽高都小于屏幕宽高
      if (imageWidth < windowWidth && imageHeight < windowHeight) {
        return {
          styleObj: {
            width: `${imageWidth * 2}rpx`,
            height: `${imageHeight * 2}rpx`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        };
      }
      // 图片宽高至少存在一个大于屏幕宽高，此时判断图片宽高比，按长边显示
      if (ratio >= 1) {
        return {
          styleObj: {
            width: '100vw',
            height: `${(windowWidth / ratio) * 2}rpx`,
          },
        };
      }
      return {
        styleObj: {
          width: `${ratio * windowHeight * 2}rpx`,
          height: '100vh',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      };
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

    onClose() {
      this._trigger('close', { visible: false, trigger: 'button', index: this.data.currentSwiperIndex });
    },

    onDelete() {
      this._trigger('delete', { index: this.data.currentSwiperIndex });
    },
  };
}
