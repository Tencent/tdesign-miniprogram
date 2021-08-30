import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-toast`;

type ToastType = 'loading' | 'success' | 'fail';
type ToastPositionType = 'top' | 'middle' | 'bottom';
type ToastDirectionType = 'row' | 'column';

type ToastOptionsType = {
  icon?: string;
  message: string;
  duration?: number;
  type?: ToastType;
  position?: ToastPositionType;
  showOverlay?: boolean;
  direction?: ToastDirectionType;
};

const DefaultOptions: ToastOptionsType = {
  icon: '',
  message: '',
  duration: 2000,
  direction: 'row',
  position: 'middle',
  showOverlay: false,
};

@wxComponent()
export default class Toast extends SuperComponent {
  externalClasses = ['t-class'];
  hideTimer: number | null = null;
  removeTimer: number | null = null;
  typeMapIcon: Record<string, string> = {
    loading: 'loading',
    success: 'tick',
    fail: 'close',
  };

  data = {
    inserted: false,
    show: false,
    classPrefix: name,
  };

  properties: AnyObject = {
    icon: String,
    message: String,
    duration: Number,
    type: String,
    position: String,
    showOverlay: Boolean,
    direction: String,
    typeMapIcon: String,
  };

  show(options: ToastOptionsType) {
    if (this.hideTimer) clearTimeout(this.hideTimer);
    if (this.removeTimer) clearTimeout(this.removeTimer);
    const typeMapIcon =
      Object.keys(this.typeMapIcon).indexOf(options?.type) !== -1
        ? this.typeMapIcon[options?.type]
        : '';

    const data = {
      ...DefaultOptions,
      ...options,
      show: true,
      typeMapIcon,
      inserted: true,
    };
    const { duration } = data;
    this.setData(data);
    this.hideTimer = setTimeout(() => {
      this.clear();
    }, duration as number);
  }
  clear() {
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
