import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import pageScrollMixin from '../mixins/page-scroll';
import useCustomNavbar from '../mixins/using-custom-navbar';
import { calcIcon, unitConvert, systemInfo } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-fab`;
const baseButtonProps = {
  size: 'large',
  shape: 'circle',
  theme: 'primary',
  tClass: `${prefix}-fab__button`,
};

@wxComponent()
export default class Fab extends SuperComponent {
  behaviors = [pageScrollMixin(), useCustomNavbar];

  properties = props;

  externalClasses = [`class`, `${prefix}-class`, `${prefix}-class-button`];

  collapseTimer = null;

  data = {
    prefix,
    classPrefix: name,
    buttonData: baseButtonProps,
    moveStyle: null,
    collapsedStyle: 'right: 0;',
    collapsed: false,
  };

  lifetimes = {
    ready() {
      this.startCollapseTimer();
    },

    detached() {
      this.clearCollapseTimer();
    },
  };

  observers = {
    'buttonProps.**, icon, text, ariaLabel, yBounds'() {
      this.setData(
        {
          buttonData: {
            ...baseButtonProps,
            shape: this.properties.text ? 'round' : 'circle',
            ...this.properties.buttonProps,
            icon: calcIcon(this.properties.icon),
            content: this.properties.text,
            ariaLabel: this.properties.ariaLabel,
          },
        },
        this.computedSize?.bind(this),
      );
    },

    'collapsible, collapseDuration'() {
      this.expand();
    },
  };

  methods = {
    clearCollapseTimer() {
      if (this.collapseTimer) {
        clearTimeout(this.collapseTimer);
        this.collapseTimer = null;
      }
    },

    startCollapseTimer() {
      this.clearCollapseTimer();
      if (!this.properties.collapsible || this.properties.collapseDuration <= 0) return;

      this.collapseTimer = setTimeout(() => {
        this.setData({ collapsed: true });
        this.collapseTimer = null;
      }, this.properties.collapseDuration);
    },

    expand() {
      this.setData({ collapsed: false }, this.startCollapseTimer.bind(this));
    },

    onScroll() {
      if (!this.properties.collapsible) return;
      this.expand();
    },

    onCollapsedTap() {
      this.expand();
    },

    onTplButtonTap(e) {
      if (this.data.collapsed) return;
      this.startCollapseTimer();
      this.triggerEvent('click', e);
    },

    onStart(e) {
      this.clearCollapseTimer();
      this.setData({ collapsed: false });
      this.triggerEvent('dragstart', e.detail.e);
    },

    onMove(e) {
      const { yBounds } = this.properties;
      const { distanceTop } = this.data;

      const { x, y, rect } = e.detail;
      const maxX = systemInfo.windowWidth - rect.width; // 父容器宽度 - 拖动元素宽度
      const maxY = systemInfo.windowHeight - Math.max(distanceTop, unitConvert(yBounds[0])) - rect.height; // 父容器高度 - 拖动元素高度

      const right = Math.max(0, Math.min(x, maxX));
      const bottom = Math.max(0, unitConvert(yBounds[1]), Math.min(y, maxY));
      this.setData({
        moveStyle: `right: ${right}px; bottom: ${bottom}px;`,
      });
    },

    onEnd(e) {
      this.startCollapseTimer();
      this.triggerEvent('dragend', e.detail.e);
    },

    computedSize() {
      if (!this.properties.draggable) return;
      const insChild = this.selectComponent('#draggable');
      // button更新时，重新获取其尺寸
      if (this.properties?.yBounds?.[1]) {
        this.setData({ moveStyle: `bottom: ${unitConvert(this.properties.yBounds[1])}px` }, insChild.computedRect);
      } else {
        insChild.computedRect();
      }
    },
  };
}
