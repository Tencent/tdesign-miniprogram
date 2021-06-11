import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';

import { pageScrollMixin, getRect } from './utils';
const { prefix } = config;
const name = `${prefix}-sticky`;

const CONTAINER_CLASS = `.${name}`;
type ContainerRef = () => WechatMiniprogram.NodesRef;

interface StickyProps {
  zIndex: number;
  disabled: boolean;
  container: ContainerRef;
  offsetTop: number;
  scrollTop: number;
}

@wxComponent()
export default class Sticky extends SuperComponent {
  externalClasses = [`${prefix}-class`];
  properties: StickyProps = {
    zIndex: {
      type: Number,
      value: 99,
    },
    offsetTop: {
      type: Number,
      value: 0,
      observer: 'onScroll',
    },
    disabled: {
      type: Boolean,
      observer: 'onScroll',
    },
    container: {
      type: null,
      observer: 'onScroll',
    },
    scrollTop: {
      type: null,
      observer(this: Sticky, val: number) {
        this.onScroll({ scrollTop: val });
      },
    },
  } as any;

  behaviors = [
    pageScrollMixin(function (event) {
      if (this.properties.scrollTop != null) {
        return;
      }
      this.onScroll(event);
    }),
  ];

  data = {
    containerStyle: '',
    contentStyle: '',
    classPrefix: name,
  };

  mounted() {
    this.onScroll();
  }

  onScroll(event?: { scrollTop: number }) {
    const { scrollTop } = event || {};
    const { container, offsetTop, disabled } = this.properties;

    if (disabled) {
      this.setDataAfterDiff({
        fixed: false,
        transform: 0,
      });
      return;
    }

    this.scrollTop = scrollTop || this.scrollTop;

    if (typeof container === 'function') {
      Promise.all([getRect(this, CONTAINER_CLASS), this.getContainerRect()]).then(
        ([root, container]) => {
          if (offsetTop + root.height > container.height + container.top) {
            this.setDataAfterDiff({
              fixed: false,
              transform: container.height - root.height,
            });
          } else if (offsetTop >= root.top) {
            this.setDataAfterDiff({
              fixed: true,
              height: root.height,
              transform: 0,
            });
          } else {
            this.setDataAfterDiff({ fixed: false, transform: 0 });
          }
        },
      );

      return;
    }

    getRect(this, CONTAINER_CLASS).then((root) => {
      if (offsetTop >= root.top) {
        this.setDataAfterDiff({ fixed: true, height: root.height });
        this.transform = 0;
      } else {
        this.setDataAfterDiff({ fixed: false });
      }
    });
  }

  setDataAfterDiff(data: { fixed: boolean; height?: number; transform?: number }) {
    const { offsetTop } = this.properties;
    const { containerStyle: prevContainerStyle, contentStyle: prevContentStyle } = this.data;
    const { fixed, height, transform } = data;
    wx.nextTick(() => {
      let containerStyle = '';
      let contentStyle = '';

      if (fixed) {
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
        isFixed: data.fixed,
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
