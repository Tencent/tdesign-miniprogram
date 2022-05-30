import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';

import { pageScrollMixin, getRect } from './utils';

const { prefix } = config;

const ContainerClass = `.${prefix}-sticky`;
type ContainerRef = () => WechatMiniprogram.NodesRef;

interface StickyProps {
  zIndex: number;
  disabled: boolean;
  container: ContainerRef;
  offsetTop: number;
}

@wxComponent()
export default class Sticky extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties: StickyProps = props as any;

  behaviors = [
    pageScrollMixin(function (event) {
      this.onScroll(event);
    }),
  ];

  observers = {
    'offsetTop, disabled, container': this.onScroll,
  };

  data = {
    prefix,
    containerStyle: '',
    contentStyle: '',
    classPrefix: `.${prefix}-sticky`,
  };

  ready() {
    this.onScroll();
  }

  onScroll(event?: { scrollTop: number }) {
    const { scrollTop } = event || {};
    const { container, offsetTop, disabled } = this.properties;

    if (disabled) {
      this.setDataAfterDiff({
        isFixed: false,
        transform: 0,
      });
      return;
    }

    this.scrollTop = scrollTop || this.scrollTop;

    if (typeof container === 'function') {
      Promise.all([getRect(this, ContainerClass), this.getContainerRect()]).then(([root, container]) => {
        if (!root || !container) return;
        if (offsetTop + root.height > container.height + container.top) {
          this.setDataAfterDiff({
            isFixed: false,
            transform: container.height - root.height,
          });
        } else if (offsetTop >= root.top) {
          this.setDataAfterDiff({
            isFixed: true,
            height: root.height,
            transform: 0,
          });
        } else {
          this.setDataAfterDiff({ isFixed: false, transform: 0 });
        }
      });

      return;
    }

    getRect(this, ContainerClass).then((root) => {
      if (!root) return;
      if (offsetTop >= root.top) {
        this.setDataAfterDiff({ isFixed: true, height: root.height });
        this.transform = 0;
      } else {
        this.setDataAfterDiff({ isFixed: false });
      }
    });
  }

  setDataAfterDiff(data: { isFixed: boolean; height?: number; transform?: number }) {
    const { offsetTop } = this.properties;
    const { containerStyle: prevContainerStyle, contentStyle: prevContentStyle } = this.data;
    const { isFixed, height, transform } = data;
    wx.nextTick(() => {
      let containerStyle = '';
      let contentStyle = '';

      if (isFixed) {
        containerStyle += `height:${height}px;`;
        contentStyle += `position:fixed;top:${offsetTop}px`;
      }
      if (transform) {
        const translate = `translate3d(0, ${transform}px, 0)`;
        contentStyle += `-webkit-transform:${translate};transform:${translate};`;
      }

      if (prevContainerStyle !== containerStyle || prevContentStyle !== contentStyle) {
        this.setData({ containerStyle, contentStyle });
      }

      this.triggerEvent('scroll', {
        scrollTop: this.scrollTop,
        isFixed,
      });
    });
  }

  getContainerRect() {
    const nodesRef: WechatMiniprogram.NodesRef = this.properties.container();
    return new Promise<WechatMiniprogram.BoundingClientRectCallbackResult>((resolve) =>
      nodesRef.boundingClientRect(resolve).exec(),
    );
  }
}
