import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getRect } from '../common/utils';

const systemInfo = wx.getSystemInfoSync();
const { prefix } = config;
const name = `${prefix}-fab`;
const defRight = 16;
const defBottom = 32;

@wxComponent()
export default class Fab extends SuperComponent {
  properties = props;

  externalClasses = [`class`, `${prefix}-class`, `${prefix}-class-button`];

  data = {
    prefix,
    classPrefix: name,
    baseButtonProps: {
      size: 'large',
      shape: 'circle',
      theme: 'primary',
    },
    baseMovableViewProps: {
      direction: 'all',
      inertia: false,
      disabled: false,
    },
    defRight,
    defBottom,
    movableViewX: systemInfo.windowWidth - (40 + defRight), // 默认fab宽度为40
    movableViewY: systemInfo.windowHeight - (40 + defBottom), // 默认fab高度为40
  };

  observers = {
    text(val) {
      if (!val) return;
      this.setData({
        baseButtonProps: { ...this.data.baseButtonProps, shape: 'round' },
      });
    },
    movableViewProps(val) {
      this.setData({
        baseMovableViewProps: { ...this.data.baseMovableViewProps, ...val },
      });
    },
    'buttonProps, icon, text'() {
      if (!this.properties.movable) return;
      wx.nextTick(() => {
        getRect(this, `.${this.data.classPrefix}-movable_view`).then(({ height, width }) => {
          this.setData({
            movableViewX: systemInfo.windowWidth - (width + defRight),
            movableViewY: systemInfo.windowHeight - (height + defBottom),
          });
        });
      });
    },
  };

  methods = {
    onTplButtonTap(e) {
      this.triggerEvent('click', e);
    },
    movableViewMove(e) {
      this.triggerEvent('move', e);
    },
  };
}
