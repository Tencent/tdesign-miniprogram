import dom from '../behaviors/dom';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

let ARRAY: WechatMiniprogram.Component.TrivialInstance[] = [];
const { prefix } = config;

@wxComponent()
export default class SwiperCell extends SuperComponent {
  behaviors = [dom];

  externalClasses = ['t-class'];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    wrapperStyle: '',
    closed: true,
    opened: false,
    classPrefix: `.${prefix}-swipe-cell`,
  };

  attached() {
    ARRAY.push(this as WechatMiniprogram.Component.TrivialInstance);
    wx.nextTick(() => {
      this.setSwipeWidth();
    });
  }

  async setSwipeWidth() {
    const rightRect = await this.gettingBoundingClientRect(`${this.data.classPrefix}__right`);
    const leftRect = await this.gettingBoundingClientRect(`${this.data.classPrefix}__left`);
    this.setData({
      leftWidth: leftRect.width,
      rightWidth: rightRect.width,
    });
  }

  detached() {
    ARRAY = ARRAY.filter((item) => item !== this);
  }

  open() {
    this.setData({ opened: true });
  }

  close() {
    this.setData({ opened: false });
  }

  closeOther() {
    ARRAY.filter((item) => item !== this).forEach((item) => item.close());
  }

  onTap() {
    this.close();
  }

  onActionTap(event) {
    const {
      currentTarget: {
        dataset: { action },
      },
    } = event;
    this.triggerEvent('click', action);
  }
}
