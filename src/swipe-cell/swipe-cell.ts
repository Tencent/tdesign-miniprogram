import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getRect } from '../common/utils';
import { getObserver } from '../common/wechat';

let ARRAY: WechatMiniprogram.Component.TrivialInstance[] = [];

const { prefix } = config;
const name = `${prefix}-swipe-cell`;
const ContainerClass = `.${name}`;

@wxComponent()
export default class SwiperCell extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    wrapperStyle: '',
    closed: true,
    classPrefix: name,
  };

  observers = {
    'left, right'() {
      this.setSwipeWidth();
    },
  };

  lifetimes = {
    attached() {
      ARRAY.push(this as WechatMiniprogram.Component.TrivialInstance);
    },

    ready() {
      this.setSwipeWidth();
    },

    detached() {
      ARRAY = ARRAY.filter((item) => item !== this);
    },
  };

  setSwipeWidth() {
    Promise.all([getRect(this, `${ContainerClass}__left`), getRect(this, `${ContainerClass}__right`)]).then(
      ([leftRect, rightRect]) => {
        if (leftRect.width === 0 && rightRect.width === 0 && !this._hasObserved) {
          this._hasObserved = true;
          getObserver(this, `.${name}`).then(() => {
            this.setSwipeWidth();
          });
        }
        this.setData({
          leftWidth: leftRect.width,
          rightWidth: rightRect.width,
        });
      },
    );
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
