import { SuperComponent, wxComponent } from '../common/src/index';
import { styles, calcIcon, systemInfo } from '../common/utils';
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
    loadedImageIndexes: [],
    windowHeight: 0,
    windowWidth: 0,
    swiperStyle: {},
    imagesStyle: {},
    maskTop: 0,
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
    this.calcMaskTop();
  }

  observers = {
    'visible,initialIndex,images'(visible, initialIndex, images) {
      if (visible && images?.length) {
        this.setData({
          loadedImageIndexes: [],
          currentSwiperIndex: initialIndex >= images.length ? images.length - 1 : initialIndex,
        });
      }
    },

    closeBtn(v) {
      this.setData({
        _closeBtn: calcIcon(v, 'close'),
      });
    },

    deleteBtn(v) {
      this.setData({
        _deleteBtn: calcIcon(v, 'delete'),
      });
    },
  };

  methods = {
    calcMaskTop() {
      if (this.data.usingCustomNavbar) {
        const rect = wx?.getMenuButtonBoundingClientRect() || null;
        const { statusBarHeight } = systemInfo;

        if (rect && statusBarHeight) {
          this.setData({
            maskTop: rect.top - statusBarHeight + rect.bottom,
          });
        }
      }
    },
    saveScreenSize() {
      const { windowHeight, windowWidth } = systemInfo;
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

      // 图片的高大于宽（纵向图），设定高度为100vh，宽度自适应，且确保宽度不超过屏幕宽度
      const scaledHeight = ratio * windowHeight * 2;
      if (scaledHeight < windowWidth) {
        return {
          styleObj: {
            width: `${scaledHeight}rpx`,
            height: '100vh',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        };
      }
      // 当通过高度计算的图片宽度超过屏幕宽度时, 以屏幕宽度为基准, 重新计算高度
      return {
        styleObj: {
          width: '100vw',
          height: `${(windowWidth / imageWidth) * imageHeight * 2}rpx`,
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
      const originImagesStyle = this.data.imagesStyle;
      const originSwiperStyle = this.data.swiperStyle;

      if (!this.data.loadedImageIndexes.includes(index)) {
        this.setData({
          loadedImageIndexes: [...this.data.loadedImageIndexes, index],
        });
      }

      this.setData({
        swiperStyle: {
          ...originSwiperStyle,
          [index]: {
            style: `height: ${styleObj.height}`,
          },
        },
        imagesStyle: {
          ...originImagesStyle,
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

    onClose(e) {
      const { source } = e.currentTarget.dataset;
      this._trigger('close', { visible: false, trigger: source || 'button', index: this.data.currentSwiperIndex });
    },

    onDelete() {
      this._trigger('delete', { index: this.data.currentSwiperIndex });
    },
  };
}
