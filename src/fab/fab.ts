import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';

const systemInfo = wx.getSystemInfoSync();
const { prefix } = config;
const name = `${prefix}-fab`;
const baseButtonProps = {
  size: 'large',
  shape: 'circle',
  theme: 'primary',
  externalClass: `${prefix}-fab__button`,
};

@wxComponent()
export default class Fab extends SuperComponent {
  behaviors = [useCustomNavbar];

  properties = props;

  externalClasses = [`class`, `${prefix}-class`, `${prefix}-class-button`];

  data = {
    prefix,
    classPrefix: name,
    buttonData: baseButtonProps,
    moveStyle: null,
  };

  observers = {
    'buttonProps.**, icon, text, ariaLabel'() {
      this.setData(
        {
          buttonData: {
            ...baseButtonProps,
            shape: this.properties.text ? 'round' : 'circle',
            icon: this.properties.icon,
            ...this.properties.buttonProps,
            content: this.properties.text,
            ariaLabel: this.properties.ariaLabel,
          },
        },
        this.computedSize?.bind(this),
      );
    },
  };

  methods = {
    onTplButtonTap(e) {
      this.triggerEvent('click', e);
    },
    onMove(e) {
      const { distanceTop } = this.data;

      const { x, y, rect } = e.detail;
      const maxX = systemInfo.windowWidth - rect.width; // 父容器宽度 - 拖动元素宽度
      const maxY = systemInfo.windowHeight - distanceTop - rect.height; // 父容器高度 - 拖动元素高度

      const right = Math.max(0, Math.min(x, maxX));
      const bottom = Math.max(0, Math.min(y, maxY));
      this.setData({
        moveStyle: `right: ${right}px; bottom: ${bottom}px;`,
      });
    },
    computedSize() {
      if (!this.properties.draggable) return;
      const insChild = this.selectComponent('#draggable');
      insChild.computedRect(); // button更新时，重新获取其尺寸
    },
  };
}
