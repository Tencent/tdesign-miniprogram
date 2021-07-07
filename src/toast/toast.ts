import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-toast`;

type ToastOptionsType = {
  icon?: string;
  iconSize?: number | string;
  iconColor?: string;
  text: string;
  textColor?: string;
  fontSize?: number | string;
  zIndex?: number;
  duration?: number;
  direction?: string;
};

const DefaultOpions: ToastOptionsType = {
  icon: '',
  iconColor: '#ffffff',
  iconSize: '96rpx',
  text: '',
  textColor: '#ffffff',
  zIndex: 10002,
  fontSize: '28rpx',
  duration: 2000,
  direction: 'row',
};

@wxComponent()
export default class Toast extends SuperComponent {
  externalClasses = ['t-class'];
  hideTimer: number | null = null;
  removeTimer: number | null = null;

  data = {
    inserted: false,
    show: false,
    classPrefix: name,
  };

  properties: AnyObject = {
    icon: String,
    iconColor: String,
    iconSize: null,
    text: String,
    textColor: String,
    zIndex: Number,
    fontSize: null,
    duration: Number,
    direction: String,
  };
  show(options: ToastOptionsType) {
    if (this.hideTimer) clearTimeout(this.hideTimer);
    if (this.removeTimer) clearTimeout(this.removeTimer);
    const data = {
      ...DefaultOpions,
      ...options,
      show: true,
      inserted: true,
    };
    const { duration } = data;
    this.setData(data);
    this.hideTimer = setTimeout(() => {
      this.hide();
    }, duration as number);
  }
  hide() {
    this.setData({ show: false });
    this.removeTimer = setTimeout(() => {
      this.setData({
        inserted: false,
      });
    }, 300);
  }
  detached() {
    this.destroyed();
  }
  destroyed() {
    if (this.removeTimer) {
      clearTimeout(this.removeTimer);
      this.removeTimer = null;
    }
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }
}
