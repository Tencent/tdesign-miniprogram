import { SuperComponent, wxComponent } from '../common/src/index';
import { TdToastProps } from './type';
import config from '../common/config';
import Props from './props';

const { prefix } = config;
const name = `${prefix}-toast`;

@wxComponent()
export default class Toast extends SuperComponent {
  externalClasses = ['t-class'];

  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  hideTimer: number | null = null;

  removeTimer: number | null = null;

  typeMapIcon: Record<string, string> = {
    loading: 'loading',
    success: 'check-circle',
    fail: 'error-circle',
  };

  data = {
    inserted: false,
    show: false,
    classPrefix: name,
    typeMapIcon: '',
  };

  properties = Props;

  show(userOptions: TdToastProps) {
    const options = {
      message: '',
      icon: '',
      theme: '',
      direction: 'row',
      placement: 'middle',
      preventScrollThrough: false,
      duration: 2000,
      ...userOptions,
    };
    if (this.hideTimer) clearTimeout(this.hideTimer);
    if (this.removeTimer) clearTimeout(this.removeTimer);
    const typeMapIcon =
      Object.keys(this.typeMapIcon).indexOf(options?.theme as any) !== -1
        ? this.typeMapIcon[options?.theme as any]
        : '';

    const data = {
      ...options,
      show: true,
      typeMapIcon,
      inserted: true,
    };
    const { duration } = data;
    this.setData(data);
    this.hideTimer = setTimeout(() => {
      this.clear();
    }, duration as any);
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
